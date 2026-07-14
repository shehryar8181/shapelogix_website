import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TextAnimate from "@/components/providers/TextAnimate";

export default function BlogDetailHero({
    title = "",
    date = "",
    readTime = "5 min read",
}) {
    return (
        <section className="blog-detail-hero relative min-h-[70svh] md:min-h-[75svh] lg:min-h-[40vw] w-full overflow-hidden">
            <img
                src="/texture.svg"
                alt=""
                aria-hidden="true"
                className="fixed inset-0 h-screen w-screen object-cover pointer-events-none z-10 px-[2vw]"
            />

            <div className="wrapper relative z-11 flex h-full min-h-[70svh] md:min-h-[75svh] lg:min-h-[40vw] items-center pt-28 pb-16 md:pt-[10vw] md:pb-[6vw]">
                <div className="grid w-full grid-cols-1 md:grid-cols-12 gap-10 md:gap-[2vw] items-center">
                    <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-6 lg:gap-[1.8vw]">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-secondary tracking-wider font-display transition-colors hover:text-foreground w-fit"
                        >
                            <ArrowLeft className="size-4 lg:size-[1vw]" strokeWidth={1.75} />
                            Back to blogs
                        </Link>
                        {date ? <span className="text-secondary">{date}</span> : null}
                        {readTime ? <span className="text-secondary">{readTime}</span> : null}
                    </div>

                    <div className="md:col-span-9 lg:col-span-8">
                        {title ? (
                            <h1 className="text-foreground!">
                                <TextAnimate
                                    as="span"
                                    delay={0.2}
                                    text={title}
                                    className="text-foreground!"
                                />
                            </h1>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
}
