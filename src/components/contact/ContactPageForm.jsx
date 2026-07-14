import Button from "@/components/common/Button";
import Link from "next/link";

const fields = [
    { label: "Name", placeholder: "Umer Aziz", full: true },
    { label: "Email", placeholder: "umeraziz@gmail.com", full: false },
    { label: "Phone", placeholder: "+92 999 888 777", full: false },
    { label: "Company", placeholder: "Shapelogix", full: true },
    { label: "Service Interest", placeholder: "UI/UX Design", full: true },
    { label: "Budget", placeholder: "100,000", full: false },
    { label: "Timeline", placeholder: "3 months", full: false },
    { label: "Project Details", placeholder: "Tell us about your goals, constraints, and what success looks like", full: true, type: "textarea" },
];

const contactInfo = [
    {
        label: "Studio",
        lines: ["Design & Software Development Agency", "Islamabad, Pakistan"],
    },
    {
        label: "Email",
        lines: ["hi@shapdelogix.agency"],
        href: "mailto:hi@shapdelogix.agency",
    },
    {
        label: "Phone",
        lines: ["(+92) 999 888 777"],
        href: "tel:+92999888777",
    },
    {
        label: "Hours",
        lines: ["Mon – Fri, 10:00 – 19:00 PKT", "Replies within 1–2 business days"],
    },
];

const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X / Twitter", href: "#" },
];

export default function ContactPageForm() {
    return (
        <section className="contact-page-form wrapper relative py-20! md:py-30! lg:py-[8vw]! bg-background">
            <div className="relative z-11 grid md:grid-cols-4 items-start gap-4 mb-8 lg:mb-[2.5vw]">
                <span className="text-secondary pt-2">// Work with us</span>
                <h2 className="col-span-2 lg:max-w-[14ch]">
                    Tell us what you&apos;re building
                </h2>
                <p className="lg:max-w-[28ch]">
                    Share context around your product, timeline, and constraints. We&apos;ll come back with clear next steps.
                </p>
            </div>

            <div className="relative z-11 grid grid-cols-1 lg:grid-cols-[0.85fr_2.15fr] gap-8 lg:gap-[2vw] items-start">
                <aside className="lg:sticky lg:top-[8vw] flex flex-col gap-8 lg:gap-[2vw]">
                    <h5 className="text-foreground! font-semibold! lg:max-w-[28ch]">
                        Whether you need a discovery partner, a delivery team, or a long-term product collaborator—start with a conversation.
                    </h5>

                    <div className="flex flex-col gap-6 lg:gap-[1.5vw]">
                        {contactInfo.map((item) => (
                            <div key={item.label}>
                                <span className="text-secondary block mb-2 lg:mb-[0.4vw]">
                                    {item.label}
                                </span>
                                {item.lines.map((line) =>
                                    item.href ? (
                                        <a
                                            key={line}
                                            href={item.href}
                                            className="block text-foreground! font-semibold! transition-colors hover:text-primary"
                                        >
                                            {line}
                                        </a>
                                    ) : (
                                        <p key={line} className="text-foreground! font-semibold! font-sans! tracking-normal! text-[14px]! lg:text-[0.95vw]!">
                                            {line}
                                        </p>
                                    )
                                )}
                            </div>
                        ))}
                    </div>

                    <div>
                        <span className="text-secondary block mb-3 lg:mb-[0.6vw]">Social</span>
                        <ul className="flex flex-col gap-2 lg:gap-[0.4vw]">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-foreground transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                <div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-3 lg:gap-x-[0.8vw] gap-y-4 lg:gap-y-[1vw] p-4 lg:p-[2vw] bg-white rounded-md lg:rounded-[0.4vw]">
                        {fields.map((field) => (
                            <label
                                key={field.label}
                                className={`flex flex-col gap-2 lg:gap-[0.35vw] ${field.full ? "md:col-span-2" : ""}`}
                            >
                                <span className="text-foreground!">{field.label}</span>
                                {field.type === "textarea" ? (
                                    <textarea
                                        name={field.label}
                                        placeholder={field.placeholder}
                                        rows={6}
                                        className="w-full border-b border-borders border-dashed bg-background px-3 py-2 lg:px-[0.8vw] lg:py-[0.6vw] text-foreground placeholder:text-secondary/80 outline-none focus:border-primary transition-colors resize-none"
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        name={field.label}
                                        placeholder={field.placeholder}
                                        className="w-full border-b border-borders border-dashed bg-background px-3 py-2 lg:px-[0.8vw] lg:py-[0.6vw] text-foreground placeholder:text-secondary/80 outline-none focus:border-primary transition-colors"
                                    />
                                )}
                            </label>
                        ))}
                    </form>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-4 lg:mt-[1vw]">
                        <p className="text-secondary max-w-[36ch]">
                            By submitting, I confirm I&apos;ve read and agree with{" "}
                            <Link href="/privacy" className="text-foreground! underline-offset-2 hover:underline hover:text-primary">
                                Privacy
                            </Link>{" "}
                            and Cookie Policies.
                        </p>
                        <Button variant="black" className="w-full md:w-auto bg-black! text-white! md:min-w-[18vw]">
                            Send request
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
