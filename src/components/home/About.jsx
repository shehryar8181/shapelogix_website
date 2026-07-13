import Button from "../common/Button";
import TextRevealScroll from "../providers/TextRevealScroll";
import AboutStats from "./AboutStats";

export default function About() {
    return (
        <section className="about wrapper relative pt-20! md:pt-30! lg:pt-[7vw]! bg-background">
            <div className="flex flex-col md:flex-row justify-between">
                <TextRevealScroll
                    as="span"
                    start="top 85%"
                    className="text-secondary pt-10"
                    text="// Introduction Shapelogix"
                />
                <div className="md:max-w-[75%] bg-background py-[3vw] md:border border-dashed md:border-l-0 border-borders relative z-11">
                    <TextRevealScroll
                        as="h4"
                        start="top 85%"
                        className="text-secondary"
                        text="We engineer high-performance digital ecosystems. From deep tech integrations like custom AI and automated DevOps to flawless UI/UX, we design and build the resilient software architecture that modern enterprises scale on."
                    />
                    <Button className="mt-7 md:mt-10 lg:mt-[1.5vw]">
                        Inside the Shapelogix
                    </Button>
                </div>
            </div>

            <AboutStats />
        </section>
    );
}
