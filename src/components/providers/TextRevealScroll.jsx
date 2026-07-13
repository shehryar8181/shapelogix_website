"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextRevealScroll({
    text = "",
    className = "",
    as: Component = "span",
    duration = 1.5,
    stagger = 0.03,
    start = "top 85%",
    end = "top 85%",
}) {
    const textRef = useRef(null);
    const optionsRef = useRef({ duration, stagger, start, end });
    optionsRef.current = { duration, stagger, start, end };

    useEffect(() => {
        if (!textRef.current || !text) return;

        const {
            duration: animDuration,
            stagger: animStagger,
            start: animStart,
            end: animEnd,
        } = optionsRef.current;

        const ctx = gsap.context(() => {
            const split = SplitText.create(textRef.current, {
                type: "words",
                wordsClass: "text-reveal-word",
            });

            split.words.forEach((word) => {
                const wrapper = document.createElement("div");
                wrapper.className = "text-reveal-mask py-1";
                wrapper.style.display = "inline-block";
                wrapper.style.overflow = "hidden";
                wrapper.style.verticalAlign = "bottom";
                word.parentNode.insertBefore(wrapper, word);
                wrapper.appendChild(word);
            });

            gsap.set(split.words, {
                whiteSpace: "nowrap",
                display: "inline-block",
            });

            gsap.from(split.words, {
                y: 50,
                opacity: 0,
                stagger: animStagger,
                duration: animDuration,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: animStart,
                    end: animEnd,
                    scrub: 3,
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
            style={{ display: "inline" }}
        >
            {text}
        </Component>
    );
}
