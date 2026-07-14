import Link from "next/link";

export default function BlogDetailContent({
    categories = [],
    author = null,
    images = [],
    intro = "",
    sections = [],
}) {
    return (
        <section className="blog-detail-content wrapper relative pb-20! md:pb-30! lg:pb-[8vw]! bg-background">
            <div className="relative z-11 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[2.5vw] items-start">
                <aside className="lg:col-span-3 lg:sticky lg:top-[8vw] flex flex-col gap-10 lg:gap-[2.5vw]">
                    {categories.length ? (
                        <div>
                            <h6 className="text-foreground! font-display tracking-wider font-bold! mb-4 lg:mb-[1vw]">
                                Categories
                            </h6>
                            <ul className="flex flex-col gap-2 lg:gap-[1vw]">
                                {categories.map((category) => (
                                    <li key={category}>
                                        <Link
                                            href="/blogs"
                                            className="text-secondary font-display tracking-wider transition-colors hover:text-foreground"
                                        >
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}

                    {author ? (
                        <div>
                            <h6 className="text-foreground! font-bold! mb-4 lg:mb-[1vw]">
                                Author
                            </h6>
                            <div className="flex items-center gap-3 lg:gap-[0.7vw]">
                                <img
                                    src={author.avatar}
                                    alt={author.name}
                                    className="size-12 lg:size-[3vw] rounded-md object-cover shrink-0"
                                />
                                <div>
                                    <p className="font-semibold text-foreground! font-sans! tracking-normal! text-[14px]! lg:text-[0.95vw]!">
                                        {author.name}
                                    </p>
                                    <p className="text-secondary text-[12px]! lg:text-[0.75vw]!">
                                        {author.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </aside>

                <div className="lg:col-span-6 flex flex-col gap-8 lg:gap-[2vw] bg-background">
                    {images[0] ? (
                        <img
                            src={images[0]}
                            alt=""
                            className="w-full h-[220px] md:h-[320px] lg:h-[28vw] object-cover rounded-lg lg:rounded-[0.6vw]"
                        />
                    ) : null}

                    {intro ? (
                        <p className="text-secondary leading-[150%]! lg:max-w-[70ch]">{intro}</p>
                    ) : null}

                    {images[1] ? (
                        <img
                            src={images[1]}
                            alt=""
                            className="w-full h-[220px] md:h-[320px] lg:h-[28vw] object-cover rounded-lg lg:rounded-[0.6vw]"
                        />
                    ) : null}

                    <div className="flex flex-col gap-10 lg:gap-[3vw] pt-2">
                        {sections.map((section, index) => (
                            <article key={section.title} className="flex flex-col gap-5 lg:gap-[1.2vw]">
                                <h4 className="text-foreground! font-bold!">
                                    {index + 1}. {section.title}
                                </h4>

                                {section.points?.map((point, pointIndex) => (
                                    <div
                                        key={`${section.title}-${point.title}`}
                                        className="flex flex-col gap-2 lg:gap-[0.45vw]"
                                    >
                                        <h6 className="text-foreground! font-bold!">
                                            {pointIndex === 0 ? "i" : "ii"}. {point.title}
                                        </h6>
                                        <p className="text-secondary leading-[150%]! lg:max-w-[70ch]">
                                            {point.body}
                                        </p>
                                    </div>
                                ))}

                                {section.bottomLine ? (
                                    <p className="text-secondary leading-[150%]! lg:max-w-[70ch]">
                                        <span className="font-semibold text-foreground">
                                            Bottom line:{" "}
                                        </span>
                                        {section.bottomLine}
                                    </p>
                                ) : null}
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
