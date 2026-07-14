import TextAnimate from "@/components/providers/TextAnimate";

export default function PageHero({
    title = "",
    description = "",
    eyebrow = "",
}) {
    return (
        <section className="relative min-h-[50svh] md:min-h-[55svh] lg:min-h-[50vw] w-full overflow-hidden">
            <img
                src="/texture.svg"
                alt=""
                aria-hidden="true"
                className="fixed inset-0 h-screen w-screen object-cover pointer-events-none z-10 px-[2vw]"
            />
            <div className="wrapper relative z-11 flex flex-col justify-end gap-3 md:gap-4 lg:gap-[1.2vw] pt-28 pb-12 md:pt-[10vw] md:pb-[4vw] lg:pt-[12vw] lg:pb-[5vw] h-full min-h-[50svh] md:min-h-[55svh] lg:min-h-[50vw]">
                {eyebrow ? (
                    <TextAnimate
                        as="span"
                        delay={-0.5}
                        text={eyebrow}
                        className="text-secondary"
                    />
                ) : null}
                {title ? (
                    <h1 className="md:max-w-[18ch]">
                        <TextAnimate
                            as="span"
                            delay={-0.25}
                            text={title}
                            className="text-foreground!"
                        />
                    </h1>
                ) : null}
                {description ? (
                    <TextAnimate
                        as="p"
                        delay={0}
                        className="md:max-w-[42ch] leading-[125%]!"
                        text={description}
                    />
                ) : null}
            </div>
        </section>
    );
}
