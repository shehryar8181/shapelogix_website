"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { PRELOADER_EVENT } from "./Preloader";

gsap.registerPlugin(SplitText);

function runTextAnimation(el, options) {
    const {
        effect: animEffect,
        duration: animDuration,
        stagger: animStagger,
        delay: animDelay,
    } = options;

    if (animEffect === "bounce") {
        const split = SplitText.create(el, {
            type: "chars",
            charsClass: "text-animate-char",
        });

        gsap.set(split.chars, { y: -800, opacity: 0 });
        gsap.set(el, { visibility: "visible" });

        gsap.to(split.chars, {
            y: 0,
            opacity: 1,
            stagger: animStagger ?? 0.3,
            duration: animDuration ?? 1,
            delay: animDelay,
            ease: "bounce.out",
        });

        return;
    }

    const split = SplitText.create(el, {
        type: "words",
        wordsClass: "text-animate-word",
    });

    gsap.set(split.words, {
        whiteSpace: "nowrap",
        clipPath: "inset(0 0% 100% 0)",
    });
    gsap.set(el, { visibility: "visible" });

    gsap.to(split.words, {
        clipPath: "inset(0 0% -4px 0)",
        duration: animDuration ?? 1.8,
        ease: "power4.inOut",
        stagger: animStagger ?? 0.01,
        delay: animDelay,
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

    useLayoutEffect(() => {
        if (!textRef.current || !text) return;

        let ctx;
        let started = false;

        const start = () => {
            if (started || !textRef.current) return;
            started = true;

            ctx = gsap.context(() => {
                runTextAnimation(textRef.current, optionsRef.current);
            }, textRef);
        };

        if (typeof window !== "undefined" && window.__preloaderDone) {
            start();
        } else {
            window.addEventListener(PRELOADER_EVENT, start, { once: true });
        }

        return () => {
            window.removeEventListener(PRELOADER_EVENT, start);
            ctx?.revert();
        };
    }, [text]);

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
