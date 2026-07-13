import Image from "next/image";
import Button from "../common/Button";

const services = [
    {
        number: "01",
        title: "AI Software development",
        description:
            "From planning to complete visual systems, we craft brand identities that are bold, strategic, and unmistakably yours.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(1).png",
    },
    {
        number: "02",
        title: "Product Development",
        description:
            "From planning to complete visual systems, we craft brand identities that are bold, strategic, and unmistakably yours.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(2).png",
    },
    {
        number: "03",
        title: "Application Development",
        description:
            "From planning to complete visual systems, we craft brand identities that are bold, strategic, and unmistakably yours.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(3).png",
    },
    {
        number: "04",
        title: "Prototype Development",
        description:
            "From planning to complete visual systems, we craft brand identities that are bold, strategic, and unmistakably yours.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(4).png",
    },
    {
        number: "05",
        title: "UI/UX Design",
        description:
            "From naming to complete visual systems, we craft brand identities that are bold, strategic, and unmistakably yours.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(5).png",
    },
    {
        number: "06",
        title: "Quality Assurance",
        description:
            "From naming to complete visual systems, we craft brand identities that are bold, strategic, and unmistakably yours.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(6).png",
    },
    {
        number: "07",
        title: "Automated Delivery DevOps",
        description:
            "From naming to complete visual systems, we craft brand identities that are bold, strategic, and unmistakably yours.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(7).png",
    },
    {
        number: "08",
        title: "Cyber Security",
        description:
            "From naming to complete visual systems, we craft brand identities that are bold, strategic, and unmistakably yours.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(8).png",
    },
    {
        number: "09",
        title: "Cloud & Infrastructure",
        description:
            "From naming to complete visual systems, we craft brand identities that are bold, strategic, and unmistakably yours.",
        image: "https://ik.imagekit.io/avonpbsnr/shapelogix/image%205%20(3).png",
    },
];

export default function Services() {
    return (
        <section className="services wrapper relative py-20! md:py-30! lg:py-[10vw]! bg-black">
            <div className="relative z-11 grid grid-cols-1 lg:grid-cols-[1fr_3fr] lg:items-start gap-8 lg:gap-[2vw]">
                <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:self-start h-fit">
                    <span className="text-secondary">// Shapelogix services</span>
                    <h2 className="text-white mt-3 mb-4 lg:mb-[1.5vw]">Our Focus</h2>
                    <p className="text-secondary">
                        A complete yet focused range of services, created to support ambitious brands at every stage of their growth journey.
                    </p>
                </div>

                <div>
                    {services.map((service, index) => (
                        <div
                            key={service.number}
                            className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr_3.2fr] items-start"
                        >
                            <div className="flex items-center gap-2 text-white pt-10 lg:pt-[3vw]">
                                <span className="text-white text-[10px] lg:text-[0.55vw]">◆</span>
                                <h5 className="text-white">{service.number}</h5>
                            </div>

                            <div className="w-[90px] h-[90px] lg:w-[7.5vw] lg:ms-20 lg:h-[7.5vw] rounded-lg mt-10 lg:mt-[3vw] lg:rounded-[0.5vw]">
                                {/* <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={46}
                                    height={46}
                                    className="h-full w-full object-contain opacity-90"
                                /> */}
                                <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                            </div>

                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-[1vw] pt-8 pb-10 lg:pt-[3vw] lg:pb-[5vw] bg-black border border-l-0 ms-0.5 border-borders/15 border-dashed`}>
                                <h5 className="text-white md:max-w-[14ch]">{service.title}</h5>
                                <p className="text-secondary md:max-w-[33ch]">{service.description}</p>
                            </div>
                        </div>
                    ))}

                    <div className="grid md:grid-cols-3 gap-3 mt-10 lg:mt-[3vw]">
                        <h5 className="text-white! col-span-2 lg:max-w-2/3">
                            Our approach is about cutting through noise and building brands that feel clear, confident, and unmistakably their own.
                        </h5>
                        <div className="flex flex-col gap-2 items-start justify-start">
                            <span className="text-white!">Let's turn idea into impact</span>
                            <Button variant="black" className="w-full">
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
