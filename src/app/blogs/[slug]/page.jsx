import { notFound } from "next/navigation";
import BlogDetailHero from "@/components/blogs/BlogDetailHero";
import BlogDetailContent from "@/components/blogs/BlogDetailContent";
import NewsletterSection from "@/components/common/NewsletterSection";
import { getBlogBySlug, getBlogContent, getBlogSlugs } from "@/data/blogs";

export function generateStaticParams() {
    return getBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) notFound();

    const content = getBlogContent(blog);

    return (
        <div>
            <BlogDetailHero
                title={blog.title}
                date={blog.date}
                readTime={blog.readTime || "5 min read"}
            />
            <BlogDetailContent
                categories={content.categories}
                author={content.author}
                images={content.images}
                intro={content.intro}
                sections={content.sections}
            />
            <NewsletterSection />
        </div>
    );
}
