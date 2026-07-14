import Button from "../common/Button";
import TextRevealScroll from "../providers/TextRevealScroll";

const partnerships = [
    {
        number: "01",
        title: "Dedicated teams",
        description:
            "Access a team of specialists who work as an extension of your organization with ongoing responsibility for defined workflows.",
        focus: "Focus: Extension & Continuity",
    },
    {
        number: "02",
        title: "Project-based delivery",
        description:
            "Access a team of specialists who work as an extension of your organization with ongoing responsibility for defined workflows.",
        focus: "Focus: Scope & Outcomes",
    },
    {
        number: "03",
        title: "Hybrid delivery model",
        description:
            "Access a team of specialists who work as an extension of your organization with ongoing responsibility for defined workflows.",
        focus: "Focus: Flexibility & Control",
    },
    {
        number: "04",
        title: "Offshore development center",
        description:
            "Access a team of specialists who work as an extension of your organization with ongoing responsibility for defined workflows.",
        focus: "Focus: Scale & Continuity",
    },
];

export default function Partnership() {
    return (
        <section className="partnership wrapper relative pt-20! md:pt-30! lg:pt-[10vw]! bg-background">
            <div className="relative z-11 grid grid-cols-1 lg:grid-cols-4 items-start gap-4 lg:gap-[1.5vw] mb-10 lg:mb-[3vw]">
                <TextRevealScroll
                    as="span"
                    start="top 85%"
                    className="text-secondary pt-2"
                    text="// Partnership"
                />
                <TextRevealScroll
                    as="h2"
                    start="top 85%"
                    className="lg:col-span-3 lg:max-w-[22ch]"
                    text="We work as a long-term partner, built for trust and momentum"
                />
            </div>

            <div className="relative z-11">
                {partnerships.map((item, index) => (
                    <div
                        key={item.number}
                        className={`grid grid-cols-1 lg:grid-cols-[1fr_2.1fr_1fr] gap-4 lg:gap-[2vw] py-8 lg:py-[2.2vw] border-borders border-dashed ${index === 0 ? "border-y" : "border-b"
                            }`}
                    >
                        <TextRevealScroll
                            as="span"
                            start="top 85%"
                            className="text-foreground! text-2xl! lg:text-[2vw]! font-bold! leading-none!"
                            text={item.number}
                        />

                        <div className="flex flex-col gap-3 lg:gap-[0.7vw] lg:max-w-[42ch]">
                            <TextRevealScroll
                                as="h5"
                                start="top 85%"
                                className="text-foreground! font-bold!"
                                text={item.title}
                            />
                            <TextRevealScroll
                                as="p"
                                start="top 85%"
                                className="text-secondary leading-[135%]! text-[14px]! lg:text-[1vw]!"
                                text={item.description}
                            />
                            <TextRevealScroll
                                as="span"
                                start="top 85%"
                                className="text-secondary"
                                text={item.focus}
                            />
                        </div>

                        {index === 0 ? (
                            <div className="flex flex-col items-start lg:items-end gap-2 lg:gap-[0.5vw] lg:pt-1">
                                <span className="text-secondary">Fresh ideas published regularly</span>
                                <Button size="sm" className="w-full lg:w-auto">
                                    Have project in mind ?
                                </Button>
                            </div>
                        ) : (
                            <div className="hidden lg:block" aria-hidden="true" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
