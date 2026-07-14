import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { legalLinks, navLinks, services } from "@/data/navigation";

export default function Footer() {
    return (
        <footer className="relative bg-black text-white overflow-hidden py-16 md:py-10 lg:py-[4vw]">
            <h1
                aria-hidden="true"
                className="pointer-events-none absolute top-[-6%] left-1/2 -translate-x-1/2 text-[15.5vw]! leading-none! text-white/5! whitespace-nowrap"
            >
                <span className="text-[15.5vw]! text-white/5!">Shape</span>logix
            </h1>

            <div className="wrapper relative z-11">
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div className="lg:p-[2vw] col-span-2 flex flex-col justify-between gap-10 lg:gap-[4vw]">
                        <h5 className="text-white! font-semibold! max-w-[34ch]">
                            We choose clarity over clutter and depth over decoration, because strong brands deserve meaningful foundations.
                        </h5>

                        <div className="flex flex-col gap-8 lg:gap-[2vw]">
                            <p className="text-secondary! max-w-[28ch]">
                                Design & Software Development Agency Based in Pakistan, Islamabad
                            </p>
                            <div>
                                <a href="mailto:hi@shapdelogix.agency" className="block text-white! text-2xl lg:text-[2vw]! font-bold! mb-2 lg:mb-[0.5vw]">
                                    hi@shapdelogix.agency
                                </a>
                                <a href="tel:+92999888777" className="text-secondary!">
                                    (+92) 999 888 777
                                </a>
                            </div>
                        </div>
                        <span className="text-secondary!">
                            © {new Date().getFullYear()} Shapelogix. All rights reserved.
                        </span>
                    </div>

                    <div className="p-5 lg:p-[2vw] flex flex-col justify-between gap-10 lg:gap-[5vw]">
                        <nav className="flex flex-col gap-3 lg:gap-[0.8vw]">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="group inline-flex items-center gap-2 text-white! hover:text-primary! transition-colors"
                                >
                                    <h5 className="text-base lg:text-[1vw] font-semibold!">{link.label}</h5>
                                    <ArrowUpRight className="size-4 lg:size-[1.3vw] opacity-70 group-hover:opacity-100" />
                                </Link>
                            ))}
                        </nav>

                        <div>
                            <span className="text-secondary block mb-3 lg:mb-[0.8vw]">Services</span>
                            <ul className="flex flex-col gap-2 lg:gap-[0.45vw]">
                                {services.map((service, index) => (
                                    <li key={`${service}-${index}`} className="mb-1">
                                        <a href="#" className="text-secondary! hover:text-white! transition-colors">
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="p-5 lg:p-[2vw] flex flex-col justify-end">
                        <div>
                            <span className="text-secondary block mb-3 lg:mb-[0.8vw]">Legal</span>
                            <ul className="flex flex-col gap-2 lg:gap-[0.45vw]">
                                {legalLinks.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-secondary! hover:text-white! transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
