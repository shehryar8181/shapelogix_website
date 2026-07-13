"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

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

        const {
            effect: animEffect,
            duration: animDuration,
            stagger: animStagger,
            delay: animDelay,
        } = optionsRef.current;

        const ctx = gsap.context(() => {
            if (animEffect === "bounce") {
                const split = SplitText.create(textRef.current, {
                    type: "chars",
                    charsClass: "text-animate-char",
                });

                gsap.from(split.chars, {
                    y: -800,
                    opacity: 0,
                    stagger: animStagger ?? 0.2,
                    duration: animDuration ?? 0.8,
                    delay: animDelay,
                    ease: "bounce.out",
                });

                return;
            }

            const split = SplitText.create(textRef.current, {
                type: "words",
                wordsClass: "text-animate-word",
            });

            gsap.set(split.words, {
                whiteSpace: "nowrap",
                clipPath: "inset(0 0% 100% 0)",
            });

            gsap.to(split.words, {
                clipPath: "inset(0 0% -4px 0)",
                duration: animDuration ?? 1.8,
                ease: "power4.inOut",
                stagger: animStagger ?? 0.01,
                delay: animDelay,
            });
        }, textRef);

        return () => ctx.revert();
    }, [text]);

    return (
        <Component
            ref={textRef}
            className={className}
            aria-label={text}
            style={{ display: "inline" }}
        >
            {text}
        </Component>
    );
}
