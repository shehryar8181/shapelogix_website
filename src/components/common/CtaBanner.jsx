import Button from "./Button";

const DEFAULT_IMAGE = "https://ik.imagekit.io/avonpbsnr/shapelogix/image%2011.png";

export default function CtaBanner({
    title = "Validate Your product vision before you invest",
    description =
        "Get an expert-led UX/UI feasibility review to ensure your product is worth building. We evaluate user flows, interaction models, technical constraints, platform requirements, and potential usability risks giving you a clear path from idea to a design that actually works in the real world.",
    buttonLabel = "Book free consultation",
    image = DEFAULT_IMAGE,
    imageAlt = "Shapelogix consultant",
    className = "",
}) {
    return (
        <section className={`cta-banner wrapper relative pt-16! md:pt-24! lg:pt-[13vw]! bg-background ${className}`.trim()}>
            <div className="relative z-11 overflow-visible rounded-none bg-[linear-gradient(90deg,#0B0D2A_0%,#2A2F9E_52%,#4F46E5_100%)]">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-end gap-8 lg:gap-[2vw] px-6 py-10 md:px-10 lg:px-[3vw] lg:py-[5vw] lg:pb-0 min-h-[320px] lg:min-h-[22vw]">
                    <div className="flex flex-col gap-4 lg:gap-[1.2vw] pb-2 lg:pb-[3vw] relative z-11 lg:max-w-[52ch]">
                        <h3 className="text-white! font-bold! leading-[110%]!">
                            {title}
                        </h3>
                        <p className="text-white/65! leading-[140%]!">
                            {description}
                        </p>
                        <Button variant="black" size="sm" className="mt-2 w-full sm:w-fit">
                            {buttonLabel}
                        </Button>
                    </div>

                    <div className="hidden md:flex absolute top-[-37.5%] right-0 justify-center lg:justify-end lg:self-end pointer-events-none">
                        <img
                            src={image}
                            alt={imageAlt}
                            className="relative z-20 w-[200px] md:w-[40vw] object-contain lg:mt-[-4vw] mb-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
