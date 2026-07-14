import PageHero from "@/components/common/PageHero";
import BlogsListing from "@/components/blogs/BlogsListing";
import NewsletterSection from "@/components/common/NewsletterSection";

export default function BlogsPage() {
    return (
        <div>
            <PageHero
                eyebrow="// Insights"
                title="Expert insights on every tech"
                highlight="insights"
                description="We build user experiences that increase adoption across B2B and SaaS products, delivering measurable performance gains using strong information architecture, thoughtful interaction design, and modern responsive design."
            />
            <BlogsListing />
            <NewsletterSection />
        </div>
    );
}
