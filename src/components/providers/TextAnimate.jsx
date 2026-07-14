"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { PRELOADER_EVENT } from "./Preloader";
import { PAGE_TRANSITION_EVENT } from "./PageTransition";

gsap.registerPlugin(SplitText);

function runTextAnimation(el, { effect, duration, stagger, delay }) {
    if (effect === "bounce") {
        const split = SplitText.create(el, {
            type: "chars",
            charsClass: "text-animate-char",
        });

        gsap.set(split.chars, { y: -800, opacity: 0 });
        gsap.set(el, { visibility: "visible" });

        gsap.to(split.chars, {
            y: 0,
            opacity: 1,
            stagger: stagger ?? 0.3,
            duration: duration ?? 1,
            delay,
            ease: "bounce.out",
        });
        return;
    }

    const split = SplitText.create(el, {
        type: "words",
        wordsClass: "text-animate-word",
    });

    split.words.forEach((word) => {
        const mask = document.createElement("div");
        mask.className = "text-animate-mask";
        mask.style.display = "inline-block";
        mask.style.overflow = "hidden";
        mask.style.verticalAlign = "bottom";
        word.parentNode.insertBefore(mask, word);
        mask.appendChild(word);
    });

    gsap.set(split.words, {
        display: "inline-block",
        whiteSpace: "nowrap",
        yPercent: 110,
    });
    gsap.set(el, { visibility: "visible" });

    gsap.to(split.words, {
        yPercent: 0,
        duration: duration ?? 1.8,
        ease: "power4.inOut",
        stagger: stagger ?? 0.01,
        delay,
    });
}

export default function TextAnimate({
    text = "",
    className = "",
    as: Component = "span",
    effect = "clip",
    duration,
    stagger,
    delay = 0,
}) {
    const textRef = useRef(null);
    const optionsRef = useRef({ effect, duration, stagger, delay });
    optionsRef.current = { effect, duration, stagger, delay };

    useEffect(() => {
        if (!textRef.current || !text) return;

        let ctx;
        let cancelled = false;
        let raf1 = 0;
        let raf2 = 0;

        const play = () => {
            if (cancelled || !textRef.current) return;

            ctx = gsap.context(() => {
                runTextAnimation(textRef.current, optionsRef.current);
            }, textRef);
        };

        const arm = () => {
            // Double rAF: wait until after paint so SplitText measures a settled layout on soft navigations.
            raf1 = requestAnimationFrame(() => {
                if (cancelled) return;
                raf2 = requestAnimationFrame(() => {
                    if (cancelled) return;

                    if (document.fonts?.status === "loading") {
                        document.fonts.ready.then(() => {
                            if (!cancelled) play();
                        });
                        return;
                    }

                    play();
                });
            });
        };

        if (typeof window !== "undefined" && window.__pageTransitionActive) {
            window.addEventListener(PAGE_TRANSITION_EVENT, arm, { once: true });
        } else if (typeof window !== "undefined" && window.__preloaderDone) {
            arm();
        } else {
            window.addEventListener(PRELOADER_EVENT, arm, { once: true });
        }

        return () => {
            cancelled = true;
            cancelAnimationFrame(raf1);
            cancelAnimationFrame(raf2);
            window.removeEventListener(PRELOADER_EVENT, arm);
            window.removeEventListener(PAGE_TRANSITION_EVENT, arm);
            ctx?.revert();
        };
    }, [text, effect]);

    return (
        <Component
            ref={textRef}
            className={className}
            aria-label={text}
            style={{ display: "inline", visibility: "hidden" }}
        >
            {text}
        </Component>
    );
}
