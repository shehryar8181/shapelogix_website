import HeroSection from "@/components/home/HeroSection";
import About from "@/components/home/About";
import WhyChoose from "@/components/home/WhyChoose";

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
    </div>
  );
}
