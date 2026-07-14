import ContactHero from "@/components/contact/ContactHero";
import ContactPageForm from "@/components/contact/ContactPageForm";
import NewsletterSection from "@/components/common/NewsletterSection";

export default function ContactPage() {
    return (
        <div>
            <ContactHero />
            <ContactPageForm />
            <NewsletterSection />
        </div>
    );
}
