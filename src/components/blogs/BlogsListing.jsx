"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BLOGS_PER_PAGE, blogs } from "@/data/blogs";

const fieldClass =
    "w-full rounded-md lg:rounded-[0.35vw] border border-borders bg-white px-4 py-3 lg:px-[1vw] lg:py-[0.85vw] text-foreground outline-none transition-colors focus:border-primary";

export default function BlogsListing() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [displayedItems, setDisplayedItems] = useState(() =>
        blogs.slice(0, BLOGS_PER_PAGE)
    );
    const [isAnimating, setIsAnimating] = useState(false);

    const gridRef = useRef(null);
    const isFirstRender = useRef(true);

    const filteredBlogs = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) return blogs;

        return blogs.filter(
            (blog) =>
                blog.title.toLowerCase().includes(query) ||
                blog.description.toLowerCase().includes(query)
        );
    }, [search]);

    const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE));
    const currentPage = Math.min(page, totalPages);
    const start = (currentPage - 1) * BLOGS_PER_PAGE;
    const pageItems = filteredBlogs.slice(start, start + BLOGS_PER_PAGE);
    const pageKey = pageItems.map((blog) => blog.slug).join("|");

    useEffect(() => {
        const getCards = () => gridRef.current?.querySelectorAll(".blog-card");

        if (isFirstRender.current) {
            isFirstRender.current = false;
            setDisplayedItems(pageItems);

            requestAnimationFrame(() => {
                const cards = getCards();
                if (!cards?.length) return;

                gsap.fromTo(
                    cards,
                    { y: 48, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        stagger: 0.06,
                        ease: "power3.out",
                    }
                );
            });
            return;
        }

        const currentCards = getCards();

        if (!currentCards?.length) {
            setDisplayedItems(pageItems);
            requestAnimationFrame(() => {
                const cards = getCards();
                if (!cards?.length) return;

                gsap.fromTo(
                    cards,
                    { y: 48, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        stagger: 0.06,
                        ease: "power3.out",
                    }
                );
            });
            return;
        }

        setIsAnimating(true);

        gsap.to(currentCards, {
            y: -28,
            opacity: 0,
            duration: 0.28,
            stagger: 0.03,
            ease: "power2.in",
            onComplete: () => {
                setDisplayedItems(pageItems);

                requestAnimationFrame(() => {
                    const nextCards = getCards();

                    if (!nextCards?.length) {
                        setIsAnimating(false);
                        return;
                    }

                    gsap.fromTo(
                        nextCards,
                        { y: 48, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            stagger: 0.06,
                            ease: "power3.out",
                            onComplete: () => setIsAnimating(false),
                        }
                    );
                });
            },
        });
    }, [pageKey]);

    const updateSearch = (value) => {
        if (isAnimating) return;
        setSearch(value);
        setPage(1);
    };

    const goToPage = (nextPage) => {
        if (isAnimating || nextPage === currentPage) return;
        setPage(nextPage);
    };

    return (
        <section className="blogs-listing wrapper relative py-16! md:py-24! lg:py-[6vw]! bg-background">
            <div className="relative z-11 mb-8 lg:mb-[2.5vw] max-w-md lg:max-w-[28vw] ml-auto">
                <label className="flex flex-col gap-2">
                    <span className="sr-only">Search</span>
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => updateSearch(event.target.value)}
                        placeholder="Search"
                        className={fieldClass}
                    />
                </label>
            </div>

            {displayedItems.length ? (
                <div
                    ref={gridRef}
                    className="relative z-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[0.8vw]"
                >
                    {displayedItems.map((blog) => (
                        <article
                            key={blog.slug}
                            className="blog-card will-animate bg-white rounded-md lg:rounded-[0.35vw] overflow-hidden flex flex-col h-full"
                        >
                            <div className="h-[180px] lg:h-[11vw]">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-4 lg:p-[1vw] flex flex-col flex-1">
                                <span className="text-secondary block mb-3 lg:mb-[0.7vw]">
                                    {blog.date}
                                </span>
                                <h6 className="font-bold! text-foreground! mb-3 lg:mb-[0.7vw] leading-[135%]!">
                                    {blog.title}
                                </h6>
                                <p className="text-secondary mb-4 lg:mb-[1vw] leading-[140%]!">
                                    {blog.description}
                                </p>
                                <a
                                    href={`/blogs/${blog.slug}`}
                                    className="mt-auto inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-80"
                                >
                                    <span className="text-[12px] lg:text-[0.75vw] font-medium">
                                        Read more about this
                                    </span>
                                    <ArrowUpRight
                                        className="size-4 lg:size-[1vw]"
                                        strokeWidth={2.25}
                                    />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <p className="relative z-11 text-secondary py-16 text-center">
                    No blogs match your search.
                </p>
            )}

            {filteredBlogs.length > 0 ? (
                <div className="relative z-11 mt-10 lg:mt-[3vw] flex items-center justify-center gap-3 lg:gap-[0.8vw]">
                    <button
                        type="button"
                        aria-label="Previous page"
                        disabled={currentPage <= 1 || isAnimating}
                        onClick={() => goToPage(currentPage - 1)}
                        className="flex size-10 lg:size-[2.4vw] items-center justify-center rounded-full border border-borders bg-white text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary"
                    >
                        <ChevronLeft className="size-4 lg:size-[1vw]" />
                    </button>

                    <div className="flex items-center gap-2 lg:gap-[0.45vw]">
                        {Array.from({ length: totalPages }, (_, index) => {
                            const pageNumber = index + 1;
                            const isActive = pageNumber === currentPage;

                            return (
                                <button
                                    key={pageNumber}
                                    type="button"
                                    aria-label={`Go to page ${pageNumber}`}
                                    aria-current={isActive ? "page" : undefined}
                                    disabled={isAnimating}
                                    onClick={() => goToPage(pageNumber)}
                                    className={`size-2.5 lg:size-[0.55vw] rounded-full transition-colors disabled:cursor-not-allowed ${isActive ? "bg-primary" : "bg-borders hover:bg-secondary"
                                        }`}
                                />
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        aria-label="Next page"
                        disabled={currentPage >= totalPages || isAnimating}
                        onClick={() => goToPage(currentPage + 1)}
                        className="flex size-10 lg:size-[2.4vw] items-center justify-center rounded-full border border-borders bg-white text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary"
                    >
                        <ChevronRight className="size-4 lg:size-[1vw]" />
                    </button>
                </div>
            ) : null}
        </section>
    );
}
