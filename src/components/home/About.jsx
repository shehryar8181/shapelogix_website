import Button from "../common/Button";
import TextRevealScroll from "../providers/TextRevealScroll";

const stats = [
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
];

export default function About() {
    return (
        <section className="about wrapper relative pt-20! md:pt-30! lg:pt-[7vw]! bg-background">
            <div className="flex flex-col md:flex-row justify-between">
                <TextRevealScroll
                    as="span"
                    start="top 85%"
                    className="text-secondary py-10 lg:py-[3vw]"
                    text="// Introduction Shapelogix"
                />
                {/* <span className="text-secondary py-[3vw]">// Introduction Shapelogix</span> */}
                <div className="md:max-w-[75%] bg-background py-[3vw] md:border border-dashed md:border-l-0 border-borders relative z-11">
                    <TextRevealScroll
                        as="h4"
                        start="top 85%"
                        className="text-secondary"
                        text="We engineer high-performance digital ecosystems. From deep tech integrations like custom AI and automated DevOps to flawless UI/UX, we design and build the resilient software architecture that modern enterprises scale on."
                    />
                    <Button className="mt-7 md:mt-10 lg:mt-[1.5vw]">
                        Inside the Shapelogix
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[1vw] mt-4 lg:mt-[1.5vw] px-0 lg:px-[0.5vw]">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="bg-white relative z-11 py-8 px-4 lg:py-[2vw] lg:px-[1.5vw] flex flex-col gap-[3vw] rounded-md lg:rounded-[0.3vw]"
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
        </section>
    );
}
