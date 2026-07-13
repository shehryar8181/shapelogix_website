import Button from "./Button";

const insights = [
    {
        date: "July 1, 2026",
        title: "The Power of Minimalism: Why Less is More in Design",
        description:
            "The Power of Minimalism: Why Less is More in Design Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%206.png",
        imageHeight: "h-[240px] lg:h-[26vw]",
    },
    {
        date: "July 1, 2026",
        title: "The Power of Minimalism: Why Less is More in Design",
        description:
            "The Power of Minimalism: Why Less is More in Design Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%206.png",
        imageHeight: "h-[180px] lg:h-[12vw]",
    },
    {
        date: "July 1, 2026",
        title: "The Power of Minimalism: Why Less is More in Design",
        description:
            "The Power of Minimalism: Why Less is More in Design Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%206.png",
        imageHeight: "h-[220px] lg:h-[20vw]",
    },
    {
        date: "July 1, 2026",
        title: "The Power of Minimalism: Why Less is More in Design",
        description:
            "The Power of Minimalism: Why Less is More in Design Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%206.png",
        imageHeight: "h-[195px] lg:h-[15vw]",
    },
];

export default function InsightsSection() {
    return (
        <section className="insights wrapper relative pt-20! md:pt-30! lg:pt-[10vw]! bg-background">
            <div className="grid md:grid-cols-4 items-start gap-4 mb-6 lg:mb-[2.5vw]">
                <span className="text-secondary pt-2">// Insights</span>
                <h2 className="col-span-2 lg:max-w-[10ch]">
                    Ideas that move brands
                </h2>
                <p className="lg:max-w-[24ch]">
                    Practical perspectives on shaping thoughtful strategy and elevating distinctive brand identity.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[0.8vw] items-stretch">
                {insights.map((item, index) => (
                    <article
                        key={`${item.title}-${index}`}
                        className="bg-white rounded-md lg:rounded-[0.35vw] overflow-hidden h-fit flex flex-col"
                    >
                        <div className={item.imageHeight}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="p-4 lg:p-[1vw] flex flex-col flex-1">
                            <span className="text-secondary block mb-3 lg:mb-[0.7vw]">{item.date}</span>
                            <h6 className="font-bold! text-foreground! mb-3 lg:mb-[0.7vw] leading-[135%]!">
                                {item.title}
                            </h6>
                            <p className="mb-4 lg:mb-[1vw]">{item.description}</p>
                            <Button size="sm" className="mt-auto w-fit">
                                Read more about this
                            </Button>
                        </div>
                    </article>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-[0.8vw] items-end mt-3 lg:mt-[1vw]">
                <h5 className="lg:col-span-3 font-bold! text-foreground!">
                    Good ideas deserve deeper exploration.
                </h5>

                <div className="flex flex-col items-start lg:items-end gap-2 lg:gap-[0.5vw]">
                    <span className="text-secondary">Fresh ideas published regularly</span>
                    <Button size="sm" className="w-full lg:w-auto">
                        Read more insights
                    </Button>
                </div>
            </div>
        </section>
    );
}
