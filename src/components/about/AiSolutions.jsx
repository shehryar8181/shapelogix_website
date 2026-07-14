"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextRevealScroll from "../providers/TextRevealScroll";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
    {
        number: "01",
        title: "AI strategy & direction",
        description:
            "Helping leadership teams clarify where AI fits, what to prioritize, and how success should be measured before significant investment.",
        idealFor:
            "Organizations beginning their AI journey or reassessing fragmented AI initiatives that lack clear ownership or strategic alignment.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%208.png",
    },
    {
        number: "02",
        title: "AI validation & early execution",
        description:
            "Helping organizations test AI ideas in real conditions, validate value and feasibility, and build early solutions before committing to broader rollout.",
        idealFor:
            "Organizations that want to move from experimentation to action without committing to large-scale rollouts too early.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%208%20(1).png",
    },
    {
        number: "03",
        title: "AI-enabled operations",
        description:
            "Embedding AI into day-to-day operations to streamline workflows, improve decision-making, and deliver reliable outcomes at scale.",
        idealFor:
            "Teams ready to operationalize proven AI use cases across processes, support, and internal tooling.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%208%20(2).png",
    },
    {
        number: "04",
        title: "AI-powered products & platforms",
        description:
            "Working with product teams to integrate intelligence into digital products and platforms so they evolve, adapt, and improve over time.",
        idealFor:
            "Product-led and digital-first organizations building customer-facing platforms or intelligent software products.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%208%20(3).png",
    },
];

export default function AiSolutions() {
    const cardsRef = useRef(null);

    useEffect(() => {
        if (!cardsRef.current) return;

        const cards = cardsRef.current.querySelectorAll(".ai-solution-card");

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
    }, []);

    return (
        <section className="ai-solutions wrapper relative pt-20! md:pt-30! lg:pt-[10vw]! bg-background">
            <div className="relative z-11 grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] lg:items-start gap-10 lg:gap-[3vw]">
                <div className="lg:sticky lg:top-[28%] lg:self-start h-fit">
                    <TextRevealScroll
                        as="span"
                        start="top 85%"
                        className="text-secondary"
                        text="// AI strategy & direction"
                    />

                    <h2 className="mt-3 mb-4 lg:mt-[1vw] lg:mb-[1.2vw] lg:max-w-[12ch]">
                        <TextRevealScroll
                            as="span"
                            start="top 85%"
                            className="text-foreground!"
                            text="How shapelogix supports the full "
                        />
                        <TextRevealScroll
                            as="span"
                            start="top 85%"
                            className="text-primary!"
                            text="AI life cycle"
                        />
                    </h2>

                    <TextRevealScroll
                        as="p"
                        start="top 85%"
                        className="text-secondary lg:max-w-[34ch]"
                        text="Focusing strictly on tangible engineering outcomes, technical agility, and ironclad data security."
                    />
                </div>

                <div ref={cardsRef} className="flex flex-col gap-4 lg:gap-[1vw] overflow-hidden lg:overflow-visible">
                    {solutions.map((item) => (
                        <article
                            key={item.number}
                            className="ai-solution-card will-animate grid grid-cols-1 md:grid-cols-[1.55fr_0.85fr] gap-4 lg:gap-[1.2vw] h-[92px] lg:h-[22vw] items-center bg-white rounded-xl lg:rounded-[0.8vw] p-5 lg:p-[1.6vw] overflow-hidden relative"
                        >
                            <div className="flex flex-col gap-3 lg:gap-[0.7vw] py-1 lg:py-[0.4vw]">
                                <span className="text-primary! text-2xl! lg:text-[2vw]! font-bold! leading-none!">
                                    {item.number}
                                </span>

                                <h5 className="text-foreground! font-bold! text-[18px]! lg:text-[1.4vw]!">
                                    {item.title}
                                </h5>

                                <p className="text-secondary leading-[125%]!">{item.description}</p>

                                <p className="text-secondary leading-[125%]! pt-1 lg:pt-[0.3vw]">
                                    <span className="font-semibold text-foreground font-sans! tracking-normal! text-[14px]! lg:text-[0.9vw]!">
                                        Ideal for:{" "}
                                    </span>
                                    {item.idealFor}
                                </p>
                            </div>

                            <div className="md:w-[20vw] rounded-lg lg:rounded-[0.55vw] overflow-hidden absolute right-0 top-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
