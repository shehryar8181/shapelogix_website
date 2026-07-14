"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextRevealScroll from "../providers/TextRevealScroll";

gsap.registerPlugin(ScrollTrigger);

export default function ClientPain({
    eyebrow = "// Client's pain",
    title = "Are you facing these challenges",
    description = "",
    challenges = [],
}) {
    const cardsRef = useRef(null);

    useEffect(() => {
        if (!cardsRef.current) return;

        const cards = cardsRef.current.querySelectorAll(".client-pain-card");

        const ctx = gsap.context(() => {
            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    {
                        x: 140,
                        y: 180,
                        rotate: 5,
                        opacity: 0.4,
                        transformOrigin: "right bottom",
                    },
                    {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        opacity: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            end: "top 42%",
                            scrub: 1.4,
                        },
                    }
                );
            });
        }, cardsRef);

        return () => ctx.revert();
    }, [challenges]);

    return (
        <section className="client-pain wrapper relative py-20! md:py-30! lg:py-[10vw]! bg-background">
            <div className="relative z-11 grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] lg:items-start gap-10 lg:gap-[3vw]">
                <div className="lg:sticky lg:top-[28%] lg:self-start h-fit">
                    <TextRevealScroll
                        as="span"
                        start="top 85%"
                        className="text-secondary"
                        text={eyebrow}
                    />

                    <TextRevealScroll
                        as="h2"
                        start="top 85%"
                        className="mt-3 mb-4 lg:mt-[1vw] lg:mb-[1.2vw] lg:max-w-[12ch] block!"
                        text={title}
                    />

                    {description ? (
                        <TextRevealScroll
                            as="p"
                            start="top 85%"
                            className="text-secondary lg:max-w-[34ch]"
                            text={description}
                        />
                    ) : null}
                </div>

                <div ref={cardsRef} className="flex flex-col gap-4 lg:gap-[1vw] overflow-hidden lg:overflow-visible">
                    {challenges.map((item) => (
                        <article
                            key={item.number}
                            className="client-pain-card will-animate grid grid-cols-1 md:grid-cols-[1.55fr_0.85fr] gap-4 lg:gap-[1.2vw] h-auto lg:h-[18vw] items-center bg-white rounded-xl lg:rounded-[0.8vw] p-5 lg:p-[1.6vw] overflow-hidden relative"
                        >
                            <div className="flex flex-col gap-3 lg:gap-[0.7vw] py-1 lg:py-[0.4vw] relative z-1">
                                <span className="text-primary! text-2xl! lg:text-[2vw]! font-bold! leading-none!">
                                    {item.number}
                                </span>

                                <h5 className="text-foreground! font-bold! text-[18px]! lg:text-[1.4vw]!">
                                    {item.title}
                                </h5>

                                <p className="text-secondary leading-[125%]! lg:max-w-[34ch]">
                                    {item.description}
                                </p>
                            </div>

                            <div className="md:w-[30vw] h-full rounded-lg lg:rounded-[0.55vw] overflow-hidden relative md:absolute md:right-0 md:top-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
