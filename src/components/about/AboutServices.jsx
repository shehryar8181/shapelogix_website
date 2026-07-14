import { ArrowUpRight } from "lucide-react";
import Button from "../common/Button";
import TextRevealScroll from "../providers/TextRevealScroll";
import ImageRevealScroll from "../providers/ImageRevealScroll";

const services = [
    {
        title: "We embed AI into real business systems and workflows",
        description:
            "Transform your legacy infrastructure to ensure smooth, efficient operations. We identify and prevent performance issues through strategic updates.",
        link: "See AI development services",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(1).png",
    },
    {
        title: "We scale your digital products and platforms",
        description:
            "Transform your legacy infrastructure to ensure smooth, efficient operations. We identify and prevent performance issues through strategic updates.",
        link: "See product development services",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(2).png",
    },
    {
        title: "We modernize your architectures to support growth and change",
        description:
            "Transform your legacy infrastructure to ensure smooth, efficient operations. We identify and prevent performance issues through strategic updates.",
        link: "See application modernization",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(3).png",
    },
    {
        title: "We ensure secure and compliant solutions across cloud environments",
        description:
            "Transform your legacy infrastructure to ensure smooth, efficient operations. We identify and prevent performance issues through strategic updates.",
        link: "See cloud services",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(8).png",
    },
];

export default function AboutServices() {
    return (
        <section className="about-services wrapper relative pt-20! md:pt-30! lg:pt-[10vw]! bg-background">
            <div className="grid md:grid-cols-4 items-start gap-4 mb-8 lg:mb-[2.5vw]">
                <TextRevealScroll
                    as="span"
                    start="top 85%"
                    className="text-secondary pt-2"
                    text="// Shapelogix's services"
                />
                <TextRevealScroll
                    as="h2"
                    start="top 85%"
                    className="col-span-2 lg:max-w-[14ch]"
                    text="Engineering, AI, and delivery, working as one"
                />
                <TextRevealScroll
                    as="p"
                    start="top 85%"
                    className="lg:max-w-[28ch]"
                    text="Every engagement starts with clarity: on the problem, the constraints, and the outcomes that matter."
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[1vw] items-stretch">
                {services.map((service) => (
                    <article
                        key={service.title}
                        className="relative z-11 flex h-full flex-col gap-3 lg:gap-[0.8vw] bg-white rounded-md lg:rounded-[0.4vw] overflow-hidden"
                    >
                        <ImageRevealScroll
                            src={service.image}
                            alt={service.title}
                            start="top 85%"
                            wrapperClassName="h-[260px] lg:h-[18vw] rounded-md lg:rounded-[0.4vw] overflow-hidden"
                            className="h-full w-full object-cover"
                        />

                        <TextRevealScroll
                            as="h6"
                            start="top 85%"
                            className="font-bold! text-foreground! leading-[100%]! px-3"
                            text={service.title}
                        />

                        <TextRevealScroll
                            as="p"
                            start="top 85%"
                            className="text-secondary px-3"
                            text={service.description}
                        />

                        <a
                            href="#"
                            className="mt-auto inline-flex w-full items-center justify-between gap-3 pt-2 text-primary transition-opacity hover:opacity-80 px-3 pb-3"
                        >
                            <span className="text-[12px]! lg:text-[0.75vw]! font-medium">{service.link}</span>
                            <ArrowUpRight className="size-4 lg:size-[1.1vw] shrink-0" strokeWidth={2.25} />
                        </a>
                    </article>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-[0.8vw] items-start mt-8 lg:mt-[4vw]">
                <TextRevealScroll
                    as="h5"
                    start="top 85%"
                    className="lg:col-span-3 font-bold! text-foreground!"
                    text="Good Ideas deserve deeper exploration."
                />

                <div className="flex flex-col items-start lg:items-end gap-2 lg:gap-[0.5vw]">
                    <TextRevealScroll
                        as="span"
                        start="top 85%"
                        className="text-secondary"
                        text="Fresh ideas published regularly"
                    />
                    <Button size="sm" className="w-full lg:w-auto">
                        Explore all services
                    </Button>
                </div>
            </div>
        </section>
    );
}
