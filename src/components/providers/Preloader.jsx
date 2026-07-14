"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";

export const PRELOADER_EVENT = "preloader:complete";

export default function Preloader() {
    const panelRef = useRef(null);
    const brandRef = useRef(null);
    const [active, setActive] = useState(true);
    const [done, setDone] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        if (active) {
            lenis?.stop();
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            lenis?.start();
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }

        return () => {
            lenis?.start();
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [active, lenis]);

    useLayoutEffect(() => {
        if (!panelRef.current) return;

        document.documentElement.classList.add("preloader-active");

        const ctx = gsap.context(() => {
            gsap.set(brandRef.current, { opacity: 0, y: 20 });

            const tl = gsap.timeline({
                defaults: { ease: "power4.inOut" },
                onComplete: () => {
                    document.documentElement.classList.remove("preloader-active");
                    window.__preloaderDone = true;
                    window.dispatchEvent(new Event(PRELOADER_EVENT));
                    setActive(false);
                    setDone(true);
                },
            });

            tl.to(brandRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
                delay: 0.15,
            })
                .to(brandRef.current, {
                    opacity: 0,
                    y: -16,
                    duration: 0.35,
                    ease: "power2.in",
                    delay: 0.35,
                })
                .to(
                    panelRef.current,
                    {
                        yPercent: -100,
                        duration: 0.9,
                    },
                    "-=0.1"
                );
        });

        return () => {
            ctx.revert();
            document.documentElement.classList.remove("preloader-active");
        };
    }, []);

    if (done) return null;

    return (
        <div
            ref={panelRef}
            className="fixed inset-0 z-9999 bg-black flex items-center justify-center will-change-transform"
            aria-hidden="true"
        >
            <p
                ref={brandRef}
                className="font-display text-white text-[7.5vw]! md:text-[3.5vw]! lg:text-[1.5vw]! font-bold leading-none tracking-tight"
            >
                <span className="text-primary text-[7.5vw]! md:text-[3.5vw]! lg:text-[1.5vw]!">Shape</span>logix
            </p>
        </div>
    );
}
