import React from "react";

const Button = ({
    color = "primary",
    size = "md",
    children,
    className,
    onClick,
    disabled = false,
    type = "button",
}) => {
    let buttonSize = "px-6 h-14";
    let buttonColor = "bg-primary border-primary";

    if (size === "sm") {
        buttonSize = "px-4 h-10";
    }

    return (
        <button
            type={type}
            className={`font-bold rounded-default flex items-center justify-center gap-3 text-white border-2 border-${color} bg-${color} transition-opacity duration-300 ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${buttonSize}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
