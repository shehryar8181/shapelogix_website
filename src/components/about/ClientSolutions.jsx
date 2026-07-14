import TextRevealScroll from "../providers/TextRevealScroll";

const solutions = [
    {
        number: "01",
        title: "Early in problem framing",
        description:
            "AI is integrated at the start of solution design, not after requirements are finalized.",
    },
    {
        number: "02",
        title: "Focused on decision quality",
        description:
            "AI is applied where it improves judgment, speed, or clarity, not just automation.",
    },
    {
        number: "03",
        title: "Built around human oversight",
        description:
            "Clear checkpoints keep people in control of decisions that matter, while AI handles the heavy lifting.",
    },
    {
        number: "04",
        title: "Grounded in real workflows",
        description:
            "Solutions are designed to fit how teams already operate, reducing adoption friction and change fatigue.",
    },
    {
        number: "05",
        title: "Designed to scale responsibly",
        description: "Cost, security, and governance are considered from day one.",
    },
    {
        number: "06",
        title: "Measured by real outcomes",
        description:
            "Progress is tied to clear business goals, shared ownership, and continuous learning loops.",
    },
];

export default function ClientSolutions() {
    return (
        <section className="client-solutions wrapper relative py-20! md:py-30! lg:py-[10vw]! bg-black">
            <div className="relative z-11 grid grid-cols-1 lg:grid-cols-4 items-start gap-4 lg:gap-[1.5vw] mb-10 lg:mb-[4vw]">
                <TextRevealScroll
                    as="span"
                    start="top 85%"
                    className="text-secondary pt-2"
                    text="// Client's Solutions"
                />

                <h2 className="lg:col-span-2 text-white!">
                    <TextRevealScroll
                        as="span"
                        start="top 85%"
                        className="text-white!"
                        text="What working with Shapelogix as an AI partner looks like"
                    />
                </h2>

                <div></div>
            </div>

            <div className="relative z-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-borders/20 border-dashed">
                {solutions.map((item) => (
                    <article
                        key={item.number}
                        className="flex flex-col gap-4 lg:gap-[1vw] p-6 lg:p-[2vw] min-h-[220px] lg:min-h-[18vw] bg-black border-r border-b border-borders/20 border-dashed"
                    >
                        <span className="text-primary! text-sm! lg:text-[0.9vw]! font-bold!">
                            {item.number}
                        </span>
                        <h5 className="text-white! font-bold! lg:max-w-[16ch]">{item.title}</h5>
                        <p className="text-secondary leading-[140%]! lg:max-w-[32ch]">
                            {item.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
