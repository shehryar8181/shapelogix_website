import Button from "./Button";

export default function NewsletterSection() {
    return (
        <section className="wrapper relative py-20! md:py-30! lg:py-[10vw]! bg-background">
            <div className="grid md:grid-cols-4 items-start gap-4 mb-8 lg:mb-[3vw]">
                <span className="text-secondary pt-2">// News Letter</span>
                <h2 className="col-span-2 lg:max-w-[70%]">
                    Signals worth paying attention
                </h2>
                <p className="lg:max-w-[24ch]">
                    A curated digest of practical thinking and real-world brand perspectives monthly.
                </p>
            </div>

            <form className="flex  md:grid grid-cols-2 md:grid-cols-4 gap-0 relative z-11">
                <div className="hidden md:block"></div>
                <input
                    type="email"
                    placeholder="umeraziz@gmail.com"
                    className=" bg-white max-w-[70%] md:max-w-none md:col-span-2 px-4 py-2 border-b border-borders border-dashed lg:px-[1vw] lg:py-[0.75vw] text-foreground placeholder:text-secondary/80 outline-none"
                />
                <Button
                    variant="black"
                    className="w-full bg-black! text-white! rounded-none!"
                >
                    Subscribe
                </Button>
            </form>
        </section>
    );
}
