"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageRevealScroll({
    src,
    alt = "",
    className = "",
    wrapperClassName = "",
    duration = 1.5,
    start = "top 85%",
    end = "top 85%",
}) {
    const wrapRef = useRef(null);
    const imgRef = useRef(null);
    const optionsRef = useRef({ duration, start, end });
    optionsRef.current = { duration, start, end };

    useEffect(() => {
        if (!wrapRef.current || !imgRef.current || !src) return;

        const { duration: animDuration, start: animStart, end: animEnd } = optionsRef.current;

        const ctx = gsap.context(() => {
            gsap.from(imgRef.current, {
                yPercent: 40,
                opacity: 0,
                scale: 1.15,
                duration: animDuration,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: wrapRef.current,
                    start: animStart,
                    end: animEnd,
                    scrub: 3,
                },
            });
        }, wrapRef);

        return () => ctx.revert();
    }, [src]);

    return (
        <div ref={wrapRef} className={`overflow-hidden ${wrapperClassName}`}>
            <img ref={imgRef} src={src} alt={alt} className={className} />
        </div>
    );
}
