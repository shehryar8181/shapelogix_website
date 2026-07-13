"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
    {
        lead: "At",
        body: "the end of the day, we're here to help your brand grow. That means thinking beyond visuals, designing with purpose, and delivering work that supports your goals, your team, and your future plans.",
        name: "Umer Aziz",
        role: "CEO of Sd Solutions",
        avatar: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%206.png",
        stats: Array(4).fill({ value: "+65%", label: "Brand Awareness" }),
    },
    {
        body: "Working with Shapelogix gave us clarity, speed, and a product our users actually love. The team understood our goals from day one and delivered beyond expectations.",
        name: "Sarah Khan",
        role: "Founder of Nova Labs",
        avatar: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%206.png",
        stats: Array(4).fill({ value: "+48%", label: "User Retention" }),
    },
];

export default function SocialProof() {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const slide = slides[index];

    const changeSlide = (direction) => {
        if (isAnimating) return;

        setIsAnimating(true);
        setTimeout(() => {
            setIndex((i) => {
                if (direction === "prev") {
                    return i === 0 ? slides.length - 1 : i - 1;
                }
                return i === slides.length - 1 ? 0 : i + 1;
            });

            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsAnimating(false));
            });
        }, 180);
    };

    return (
        <section className="social-proof wrapper relative pt-20! md:pt-30! lg:pt-[10vw]! bg-background">
            <div className="grid md:grid-cols-4 gap-4 justify-between mb-3 lg:mb-[2vw]">
                <span className="text-secondary pt-2">// Social Proof</span>
                <h2 className="col-span-2 lg:max-w-1/2">Trusted by great teams</h2>
                <p>Real projects, real challenges, and real results, crafted with clarity, creativity, and purpose.</p>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="md:w-[24%] mt-5 lg:mt-[4vw]" />

                <div className={`md:max-w-[50%] bg-background py-[3vw] md:border border-dashed md:border-l-0 border-borders relative z-11 min-h-[23vw] transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}>
                    <h3 className="opacity-20">
                        {slide.lead && <span className="text-foreground! opacity-100!">{slide.lead}</span>}
                        {" "}{slide.body}
                    </h3>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className={`flex items-center gap-3 px-0 py-4 lg:px-[1.5vw] lg:py-[1.2vw] border-b lg:border-b-0 border-borders border-dashed lg:border-r transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}>
                    <img src={slide.avatar} alt={slide.name} className="size-12 lg:size-[3vw] rounded-sm object-cover border border-borders" />
                    <div>
                        <h6 className="font-bold! text-foreground!">{slide.name}</h6>
                        <span className="text-secondary">{slide.role}</span>
                    </div>
                </div>

                <div className={`hidden md:grid grid-cols-2 md:grid-cols-4 md:col-span-2 border-b lg:border-b-0 border-borders border-dashed lg:border-r bg-background relative z-11 transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}>
                    {slide.stats.map((stat, i) => (
                        <div key={i} className="py-4 lg:py-[1.2vw] border-r border-borders border-dashed">
                            <h5 className="font-bold! text-foreground!">{stat.value}</h5>
                            <span className="text-secondary">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end gap-1 items-end">
                    <button type="button" onClick={() => changeSlide("prev")} aria-label="Previous" className="flex w-15! h-15 items-center cursor-pointer justify-center bg-primary text-white hover:bg-primary/90 border-r border-white/15">
                        <ArrowLeft className="size-5" />
                    </button>
                    <button type="button" onClick={() => changeSlide("next")} aria-label="Next" className="flex w-15! h-15 items-center cursor-pointer justify-center bg-primary text-white hover:bg-primary/90">
                        <ArrowRight className="size-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
