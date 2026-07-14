import HeroSection from "@/components/home/HeroSection";
import About from "@/components/home/About";
import WhyChoose from "@/components/home/WhyChoose";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import SocialProof from "@/components/home/SocialProof";
import InsightsSection from "@/components/common/InsightsSection";
import CtaBanner from "@/components/common/CtaBanner";
import ContactFormSection from "@/components/common/ContactForm";
import NewsletterSection from "@/components/common/NewsletterSection";

export default function Home() {
  return (
    <div>
      <img
        src="/texture.svg"
        alt=""
        aria-hidden="true"
        className="fixed inset-0 h-screen w-screen object-cover pointer-events-none z-10 px-[2vw]"
      />
      <HeroSection />
      <About />
      <WhyChoose />
      <Services />
      <Process />
      <Projects />
      <SocialProof />
      <InsightsSection />
      <CtaBanner />
      <ContactFormSection />
      <NewsletterSection />
    </div>
  );
}
