import Image from "next/image";
import Button from "../common/Button";
import { ArrowUpRight } from "lucide-react";

const stats = [
    { label: "Brands", value: "30" },
    { label: "Launches", value: "130" },
    { label: "Users", value: "10k+" },
    { label: "Speed", value: "56%" },
];

const projects = [
    {
        title: "Vitalo",
        subtitle: "Fitness Framer template",
        year: "2026",
        client: "Vitalo",
        description:
            "Vitalo is a fitness Framer template built for personal trainers and coaches who want a site that feels as considered as their coaching. It pairs a dark, editorial aesthetic with a complete content system, a 12-section homepage, CMS blog, transformation gallery, programs and pricing, FAQ, press and legal pages, all production-ready out of the box.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%206.png",
    },
    {
        title: "Artikle",
        subtitle: "News & media Framer template",
        year: "2026",
        client: "Vitalo",
        description:
            "Vitalo is a fitness Framer template built for personal trainers and coaches who want a site that feels as considered as their coaching. It pairs a dark, editorial aesthetic with a complete content system, a 12-section homepage, CMS blog, transformation gallery, programs and pricing, FAQ, press and legal pages, all production-ready out of the box.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%206.png",
    },
    {
        title: "Shapelogix",
        subtitle: "Fitness Framer template",
        year: "2026",
        client: "Vitalo",
        description:
            "Vitalo is a fitness Framer template built for personal trainers and coaches who want a site that feels as considered as their coaching. It pairs a dark, editorial aesthetic with a complete content system, a 12-section homepage, CMS blog, transformation gallery, programs and pricing, FAQ, press and legal pages, all production-ready out of the box.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%206.png",
    },
    {
        title: "Pay to roll",
        subtitle: "News & media Framer template",
        year: "2026",
        client: "Vitalo",
        description:
            "Vitalo is a fitness Framer template built for personal trainers and coaches who want a site that feels as considered as their coaching. It pairs a dark, editorial aesthetic with a complete content system, a 12-section homepage, CMS blog, transformation gallery, programs and pricing, FAQ, press and legal pages, all production-ready out of the box.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%206.png",
    },
];

const otherProjects = ["Project", "Project", "Project"];

export default function Projects() {
    return (
        <section className="projects wrapper relative pt-20! md:pt-30! lg:pt-[10vw]! bg-background">
            <div className="grid md:grid-cols-4 gap-4 justify-between mb-3 lg:mb-[2vw]">
                <span className="text-secondary pt-2">// Featured Projects</span>
                <h2 className="col-span-2">
                    Created with clear purpose
                </h2>
                <p>Real projects, real challenges, and real results, crafted with clarity, creativity, and purpose.</p>
            </div>

            <div
                className="relative mt-10 lg:mt-[3vw] py-8 lg:py-[3vw]"
            >
                <div className="grid grid-cols-1 lg:grid-cols-[0.726fr_2.15fr] gap-4 lg:gap-[1vw]">
                    <aside className="lg:sticky lg:top-[20%] lg:self-start flex flex-col gap-8 lg:gap-[3vw]">
                        <h5 className="text-foreground! font-semibold!">
                            A curated selection of work shaped by strategy, creativity, and thoughtful execution, crafted to help brands stand out and grow with confidence.
                        </h5>

                        <div>
                            <span className="text-secondary block mb-2 lg:mb-[0.5vw]">Team</span>
                            <h3 className="font-bold! leading-none!">
                                <span className="text-primary! font-bold!">Shape</span>logix
                            </h3>
                        </div>

                        <div className="grid grid-cols-2">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col gap-1 lg:gap-[0.3vw] border border-borders/50 border-dashed lg:py-[3vw] ">
                                    <span className="text-secondary">{stat.label}</span>
                                    <h5 className="font-bold! text-foreground!">{stat.value}</h5>
                                </div>
                            ))}
                        </div>
                    </aside>

                    <div className="flex flex-col gap-12 lg:gap-[4vw]">
                        {projects.map((project) => (
                            <article
                                key={project.title}
                                className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.73fr] gap-6 lg:gap-[2vw] items-start"
                            >
                                <div className="relative z-11 flex items-center justify-center min-h-[280px] sm:min-h-[340px] lg:min-h-[28vw] rounded-xl lg:rounded-[1vw]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={1200}
                                        height={750}
                                        className="h-full w-full "
                                    />
                                </div>

                                <div className="lg:sticky lg:top-[20%] flex flex-col gap-4 lg:gap-[1.2vw] py-2 lg:py-[1vw]">
                                    <div>
                                        <h4 className="font-bold! text-foreground! mb-2 lg:mb-[0.5vw]">
                                            {project.title}
                                        </h4>
                                        <p className="text-secondary!">{project.subtitle}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 lg:gap-[1vw]">
                                        <div>
                                            <span className="text-secondary block mb-1">Year</span>
                                            <h6 className="font-bold! text-foreground!">{project.year}</h6>
                                        </div>
                                        <div>
                                            <span className="text-secondary block mb-1">Client</span>
                                            <h6 className="font-bold! text-foreground!">{project.client}</h6>
                                        </div>
                                    </div>

                                    <p className="text-secondary! max-w-[42ch]">{project.description}</p>

                                    <Button className="w-fit mt-2 lg:mt-[0.5vw]">
                                        View case study
                                    </Button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-[0.715fr_2.15fr]">
                    <div className="py-4 lg:py-[1.1vw] hidden md:block">
                        <span className="text-secondary">// Other Projects</span>
                    </div>

                    <div className="">
                        <div className="py-4 lg:py-[1.1vw]">
                            <h5 className="font-semibold! text-secondary!">Keep exploring Our work</h5>
                        </div>

                        <div className="flex justify-between">
                            {otherProjects.map((projectLabel, index) => (
                                <a
                                    key={`${projectLabel}-${index}`}
                                    href="#"
                                    className="hidden md:flex items-center justify-between gap-3 py-4 lg:py-[0.2vw] border border-borders border-dashed hover:bg-black/3 transition-colors w-[61.3%] relative z-11 bg-background lg:px-[1vw]"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-8 lg:size-[2vw] shrink-0 overflow-hidden rounded-sm border border-borders">
                                            <Image
                                                src={projects[index].image}
                                                alt={projectLabel}
                                                fill
                                                sizes="40px"
                                                className="object-cover"
                                            />
                                        </div>
                                        <h6 className="font-semibold! text-foreground!">{projectLabel}</h6>
                                    </div>
                                    <span className="text-primary font-bold! ms-5">
                                        <ArrowUpRight className="size-5" strokeWidth={2.25} />
                                    </span>
                                </a>
                            ))}

                            <Button className="w-full border-0! border-l border-borders border-dashed rounded-none!">
                                View all case studies
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
