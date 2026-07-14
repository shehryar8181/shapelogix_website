import Button from "../common/Button";
import TextRevealScroll from "../providers/TextRevealScroll";

export default function ServiceOutcomes({
    eyebrow = "// Client's Solutions",
    titleBefore = "What outcomes you'll gain from ",
    titleHighlight = "Shapelogix",
    items = [],
    cta = {
        title: "Get in touch",
        buttonLabel: "Book free consultation",
    },
}) {
    return (
        <section className="service-outcomes wrapper relative py-20! md:py-30! lg:py-[10vw]! bg-black">
            <div className="relative z-11 grid grid-cols-1 lg:grid-cols-4 items-start gap-4 lg:gap-[1.5vw] mb-10 lg:mb-[3.5vw]">
                <TextRevealScroll
                    as="span"
                    start="top 85%"
                    className="text-secondary pt-2"
                    text={eyebrow}
                />

                <h2 className="lg:col-span-2 text-white!">
                    <TextRevealScroll
                        as="span"
                        start="top 85%"
                        className="text-white!"
                        text={titleBefore}
                    />
                    <TextRevealScroll
                        as="span"
                        start="top 85%"
                        className="text-primary!"
                        text={titleHighlight}
                    />
                </h2>
                <div></div>
            </div>

            <div className="relative z-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[1vw]">
                {items.map((item) => (
                    <article
                        key={item.label}
                        className="relative overflow-hidden flex flex-col gap-4 lg:gap-[1vw] min-h-[240px] lg:min-h-[23vw] rounded-xl lg:rounded-[0.8vw] bg-[#141414] p-6 lg:p-[1.8vw]"
                    >
                        {item.image ? (
                            <img
                                src={item.image}
                                alt=""
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                            />
                        ) : null}
                        <div className="relative z-1 flex h-full flex-col gap-4 lg:gap-[1vw]">
                            <span className="text-primary! text-[12px]! lg:text-[0.75vw]! font-medium">
                                {item.label}
                            </span>
                            <h5 className="text-white! font-bold! mt-auto lg:max-w-[16ch]">
                                {item.title}
                            </h5>
                            <p className="text-secondary leading-[140%]! lg:max-w-[34ch]">
                                {item.description}
                            </p>
                        </div>
                    </article>
                ))}

                <article className="flex flex-col justify-between gap-6 lg:gap-[1.5vw] min-h-[240px] lg:min-h-[18vw] rounded-xl lg:rounded-[0.8vw] bg-[#141414] p-6 lg:p-[1.8vw]">
                    <h5 className="text-white! font-bold! text-[28px]! lg:text-[2vw]! leading-none!">
                        {cta.title}
                    </h5>
                    <Button variant="black" size="sm" className="w-full">
                        {cta.buttonLabel}
                    </Button>
                </article>
            </div>
        </section>
    );
}
