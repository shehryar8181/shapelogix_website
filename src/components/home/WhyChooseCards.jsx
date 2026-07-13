"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseCards() {
    const gridRef = useRef(null);
    const countRef = useRef(null);

    useEffect(() => {
        if (!gridRef.current) return;

        const root = gridRef.current;

        const ctx = gsap.context(() => {
            // 100% count-up
            if (countRef.current) {
                const counter = { value: 0 };
                const card = countRef.current.closest(".why-card");

                gsap.to(counter, {
                    value: 100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card || countRef.current,
                        start: "top 50%",
                        end: "top 40%",
                        scrub: 3,
                    },
                    onUpdate: () => {
                        if (countRef.current) {
                            countRef.current.textContent = `${Math.round(counter.value)}%`;
                        }
                    },
                });
            }

            // Inner-card parallax layers
            root.querySelectorAll("[data-parallax]").forEach((layer) => {
                // const amount = Number(layer.dataset.parallax) || 10;
                const card = layer.closest(".why-card");

                gsap.fromTo(
                    layer,
                    { y: 50 },
                    {
                        y: -20,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card || root,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={gridRef} className="grid lg:grid-cols-2 gap-4 md:px-2 mt-6 lg:mt-[3vw]">
            <div className="why-card flex flex-col justify-between gap-2 relative z-11 bg-black py-5 px-4 rounded-lg lg:rounded-[1vw] lg:p-[2vw] min-h-[450px] lg:min-h-[44vw] overflow-hidden">
                <video
                    src="https://ik.imagekit.io/avonpbsnr/shapelogix/hero-bg-video.mp4?updatedAt=1783420604513"
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover opacity-10 absolute inset-0 pointer-events-none"
                />

                <div className="lg:max-w-1/2 relative z-1">
                    <h3 className="text-white font-bold! mb-3">
                        <span className="text-primary! font-bold!">Design</span> that drives growth
                    </h3>
                    <p>We focus on creating work that helps brands grow, scale, and compete with confidence.</p>
                </div>

                <div className="flex items-end justify-between gap-2 relative z-1">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Image src="/clarity.svg" alt="Clarity" width={16} height={18} />
                            <p className="text-white!">Clarity</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Image src="/performance.svg" alt="Performance" width={16} height={18} />
                            <p className="text-white!">Performance</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Image src="/scale.svg" alt="Scale" width={16} height={18} />
                            <p className="text-white!">Scale</p>
                        </div>
                    </div>

                    <h2 ref={countRef} className="text-white!">
                        0%
                    </h2>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="why-card flex flex-col justify-between gap-2 relative z-11 overflow-hidden bg-[linear-gradient(180deg,#2C277F_0%,#4F46E5_100%)] py-5 px-4 rounded-lg lg:rounded-[1vw] lg:py-[2vw] lg:px-[1vw] h-[400px] lg:h-[28vw]">
                    <div className="relative z-1">
                        <h5 className="text-white font-bold! mb-3">Clarity over complexity</h5>
                        <p className="text-white/50!">
                            We believe the best solutions are clear, focused, and free from unnecessary noise or distraction.
                        </p>
                    </div>

                    <div
                        className="absolute left-0 bottom-1 mt-auto w-full text-center leading-none will-change-transform"
                        data-parallax="200"
                    >
                        <h1 className="text-black relative z-10 leading-none! text-[65px]! lg:text-[4vw]! font-black!">
                            FOCUS
                        </h1>
                        <h1 className="text-white -mt-12 lg:mt-[-3.4vw] translate-y-[28%] leading-none! text-[65px]! lg:text-[4vw]! font-black!">
                            MEANING
                        </h1>
                    </div>
                </div>

                <div className="why-card flex flex-col justify-center items-center text-center gap-2 relative z-11 overflow-hidden bg-white py-5 px-4 rounded-lg lg:rounded-[1vw] lg:py-[2vw] lg:px-[1vw] h-[210px] lg:h-[28vw]">
                    <div
                        className="absolute inset-[-5%] bg-cover bg-center will-change-transform"
                        data-parallax="55"
                        style={{
                            backgroundImage: "url('https://ik.imagekit.io/avonpbsnr/shapelogix/image%203.png')",
                        }}
                    />
                    <div className="relative z-1">
                        <h5 className="font-bold! mb-3">Built with intention</h5>
                        <p>We believe the best solutions are clear, focused, and free from unnecessary noise or distraction.</p>
                    </div>
                </div>

                <div className="why-card relative z-11 overflow-hidden bg-white py-5 px-4 rounded-lg lg:rounded-[1vw] lg:py-[2vw] lg:px-[1vw] h-[210px] lg:h-[15vw]">
                    <h5 className="font-bold! mb-3 relative z-1">For ambitious team</h5>
                    <div className="absolute inset-x-0 bottom-0 top-10 will-change-transform" data-parallax="40">
                        <Image
                            src="/bar-chart.svg"
                            alt="For ambitious team"
                            width={100}
                            height={100}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <div className="why-card relative z-11 overflow-hidden bg-white py-5 px-4 rounded-lg lg:rounded-[1vw] lg:py-[2vw] lg:px-[1vw] h-[210px] lg:h-[15vw]">
                    <h5 className="font-bold! mb-3 relative z-2">Strategy & Aesthetices</h5>
                    <div className="absolute -inset-[12%] will-change-transform" data-parallax="48">
                        <Image
                            src="/strategy.svg"
                            alt="Strategy & Aesthetics"
                            width={100}
                            height={100}
                            className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
