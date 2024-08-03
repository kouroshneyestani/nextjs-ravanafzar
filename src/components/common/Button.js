import React from "react";

const Button = ({
    color = "primary",
    children,
    className,
    onClick,
    disabled = true,
    type = "button",
}) => {
    return (
        <button
            type={type}
            className={`h-14 px-6 font-bold rounded-default flex items-center justify-center gap-3 text-white border-2 border-${color} bg-${color} transition-opacity duration-300 ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
