import Button from "../common/Button";
import TextRevealScroll from "../providers/TextRevealScroll";

export default function ServiceExpertise({
    eyebrow = "// Client's Solutions",
    title = "",
    items = [],
    cta = {
        heading: "Good ideas deserve deeper exploration.",
        note: "Fresh ideas published regularly",
        buttonLabel: "Discuss your project",
    },
}) {
    return (
        <section className="service-expertise wrapper relative py-20! md:py-30! lg:py-[10vw]! bg-black">
            <div className="relative z-11 grid grid-cols-1 lg:grid-cols-4 items-start gap-4 lg:gap-[1.5vw] mb-12 lg:mb-[4vw]">
                <TextRevealScroll
                    as="span"
                    start="top 85%"
                    className="text-secondary pt-2"
                    text={eyebrow}
                />

                <TextRevealScroll
                    as="h2"
                    start="top 85%"
                    className="lg:col-span-3 text-white! lg:max-w-[20ch]"
                    text={title}
                />
            </div>

            <div className="relative z-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {items.map((item, index) => (
                    <article
                        key={item.title}
                        className={`flex flex-col gap-3 lg:gap-[3vw] p-3 lg:p-[0.5vw]`}
                        style={{
                            paddingTop:
                                index === 0
                                    ? undefined
                                    : `clamp(${index * 24}px, ${index * 2.8}vw, ${index * 48}px)`,
                        }}
                    >
                        <TextRevealScroll
                            as="h5"
                            start="top 85%"
                            className="text-white! font-bold!"
                            text={item.title}
                        />
                        <TextRevealScroll
                            as="p"
                            start="top 85%"
                            className="text-secondary"
                            text={item.description}
                        />
                    </article>
                ))}
            </div>

            <div className="relative z-11 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-[0.8vw] items-end mt-10 lg:mt-[3vw]">
                <TextRevealScroll
                    as="h5"
                    start="top 85%"
                    className="lg:col-span-3 text-white! font-bold!"
                    text={cta.heading}
                />

                <div className="flex flex-col items-start lg:items-end gap-2 lg:gap-[0.5vw]">
                    <TextRevealScroll
                        as="span"
                        start="top 85%"
                        className="text-secondary"
                        text={cta.note}
                    />
                    <Button variant="black" size="sm" className="w-full lg:w-auto">
                        {cta.buttonLabel}
                    </Button>
                </div>
            </div>
        </section>
    );
}
