"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
];

export default function AboutStats() {
    const gridRef = useRef(null);

    useEffect(() => {
        if (!gridRef.current) return;

        const cards = gridRef.current.querySelectorAll(".about-stat-card");

        const ctx = gsap.context(() => {
            gsap.from(cards, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                    end: "top 45%",
                    scrub: 1.5,
                },
            });
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[1vw] mt-4 lg:mt-[1.5vw] px-0 lg:px-[0.5vw]"
        >
            {stats.map((stat, i) => (
                <div
                    key={i}
                    className="about-stat-card bg-white relative z-11 py-8 px-4 lg:py-[2vw] lg:px-[1.5vw] flex flex-col gap-[3vw] rounded-md lg:rounded-[0.3vw]"
                >
                    <div className="flex flex-col gap-3 lg:gap-[0.5vw]">
                        <div className="flex items-center gap-1 lg:gap-[0.3vw] bg-black w-fit p-1 lg:p-[0.3vw] rounded-full">
                            {[...Array(4)].map((_, dotIndex) => {
                                const isActive = dotIndex <= i;

                                return (
                                    <div
                                        key={dotIndex}
                                        className={`w-1.5 h-1.5 lg:w-[0.3vw] lg:h-[0.3vw] rounded-full ${isActive ? "bg-white" : "bg-white/30"}`}
                                    />
                                );
                            })}
                        </div>
                        <span className="text-secondary">
                            {stat.label}
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-[0.5vw]">
                        <h3 className="font-black!">{stat.value}</h3>
                        <p className="text-secondary max-w-1/2">
                            {stat.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
