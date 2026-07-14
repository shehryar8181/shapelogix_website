import TextAnimate from "@/components/providers/TextAnimate";

export default function ContactHero({
    eyebrow = "// Contact",
    title = "Let's define what next",
    description = "We'll help translate your ideas into thoughtful strategy and execution.",
    email = "hi@shapdelogix.agency",
    phone = "(+92) 999 888 777",
}) {
    return (
        <section className="contact-hero relative h-svh w-full overflow-hidden">
            <img
                src="/texture.svg"
                alt=""
                aria-hidden="true"
                className="fixed inset-0 h-screen w-screen object-cover pointer-events-none z-10 px-[2vw]"
            />

            <div className="wrapper relative z-11 flex h-full flex-col justify-center pt-28 pb-16 md:pt-[8vw] md:pb-[4vw]">
                {eyebrow ? (
                    <TextAnimate
                        as="span"
                        delay={0.15}
                        text={eyebrow}
                        className="text-secondary mb-4 md:mb-[1.2vw]"
                    />
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-6 md:gap-[2vw]">
                    {title ? (
                        <h1 className="md:col-span-7 lg:col-span-8 md:max-w-[12ch]">
                            <TextAnimate
                                as="span"
                                delay={0.3}
                                text={title}
                                className="text-foreground!"
                            />
                        </h1>
                    ) : null}

                    {description ? (
                        <div className="md:col-span-5 lg:col-span-4 md:pb-1">
                            <TextAnimate
                                as="p"
                                delay={0.5}
                                className="text-secondary leading-[140%]!"
                                text={description}
                            />
                        </div>
                    ) : null}
                </div>

                <div className="mt-12 md:mt-[4vw] flex flex-col gap-1">
                    <a
                        href={`mailto:${email}`}
                        className="text-secondary! text-xl! md:text-2xl! lg:text-[1.8vw]! font-semibold! transition-colors hover:text-foreground"
                    >
                        {email}
                    </a>
                    <a
                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                        className="text-secondary transition-colors hover:text-foreground"
                    >
                        {phone}
                    </a>
                </div>
            </div>

            <h1
                aria-hidden="true"
                className="absolute z-1 bottom-0 left-0 text-[15.7vw]! px-[1vw] leading-none opacity-5"
            >
                <TextAnimate
                    as="span"
                    text="Shape"
                    effect="bounce"
                    className="text-[15.7vw]! text-primary!"
                />
                <TextAnimate
                    as="span"
                    text="logix"
                    effect="bounce"
                    className="text-[15.7vw]! text-black!"
                />
            </h1>
        </section>
    );
}
