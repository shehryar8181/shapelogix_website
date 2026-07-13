import Button from "./Button";

const fields = [
    { label: "Name", placeholder: "Umer Aziz", full: true },
    { label: "Email", placeholder: "umeraziz@gmail.com", full: false },
    { label: "Phone", placeholder: "+92 999 888 777", full: false },
    { label: "Company", placeholder: "shapelogix", full: true },
    { label: "Project Type", placeholder: "Pay roll management system", full: true },
    { label: "Budget", placeholder: "100,000", full: true },
    { label: "Timeline", placeholder: "3 months", full: true },
    { label: "Project Details", placeholder: "Tell us about your project", full: true, type: "textarea" },
];

export default function ContactForm() {
    return (
        <section className="wrapper relative pt-20! md:pt-30! lg:pt-[10vw]! bg-background">
            <div className="grid md:grid-cols-4 items-start gap-4 mb-6 lg:mb-[2.5vw]">
                <span className="text-secondary pt-2">// Work with us</span>
                <h2 className="col-span-2 lg:max-w-[9ch]">
                    Lets create with purpose
                </h2>
                <p className="lg:max-w-[24ch]">
                    Share your goals, timeline, and challenges, we'll respond with clarity and next steps.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_2.28fr] gap-4 lg:gap-[1vw]">
                <aside className="lg:sticky lg:top-[30%] lg:self-start flex flex-col gap-8 lg:gap-[3vw]">
                    <h5 className="text-foreground! font-semibold!">
                        A curated selection of work shaped by strategy, creativity, and thoughtful execution, crafted to help brands stand out and grow with confidence.
                    </h5>

                    <div>
                        <span className="text-secondary block mb-2 lg:mb-[0.5vw]">Team</span>
                        <h3 className="font-bold! leading-none!">
                            <span className="text-primary! font-bold!">Shape</span>logix
                        </h3>
                    </div>
                </aside>

                <div className="">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-3 lg:gap-x-[0.8vw] gap-y-4 lg:gap-y-[1vw] p-4 lg:p-[2vw] bg-white md:mx-1 rounded-md lg:rounded-[0.4vw] relative z-11">
                        {fields.map((field) => (
                            <label key={field.label} className={`flex flex-col gap-2 lg:gap-[0.35vw] ${field.full ? "md:col-span-2" : ""}`}>
                                <span className="text-foreground!">{field.label}</span>
                                {field.type === "textarea" ? (
                                    <textarea
                                        placeholder={field.placeholder}
                                        rows={6}
                                        className="w-full border-b border-borders border-dashed bg-background px-3 py-2 lg:px-[0.8vw] lg:py-[0.6vw] text-foreground placeholder:text-secondary/80 outline-none focus:border-primary transition-colors resize-none"
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        placeholder={field.placeholder}
                                        className="w-full border-b border-borders border-dashed bg-background px-3 py-2 lg:px-[0.8vw] lg:py-[0.6vw] text-foreground placeholder:text-secondary/80 outline-none focus:border-primary transition-colors"
                                    />
                                )}
                            </label>
                        ))}
                    </form>

                    <div className="flex items-end justify-between">
                        <p className="py-3 lg:px-[1vw] lg:py-[0.8vw] text-secondary max-w-[32ch]">
                            By submitting, I confirm I&apos;ve read and agree with Privacy and Cookie Policies.
                        </p>
                        <div className="p-2 lg:p-[0.6vw]">
                            <Button variant="black" className="w-full bg-black! text-white! md:min-w-[20vw]">
                                Send request
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
