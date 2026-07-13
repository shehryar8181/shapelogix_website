import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { legalLinks, navLinks, services } from "@/data/navigation";

export default function HeaderMenu({ onClose }) {
    return (
        <div className="relative overflow-y-auto h-[calc(100vh-4rem)] lg:h-[calc(100vh-4vw)]">
            <h1
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[2%] left-1/2 -translate-x-1/2 text-[15.5vw]! leading-none! text-foreground/5! whitespace-nowrap"
            >
                <span className="text-[15.5vw]! text-foreground/5!">Shape</span>logix
            </h1>

            <div className="wrapper relative z-11 py-8 lg:py-[3vw]">
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div className="order-3 lg:order-1 col-span-2 flex flex-col justify-between gap-10 lg:gap-[4vw] mt-10 lg:mt-0">
                        <h5 className="text-foreground! font-semibold! max-w-[34ch]">
                            We choose clarity over clutter and depth over decoration, because strong brands deserve meaningful foundations.
                        </h5>

                        <div className="flex flex-col gap-8 lg:gap-[2vw]">
                            <p className="text-secondary! max-w-[28ch]">
                                Design & Software Development Agency Based in Pakistan, Islamabad
                            </p>
                            <div>
                                <a href="mailto:hi@shapdelogix.agency" className="block text-foreground! text-2xl lg:text-[2vw]! font-bold! mb-2 lg:mb-[0.5vw]">
                                    hi@shapdelogix.agency
                                </a>
                                <a href="tel:+92999888777" className="text-secondary!">
                                    (+92) 999 888 777
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col justify-between gap-10 lg:gap-[5vw]">
                        <nav className="flex flex-col gap-3 lg:gap-[0.8vw]">
                            {navLinks.map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    onClick={onClose}
                                    className="group inline-flex items-center gap-2 text-foreground! hover:text-primary! transition-colors"
                                >
                                    <h5 className="text-base lg:text-[1vw] font-semibold!">{link}</h5>
                                    <ArrowUpRight className="size-4 lg:size-[1.3vw] opacity-70 group-hover:opacity-100" />
                                </Link>
                            ))}
                        </nav>

                        <div>
                            <span className="text-secondary block mb-3 lg:mb-[0.8vw]">Services</span>
                            <ul className="flex flex-col gap-2 lg:gap-[0.45vw]">
                                {services.map((service, index) => (
                                    <li key={`${service}-${index}`} className="mb-1">
                                        <a href="#" onClick={onClose} className="text-secondary! hover:text-foreground! transition-colors">
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="order-2 lg:order-3 flex flex-col justify-end">
                        <div>
                            <span className="text-secondary block mb-3 lg:mb-[0.8vw]">Legal</span>
                            <ul className="flex flex-col gap-2 lg:gap-[0.45vw]">
                                {legalLinks.map((link) => (
                                    <li key={link}>
                                        <a href="#" onClick={onClose} className="text-secondary! hover:text-foreground! transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
