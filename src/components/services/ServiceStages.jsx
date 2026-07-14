"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextRevealScroll from "../providers/TextRevealScroll";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceStages({
    eyebrow = "// Shapelogix's support",
    title = "",
    description = "",
    items = [],
}) {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current || !trackRef.current || !items.length) return;

        const section = sectionRef.current;
        const track = trackRef.current;

        const ctx = gsap.context(() => {
            const getScrollDistance = () =>
                Math.max(track.scrollWidth - window.innerWidth, 0);

            gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getScrollDistance() + window.innerHeight * 0.35}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                },
            });
        }, section);

        return () => ctx.revert();
    }, [items]);

    return (
        <section
            ref={sectionRef}
            className="service-stages h-svh overflow-hidden relative z-11"
        >
            <div
                ref={trackRef}
                className="relative z-11 flex h-full items-center gap-6 lg:gap-[3vw] will-change-transform"
            >
                <div className="service-stages-intro wrapper shrink-0 w-[88%] sm:w-[72%] md:w-[46%] lg:w-[60%] flex flex-col justify-center gap-4 lg:gap-[1.2vw] py-16 lg:py-[4vw]">
                    <TextRevealScroll
                        as="span"
                        start="top 85%"
                        className="text-secondary"
                        text={eyebrow}
                    />
                    <TextRevealScroll
                        as="h2"
                        start="top 85%"
                        className="text-foreground! block!"
                        text={title}
                    />
                    {description ? (
                        <TextRevealScroll
                            as="p"
                            start="top 85%"
                            className="text-secondary"
                            text={description}
                        />
                    ) : null}
                </div>

                {items.map((item) => (
                    <article
                        key={`${item.stage}-${item.title}`}
                        className="shrink-0 w-[300px] sm:w-[340px] lg:w-[36vw] min-h-[360px] lg:min-h-[30vw] bg-[#f2f2f2] border border-dashed border-borders rounded-sm lg:rounded-[0.25vw] p-6 lg:p-[1.8vw] flex flex-col gap-5 lg:gap-[1.4vw]"
                    >
                        <span className="text-secondary text-[12px]! lg:text-[0.75vw]! tracking-wide">
                            {item.stage}
                        </span>
                        <h5 className="text-foreground! font-bold! mt-auto">{item.title}</h5>
                        <ul className="flex flex-col gap-4 lg:gap-[1vw]">
                            {item.points?.map((point) => (
                                <li
                                    key={point}
                                    className="flex gap-3 text-secondary leading-[140%]!"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="mt-[0.85em] h-px w-3 lg:w-[0.7vw] shrink-0 bg-secondary/70"
                                    />
                                    <span className="text-[14px]! lg:text-[0.8vw]!">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}

                <div className="shrink-0 w-[2vw]" aria-hidden="true" />
            </div>
        </section>
    );
}
