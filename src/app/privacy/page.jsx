import PageHero from "@/components/common/PageHero";
import LegalContent from "@/components/legal/LegalContent";
import NewsletterSection from "@/components/common/NewsletterSection";
import { privacyPolicy } from "@/data/legal";

export const metadata = {
    title: "Privacy Policy | Shapelogix",
    description: privacyPolicy.description,
};

export default function PrivacyPage() {
    return (
        <div>
            <PageHero
                eyebrow={privacyPolicy.eyebrow}
                title={privacyPolicy.title}
                highlight={privacyPolicy.highlight}
                description={privacyPolicy.description}
            />
            <LegalContent
                updatedAt={privacyPolicy.updatedAt}
                intro={privacyPolicy.intro}
                sections={privacyPolicy.sections}
                related={privacyPolicy.related}
            />
            <NewsletterSection />
        </div>
    );
}
