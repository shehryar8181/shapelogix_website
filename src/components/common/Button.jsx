import { ArrowUpRight } from "lucide-react";
import { forwardRef } from "react";

const wrapperBaseClasses =
    "group inline-flex items-stretch border border-[#d9d9d9] bg-[#f1f1f1] text-foreground transition-colors duration-200 hover:bg-[#ececec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-60";

const labelSizeClasses = {
    sm: "px-4 py-2 text-xs md:text-sm",
    md: "px-5 py-2.5 text-sm md:text-base",
    lg: "px-6 py-3 text-base md:text-lg",
};

const iconSizeClasses = {
    sm: "w-10",
    md: "w-11",
    lg: "w-12",
};

const Button = forwardRef(function Button(
    {
        children,
        className = "",
        size = "md",
        type = "button",
        loading = false,
        fullWidth = false,
        rightIcon = <ArrowUpRight className="size-5" strokeWidth={2.25} />,
        showRightIcon = true,
        disabled = false,
        ...props
    },
    ref
) {
    const activeSize = labelSizeClasses[size] ? size : "md";
    const isDisabled = disabled || loading;

    return (
        <button
            ref={ref}
            type={type}
            disabled={isDisabled}
            aria-busy={loading}
            className={`${wrapperBaseClasses} ${fullWidth ? "w-full" : ""} ${className}`.trim()}
            {...props}
        >
            <span className={`${labelSizeClasses[activeSize]} font-display tracking-[0.08em] leading-none ${fullWidth ? "flex-1 text-left" : ""}`}>
                {children}
            </span>
            {showRightIcon && (
                <span className={`${iconSizeClasses[activeSize]} flex items-center justify-center border-l border-[#d9d9d9] bg-primary text-white transition-colors duration-200 group-hover:bg-primary/90`}>
                    {loading ? (
                        <span
                            className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
                            aria-hidden="true"
                        />
                    ) : (
                        rightIcon
                    )}
                </span>
            )}
        </button>
    );
});

export default Button;
