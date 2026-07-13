"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextColorScroll({
    text = "",
    className = "",
    as: Component = "h3",
    start = "top 80%",
    end = "top 35%",
    scrub = 2,
}) {
    const textRef = useRef(null);
    const optionsRef = useRef({ start, end, scrub });
    optionsRef.current = { start, end, scrub };

    useEffect(() => {
        if (!textRef.current || !text) return;

        const { start: animStart, end: animEnd, scrub: animScrub } = optionsRef.current;

        const ctx = gsap.context(() => {
            const split = SplitText.create(textRef.current, {
                type: "words,chars",
                wordsClass: "text-color-word",
                charsClass: "text-color-char",
            });

            gsap.set(split.words, {
                display: "inline-block",
                whiteSpace: "nowrap",
            });

            gsap.set(split.chars, {
                color: "rgba(0, 0, 0, 0.07)",
                display: "inline-block",
            });

            gsap.to(split.chars, {
                color: "#000000",
                stagger: 0.02,
                ease: "none",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: animStart,
                    end: animEnd,
                    scrub: animScrub,
                },
            });
        }, textRef);

        return () => ctx.revert();
    }, [text]);

    return (
        <Component
            ref={textRef}
            className={className}
            aria-label={text}
        >
            {text}
        </Component>
    );
}
