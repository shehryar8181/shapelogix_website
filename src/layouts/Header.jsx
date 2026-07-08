import { Menu } from "lucide-react";

export default function Header() {
    return (
        <div className="wrapper fixed top-0 left-0 w-full flex items-center justify-between z-50">
            <h1 className="text-xl! lg:text-[1.5vw]!">
                <span className="text-xl! lg:text-[1.5vw]!">Shape</span>logix
            </h1>
            <button
                type="button"
                aria-label="Open menu"
                className="flex items-center justify-center"
            >
                <Menu className="size-6 lg:size-[1.5vw]" strokeWidth={1.5} />
            </button>
        </div>
    );
}