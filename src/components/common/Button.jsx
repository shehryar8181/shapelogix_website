import { ArrowUpRight } from "lucide-react";
import { forwardRef } from "react";

const wrapperBaseClasses =
    "group flex justify-between items-stretch transition-colors cursor-pointer duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-60";

const variantClasses = {
    default: {
        wrapper: "border border-[#d9d9d9] bg-[#f1f1f1] text-foreground hover:bg-[#ececec]",
        icon: "border-l border-[#d9d9d9] bg-primary text-white group-hover:bg-primary/90",
    },
    black: {
        wrapper: "border border-white/15 bg-gray-100/20 text-white hover:bg-gray-900",
        icon: "border-l border-white/15 bg-primary text-white group-hover:bg-primary/90",
    },
};

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
        variant = "default",
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
    const activeVariant = variantClasses[variant] ? variant : "default";
    const isDisabled = disabled || loading;

    return (
        <button
            ref={ref}
            type={type}
            disabled={isDisabled}
            aria-busy={loading}
            className={`${wrapperBaseClasses} ${variantClasses[activeVariant].wrapper} ${fullWidth ? "w-full" : ""} ${className}`.trim()}
            {...props}
        >
            <span className={`${labelSizeClasses[activeSize]} whitespace-nowrap text-start lg:py-[1vw] font-display tracking-[0.08em] leading-none ${fullWidth ? "flex-1 text-left" : ""}`}>
                {children}
            </span>
            
            {showRightIcon && (
                <span className={`${iconSizeClasses[activeSize]} flex items-center justify-center transition-colors duration-200 ${variantClasses[activeVariant].icon}`}>
                    {loading ? (
                        <span
                            className="size-4 animate-spin rounded-full"
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
