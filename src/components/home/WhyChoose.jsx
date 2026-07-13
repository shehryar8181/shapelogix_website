import TextRevealScroll from "../providers/TextRevealScroll";
import TextColorScroll from "../providers/TextColorScroll";
import WhyChooseCards from "./WhyChooseCards";

export default function WhyChoose() {
    return (
        <section className="why-choose wrapper relative pt-20! md:pt-30! lg:pt-[10vw]! bg-background">
            <div className="grid md:grid-cols-4 gap-4 justify-between mb-3 lg:mb-[2vw]">
                <TextRevealScroll
                    as="span"
                    start="top 85%"
                    className="text-secondary pt-2"
                    text="// Why Shapelogix"
                />
                <TextRevealScroll
                    as="h2"
                    start="top 85%"
                    className="col-span-2"
                    text="Positioned for lasting success"
                />
                <TextRevealScroll
                    as="p"
                    start="top 85%"
                    text="Focusing strictly on tangible engineering outcomes, technical agility, and ironclad data security."
                />
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="md:max-w-[24%] mt-5 lg:mt-[4vw]">
                    <div className="flex flex-wrap gap-2 lg:gap-[0.3vw]">
                        <span className="p-1 lg:p-[0.3vw] border border-gray-400 border-dashed">ISO & SOC2 Aligned</span>
                        <span className="p-1 lg:p-[0.3vw] border border-gray-400 border-dashed">CI/CD AUTOMATED</span>
                        <span className="p-1 lg:p-[0.3vw] border border-gray-400 border-dashed">ZERO-TRUST ARCHITECTURE</span>
                    </div>
                </div>

                <div className="md:max-w-[50%] bg-background py-[3vw] md:border border-dashed md:border-l-0 border-borders relative z-11">
                    <TextColorScroll
                        as="h3"
                        text="At the end of the day, we're here to help your brand grow. That means thinking beyond visuals, designing with purpose, and delivering work that supports your goals, your team, and your future plans."
                    />
                </div>
            </div>

            <WhyChooseCards />
        </section>
    );
}
