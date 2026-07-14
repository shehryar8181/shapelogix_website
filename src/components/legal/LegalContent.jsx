"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";

export default function LegalContent({
    updatedAt = "",
    intro = "",
    sections = [],
    related = null,
}) {
    const lenis = useLenis();

    const scrollToSection = (event, id) => {
        event.preventDefault();

        const target = document.getElementById(id);
        if (!target) return;

        const offset = window.matchMedia("(min-width: 1024px)").matches
            ? -window.innerWidth * 0.08
            : -112;

        if (lenis) {
            lenis.scrollTo(target, {
                offset,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        } else {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        window.history.replaceState(null, "", `#${id}`);
    };

    return (
        <section className="legal-content wrapper relative pb-20! md:pb-30! lg:pb-[8vw]! bg-background">
            <div className="relative z-11 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[2.5vw] items-start">
                <aside className="lg:col-span-3 lg:sticky lg:top-[8vw] flex flex-col gap-8 lg:gap-[2vw]">
                    {updatedAt ? (
                        <div>
                            <span className="text-secondary block mb-2 lg:mb-[0.4vw]">
                                Last updated
                            </span>
                            <p className="text-foreground! font-semibold! font-sans! tracking-normal! text-[14px]! lg:text-[0.95vw]!">
                                {updatedAt}
                            </p>
                        </div>
                    ) : null}

                    <div>
                        <h6 className="text-foreground! font-display tracking-wider font-bold! mb-4 lg:mb-[1vw]">
                            On this page
                        </h6>
                        <ul className="flex flex-col gap-2 lg:gap-[1vw]">
                            {sections.map((section, index) => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        onClick={(event) => scrollToSection(event, section.id)}
                                        className="text-secondary font-display text-[14px] lg:text-[0.9vw] tracking-wider transition-colors hover:text-foreground"
                                    >
                                        {String(index + 1).padStart(2, "0")}. {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {related ? (
                        <div className="pt-2 lg:pt-[0.5vw] border-t border-borders border-dashed">
                            <span className="text-secondary block mb-2 lg:mb-[0.4vw]">
                                Related
                            </span>
                            <Link
                                href={related.href}
                                className="text-foreground font-semibold transition-colors hover:text-primary"
                            >
                                {related.label}
                            </Link>
                        </div>
                    ) : null}
                </aside>

                <div className="lg:col-span-8 lg:col-start-5 flex flex-col gap-10 lg:gap-[3vw]">
                    {intro ? (
                        <p className="text-secondary leading-[150%]! lg:max-w-[70ch] border-b border-borders border-dashed pb-8 lg:pb-[2vw]">
                            {intro}
                        </p>
                    ) : null}

                    <div className="flex flex-col gap-10 lg:gap-[3vw]">
                        {sections.map((section, index) => (
                            <article
                                key={section.id}
                                id={section.id}
                                className="scroll-mt-28 lg:scroll-mt-[8vw] flex flex-col gap-4 lg:gap-[1vw] border-b border-borders border-dashed pb-10 lg:pb-[2.5vw] last:border-b-0 last:pb-0"
                            >
                                <h4 className="text-foreground! font-bold!">
                                    {String(index + 1).padStart(2, "0")}. {section.title}
                                </h4>

                                {section.paragraphs?.map((paragraph) => (
                                    <p
                                        key={paragraph.slice(0, 48)}
                                        className="text-secondary leading-[150%]! lg:max-w-[70ch]"
                                    >
                                        {paragraph}
                                    </p>
                                ))}

                                {section.list?.length ? (
                                    <ul className="flex flex-col gap-3 lg:gap-[0.7vw] mt-1 lg:mt-[0.3vw] lg:max-w-[70ch]">
                                        {section.list.map((item) => (
                                            <li
                                                key={item.slice(0, 48)}
                                                className="flex gap-3 lg:gap-[0.7vw] text-secondary leading-[150%]!"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="mt-2 size-1.5 lg:mt-[0.45vw] lg:size-[0.35vw] shrink-0 rounded-full bg-primary"
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
