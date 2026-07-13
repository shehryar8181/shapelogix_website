import Image from "next/image";
import TextRevealScroll from "../providers/TextRevealScroll";

export default function WhyChoose() {
    return (
        <section className="why-choose wrapper relative pt-20! md:pt-30! lg:pt-[10vw]! bg-background">
            <div className="grid md:grid-cols-4 gap-4 justify-between mb-3 lg:mb-[2vw]">
                <span className="text-secondary pt-2">// Why Shapelogix</span>
                <TextRevealScroll
                    as="h2"
                    className="col-span-2"
                    text="Positioned for lasting success"
                />
                <TextRevealScroll
                    as="p"
                    text="Focusing strictly on tangible engineering outcomes, technical agility, and ironclad data security."
                />
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="md:max-w-[24%] mt-5 lg:mt-[4vw]">
                    <div className="flex flex-wrap gap-2 lg:gap-[0.3vw]">
                        <span className="p-1 lg:p-[0.3vw] border border-gray-400 border-dashed">ISO & SOC2 Aligned</span>
                        <span className="p-1 lg:p-[0.3vw] border border-gray-400 border-dashed">CI/CD AUTOMATED</span>
                        <span className="p-1 lg:p-[0.3vw] border border-gray-400 border-dashed">ZERO-TRUST ARCHITECTURE</span>
                    </div>
                </div>

                <div className="md:max-w-[50%] bg-background py-[3vw] md:border border-dashed md:border-l-0 border-borders relative z-11">
                    <h3 className="opacity-20">
                        At the end of the day, we’re here to help your brand grow. That means thinking beyond visuals, designing with purpose, and delivering work that supports your goals, your team, and your future plans.
                    </h3>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 md:px-2 mt-6 lg:mt-[3vw]">
                <div className="flex flex-col justify-between gap-2 relative z-11 bg-black py-5 px-4 rounded-lg lg:rounded-[1vw] lg:p-[2vw] min-h-[450px] lg:min-h-[44vw]">
                    <video src="https://ik.imagekit.io/avonpbsnr/shapelogix/hero-bg-video.mp4?updatedAt=1783420604513" autoPlay muted loop className="w-full h-full object-cover opacity-10 absolute inset-0 pointer-events-none"></video>

                    <div className="lg:max-w-1/2">
                        <h3 className="text-white font-bold! mb-3"><span className="text-primary! font-bold!">Design</span> that drives growth</h3>
                        <p>We focus on creating work that helps brands grow, scale, and compete with confidence.</p>
                    </div>

                    <div className="flex items-end justify-between gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <Image src="/clarity.svg" alt="Clarity" width={16} height={18} />
                                <p className="text-white!">Clarity</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Image src="/performance.svg" alt="Clarity" width={16} height={18} />
                                <p className="text-white!">Performance</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Image src="/scale.svg" alt="Clarity" width={16} height={18} />
                                <p className="text-white!">Scale</p>
                            </div>
                        </div>

                        <h2 className="text-white!">100%</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-between gap-2 relative z-11 overflow-hidden bg-[linear-gradient(180deg,#2C277F_0%,#4F46E5_100%)] py-5 px-4 rounded-lg lg:rounded-[1vw] lg:py-[2vw] lg:px-[1vw] h-[400px] lg:h-[28vw]">
                        <div>
                            <h5 className="text-white font-bold! mb-3">Clarity over complexity</h5>
                            <p className="text-white/50!">We believe the best solutions are clear, focused, and free from unnecessary noise or distraction.</p>
                        </div>

                        <div className="absolute left-0 bottom-1 mt-auto w-full text-center leading-none">
                            <h1 className=" text-black relative z-10 leading-none! text-[65px]! lg:text-[4vw]! font-black!">
                                FOCUS
                            </h1>
                            <h1 className=" text-white -mt-12 lg:mt-[-3.4vw] translate-y-[28%] leading-none! text-[65px]! lg:text-[4vw]! font-black!">
                                MEANING
                            </h1>
                        </div>
                    </div>

                    <div
                        className="flex flex-col justify-center items-center text-center gap-2 relative z-11 overflow-hidden bg-white py-5 px-4 rounded-lg lg:rounded-[1vw] lg:py-[2vw] lg:px-[1vw] h-[210px] lg:h-[28vw]"
                        style={{
                            backgroundImage: "url('https://ik.imagekit.io/avonpbsnr/shapelogix/image%203.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        <h5 className="font-bold! mb-3">Built with intention</h5>
                        <p className="">We believe the best solutions are clear, focused, and free from unnecessary noise or distraction.</p>
                    </div>

                    <div
                        className="relative z-11 overflow-hidden bg-white py-5 px-4 rounded-lg lg:rounded-[1vw] lg:py-[2vw] lg:px-[1vw] h-[210px] lg:h-[15vw]"
                    >
                        <h5 className="font-bold! mb-3">For ambitious team</h5>
                        <Image src="/bar-chart.svg" alt="For ambitious team" width={100} height={100} className="w-full h-full object-contain" />
                    </div>

                    <div
                        className="relative z-11 overflow-hidden bg-white py-5 px-4 rounded-lg lg:rounded-[1vw] lg:py-[2vw] lg:px-[1vw] h-[210px] lg:h-[15vw]"
                    >
                        <h5 className="font-bold! mb-3 relative z-2">Strategy & Aesthetices</h5>
                        <Image src="/strategy.svg" alt="For ambitious team" width={100} height={100} className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>
        </section>
    )
}