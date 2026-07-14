import PageHero from "@/components/common/PageHero";
import About from "@/components/home/About";
import AboutServices from "@/components/about/AboutServices";
import AiSolutions from "@/components/about/AiSolutions";
import Partnership from "@/components/about/Partnership";
import ClientSolutions from "@/components/about/ClientSolutions";
import CtaBanner from "@/components/common/CtaBanner";
import ContactFormSection from "@/components/common/ContactForm";
import NewsletterSection from "@/components/common/NewsletterSection";
import InsightsSection from "@/components/common/InsightsSection";

export default function AboutPage() {
    return (
        <div>
            <PageHero
                eyebrow="// About"
                title="We engineer intelligent systems"
                highlight="intelligent"
                description="We build user experiences that increase adoption across B2B and SaaS products, delivering measurable performance gains using strong information architecture, thoughtful interaction design, and modern responsive design."
            />
            <About />
            <AboutServices />
            <AiSolutions />
            <Partnership />
            <ClientSolutions />
            <InsightsSection />
            <CtaBanner />
            <ContactFormSection />
            <NewsletterSection />
        </div>
    );
}
