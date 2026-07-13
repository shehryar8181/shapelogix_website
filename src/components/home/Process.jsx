import TextRevealScroll from "../providers/TextRevealScroll";

const steps = [
    {
        number: "01",
        title: "Discover",
        description:
            "We start by understanding your goals and challenges, aligning on a clear direction before any design work begins.",
    },
    {
        number: "02",
        title: "Design",
        description:
            "We explore ideas, shape concepts, and create thoughtful solutions that balance strategy, creativity, and usability.",
    },
    {
        number: "03",
        title: "Build",
        description:
            "We turn approved concepts into polished, high-performing experiences, refining every detail with care and precision.",
    },
    {
        number: "04",
        title: "Testing",
        description:
            "We prepare, test, and ship your project with confidence, making sure everything is ready to perform in the real world.",
    },
    {
        number: "05",
        title: "Launch",
        description:
            "We prepare, test, and ship your project with confidence, making sure everything is ready to perform in the real world.",
    },
];

export default function Process() {
    return (
        <section className="process wrapper relative pt-20! md:pt-30! lg:pt-[10vw]! bg-background">
            <div className="flex items-end gap-4 justify-between">
                <div className="md:max-w-[50%]">
                    <span className="text-secondary pt-2">// Shapelogix Process</span>
                    <TextRevealScroll
                        as="h2"
                        className="mt-3"
                        text="Structures meets creative freedom"
                    />
                </div>
                <TextRevealScroll
                    as="p"
                    className="md:max-w-[20%]"
                    text="Focusing strictly on tangible engineering outcomes, technical agility, and ironclad data security."
                />
            </div>

            <div
                className="relative mt-10 lg:mt-[2vw] overflow-x-auto lg:overflow-visible"
            >
                <div className="flex items-start min-w-max lg:min-w-0 pb-4 lg:pb-[2vw]">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="relative shrink-0 w-[260px] sm:w-[280px] lg:w-[26.4vw] min-h-[300px] lg:min-h-[25vw] p-5 lg:p-[1.5vw] lg:pe-[4vw] bg-white/30 backdrop-blur-[3px] border border-borders/80 flex flex-col justify-between"
                            style={{
                                marginLeft: index === 0 ? 0 : "-9.25vw",
                                marginTop: `clamp(${index * 30}px, ${index * 1.8}vw, ${index * 40}px)`,
                                zIndex: index + 11,
                            }}
                        >
                            <span className="text-primary! text-[42px]! sm:text-[48px]! lg:text-[3.2vw]! font-bold! leading-none! tracking-wider">
                                {step.number}
                            </span>

                            <div className="mt-auto pt-6 lg:pt-[2vw]">
                                <h5 className="font-bold! text-foreground! mb-2 lg:mb-[0.5vw]">
                                    {step.title}
                                </h5>
                                <p className="text-foreground/70! text-[11px]! sm:text-[12px]! lg:text-[0.85vw]! leading-[145%]!">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
