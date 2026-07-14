import PageHero from "@/components/common/PageHero";
import LegalContent from "@/components/legal/LegalContent";
import NewsletterSection from "@/components/common/NewsletterSection";
import { termsOfService } from "@/data/legal";

export const metadata = {
    title: "Terms of Services | Shapelogix",
    description: termsOfService.description,
};

export default function TermsPage() {
    return (
        <div>
            <PageHero
                eyebrow={termsOfService.eyebrow}
                title={termsOfService.title}
                highlight={termsOfService.highlight}
                description={termsOfService.description}
            />
            <LegalContent
                updatedAt={termsOfService.updatedAt}
                intro={termsOfService.intro}
                sections={termsOfService.sections}
                related={termsOfService.related}
            />
            <NewsletterSection />
        </div>
    );
}
