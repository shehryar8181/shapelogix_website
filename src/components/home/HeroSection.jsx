import TextAnimate from "../providers/TextAnimate";

export default function HeroSection() {
    return (
        <section className="relative h-svh w-full">
            <video src="https://ik.imagekit.io/avonpbsnr/shapelogix/hero-bg-video.mp4" autoPlay muted loop className="w-full h-full object-cover opacity-10 fixed inset-0 z-0"></video>
            <div className="wrapper absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-3 md:gap-4 lg:gap-[1.5vw] bg-[linear-gradient(180deg,rgba(255,255,255,0)_62.02%,#F6F6F6_100%)]">
                <div className="flex flex-col gap-5 md:gap-4 lg:gap-[1.5vw] -mt-3 md:mt-[-3vw] lg:mt-[-10vw]">
                    <h1 className="md:max-w-[50vw]">
                        <TextAnimate as="span" delay={0.5} text="We design" className="text-primary!" />
                        {" "}
                        <TextAnimate as="span" delay={0.75} text="brands people remember" className="text-black!" />
                    </h1>
                    <TextAnimate
                        as="p"
                        delay={1}
                        className="md:max-w-[50vw]"
                        text="Built for designers, agencies, and creatives who want to showcase their best work, make a strong first impression, and create real impact without bloated workflows."
                    />
                </div>
                <h1 className="absolute z-1 bottom-0 left-0 text-[15.7vw]! px-[1vw] leading-none">
                    <TextAnimate
                        as="span"
                        text="Shape"
                        effect="bounce"
                        className="text-[15.7vw]! text-primary!"
                    />
                    <TextAnimate
                        as="span"
                        text="logix"
                        effect="bounce"
                        delay={0}
                        className="text-[15.7vw]! text-black!"
                    />
                </h1>
            </div>
        </section>
    );
}