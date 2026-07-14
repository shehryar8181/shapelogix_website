"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

export const PAGE_TRANSITION_EVENT = "page-transition:complete";
export const PAGE_TRANSITION_START = "page-transition:start";

function getInternalHref(anchor) {
    if (!anchor) return null;

    const href = anchor.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return null;
    }

    if (anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return null;
    }

    try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return null;
        return url;
    } catch {
        return null;
    }
}

function waitTwoFrames() {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(resolve);
        });
    });
}

function waitForFonts() {
    if (typeof document === "undefined" || !document.fonts) {
        return Promise.resolve();
    }

    if (document.fonts.status === "loaded") {
        return Promise.resolve();
    }

    return Promise.race([
        document.fonts.ready,
        new Promise((resolve) => setTimeout(resolve, 1500)),
    ]);
}

function waitForImages() {
    const images = Array.from(document.images).filter((img) => !img.complete);

    if (!images.length) return Promise.resolve();

    return Promise.race([
        Promise.all(
            images.map(
                (img) =>
                    new Promise((resolve) => {
                        const done = () => resolve();
                        img.addEventListener("load", done, { once: true });
                        img.addEventListener("error", done, { once: true });
                    })
            )
        ),
        new Promise((resolve) => setTimeout(resolve, 2000)),
    ]);
}

async function waitForPageReady() {
    await waitForFonts();
    await waitTwoFrames();
    await waitForImages();
    await waitTwoFrames();
}

export default function PageTransition() {
    const panelRef = useRef(null);
    const router = useRouter();
    const pathname = usePathname();
    const pathnameRef = useRef(pathname);
    const busyRef = useRef(false);
    const pendingPathRef = useRef(null);
    const pendingResolveRef = useRef(null);

    useEffect(() => {
        pathnameRef.current = pathname;

        if (pendingPathRef.current === pathname && pendingResolveRef.current) {
            const resolve = pendingResolveRef.current;
            pendingPathRef.current = null;
            pendingResolveRef.current = null;
            // Let React commit the new page tree before we consider navigation done.
            requestAnimationFrame(() => resolve());
        }
    }, [pathname]);

    useEffect(() => {
        const panel = panelRef.current;
        if (!panel) return;

        gsap.set(panel, { yPercent: 100 });

        const waitForRoute = (targetPath, href) =>
            new Promise((resolve) => {
                if (pathnameRef.current === targetPath) {
                    resolve();
                    return;
                }

                pendingPathRef.current = targetPath;
                pendingResolveRef.current = resolve;
                router.push(href);

                // Safety net if navigation stalls.
                window.setTimeout(() => {
                    if (pendingResolveRef.current === resolve) {
                        pendingPathRef.current = null;
                        pendingResolveRef.current = null;
                        resolve();
                    }
                }, 4000);
            });

        const finish = () => {
            busyRef.current = false;
            window.__pageTransitionActive = false;
            panel.style.pointerEvents = "none";
            gsap.set(panel, { yPercent: 100 });
            window.dispatchEvent(new Event(PAGE_TRANSITION_EVENT));
        };

        const runTransition = async (href, targetPath) => {
            busyRef.current = true;
            window.__pageTransitionActive = true;
            window.dispatchEvent(new Event(PAGE_TRANSITION_START));
            panel.style.pointerEvents = "auto";

            try {
                await gsap.fromTo(
                    panel,
                    { yPercent: 100 },
                    { yPercent: 0, duration: 0.65, ease: "power4.inOut" }
                );

                await waitForRoute(targetPath, href);
                await waitForPageReady();

                await gsap.to(panel, {
                    yPercent: -100,
                    duration: 0.65,
                    ease: "power4.inOut",
                });
            } finally {
                finish();
            }
        };

        const onClick = (event) => {
            if (event.defaultPrevented || event.button !== 0) return;
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

            const anchor = event.target.closest("a");
            const url = getInternalHref(anchor);
            if (!url) return;

            if (url.pathname === pathnameRef.current && url.search === window.location.search) {
                return;
            }

            if (busyRef.current) {
                event.preventDefault();
                return;
            }

            event.preventDefault();

            const next = `${url.pathname}${url.search}${url.hash}`;
            runTransition(next, url.pathname);
        };

        document.addEventListener("click", onClick, true);

        return () => {
            document.removeEventListener("click", onClick, true);
            gsap.killTweensOf(panel);
            pendingPathRef.current = null;
            pendingResolveRef.current = null;
        };
    }, [router]);

    return (
        <div
            ref={panelRef}
            className="pointer-events-none fixed inset-0 z-9998 bg-black will-change-transform"
            aria-hidden="true"
        />
    );
}
