"use client";

import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import HeaderMenu from "./HeaderMenu";

function MenuToggleIcon({ open }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className="size-6 lg:size-[2.5vw]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
        >
            <g transform="translate(12 12)">
                <g
                    className="transition-transform duration-300 ease-in-out"
                    style={{
                        transform: open ? "translateY(0) rotate(45deg)" : "translateY(-3px) rotate(0deg)",
                    }}
                >
                    <line x1="-8" y1="0" x2="8" y2="0" />
                </g>
                <g
                    className="transition-transform duration-300 ease-in-out"
                    style={{
                        transform: open ? "translateY(0) rotate(-45deg)" : "translateY(3px) rotate(0deg)",
                    }}
                >
                    <line x1="-8" y1="0" x2="8" y2="0" />
                </g>
            </g>
        </svg>
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const lenis = useLenis();

    useLenis((instance) => {
        setScrolled(instance.scroll > 24);
    });

    useEffect(() => {
        if (menuOpen) {
            lenis?.stop();
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            lenis?.start();
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }

        return () => {
            lenis?.start();
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [menuOpen, lenis]);

    const solidBg = scrolled || menuOpen;

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div
                className={`fixed top-0 left-0 w-full overflow-hidden bg-background text-foreground transition-[max-height] duration-500 ease-in-out ${menuOpen ? "max-h-screen pointer-events-auto" : "max-h-0 pointer-events-none"}`}
                aria-hidden={!menuOpen}
            >
                <div className="h-screen pt-16 lg:pt-[5vw]">
                    <HeaderMenu onClose={() => setMenuOpen(false)} />
                </div>
            </div>

            <div
                className={`relative z-10 wrapper flex items-center justify-between py-4 lg:py-[1.2vw] transition-colors duration-900 ${
                    solidBg ? "bg-background" : "bg-transparent"
                }`}
            >
                <h1 className="text-xl! lg:text-[1.5vw]!">
                    <span className="text-xl! lg:text-[1.5vw]!">Shape</span>logix
                </h1>
                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                    className="flex items-center justify-center transition-colors cursor-pointer"
                >
                    <MenuToggleIcon open={menuOpen} />
                </button>
            </div>
        </header>
    );
}
