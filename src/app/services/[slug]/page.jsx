import { notFound } from "next/navigation";
import PageHero from "@/components/common/PageHero";
import ClientPain from "@/components/services/ClientPain";
import ServiceExpertise from "@/components/services/ServiceExpertise";
import ServiceStages from "@/components/services/ServiceStages";
import ServiceOutcomes from "@/components/services/ServiceOutcomes";
import Process from "@/components/home/Process";
import { getServiceBySlug, getServiceSlugs } from "@/data/services";
import InsightsSection from "@/components/common/InsightsSection";
import CtaBanner from "@/components/common/CtaBanner";
import ContactForm from "@/components/common/ContactForm";
import NewsletterSection from "@/components/common/NewsletterSection";

export function generateStaticParams() {
    return getServiceSlugs().map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) notFound();

    return (
        <div>
            <PageHero
                eyebrow={service.hero.eyebrow}
                title={service.hero.title}
                highlight={service.hero.highlight}
                description={service.hero.description}
            />
            <ClientPain
                eyebrow={service.pain.eyebrow}
                title={service.pain.title}
                description={service.pain.description}
                challenges={service.pain.challenges}
            />
            <ServiceExpertise
                eyebrow={service.expertise.eyebrow}
                title={service.expertise.title}
                items={service.expertise.items}
                cta={service.expertise.cta}
            />
            <ServiceStages
                eyebrow={service.stages.eyebrow}
                title={service.stages.title}
                description={service.stages.description}
                items={service.stages.items}
            />
            <ServiceOutcomes
                eyebrow={service.outcomes.eyebrow}
                titleBefore={service.outcomes.titleBefore}
                titleHighlight={service.outcomes.titleHighlight}
                items={service.outcomes.items}
                cta={service.outcomes.cta}
            />
            <Process />
            <CtaBanner />
            <InsightsSection />
            <ContactForm />
            <NewsletterSection />
        </div>
    );
}
