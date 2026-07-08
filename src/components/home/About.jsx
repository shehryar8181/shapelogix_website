import { ArrowUpRight } from "lucide-react";

const stats = [
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
    { label: "Years of Experience", value: "20 +", desc: "Built on years of real-world projects" },
];

export default function About() {
    return (
        <section className="about wrapper relative pt-[10vw]!">
            <div className="flex justify-between">
                <span className="text-secondary">// Introduction Shapelogix</span>
                <div className="max-w-[75%]">
                    <h4 className="text-secondary bg-[#f6f6f6] py-[3vw] border border-dashed  border-l-0 border-borders relative z-11">
                        We engineer high-performance digital ecosystems. From deep tech integrations like custom AI and automated DevOps to flawless UI/UX, we design and build the resilient software architecture that modern enterprises scale on.
                    </h4>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5vw] mt-[1.5vw]">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="bg-white p-[1.5vw] flex flex-col gap-[1.2vw]"
                    >
                        <span className="flex items-center gap-[0.3vw] bg-black w-fit px-[0.6vw] py-[0.35vw] rounded-full">
                            <span className="size-1.5 md:size-[0.4vw] rounded-full bg-white/90" />
                            <span className="size-1.5 md:size-[0.4vw] rounded-full bg-white/90" />
                            <span className="size-1.5 md:size-[0.4vw] rounded-full bg-white/90" />
                            <span className="size-1.5 md:size-[0.4vw] rounded-full bg-white/90" />
                        </span>
                        <span className="text-secondary text-sm md:text-[0.95vw]">
                            {stat.label}
                        </span>
                        <h3 className="!font-bold">{stat.value}</h3>
                        <span className="text-secondary text-sm md:text-[0.95vw] leading-snug">
                            {stat.desc}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
