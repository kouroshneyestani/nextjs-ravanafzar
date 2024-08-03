import React from "react";

const RadioBox = ({ option, isSelected, onChange, name }) => {
    return (
        <label
            className={`w-full h-14 flex gap-4 items-center cursor-pointer px-4 border-2 rounded-3xl ${
                isSelected ? "border-primary" : ""
            }`}
        >
            <input
                type="radio"
                name={name}
                value={option}
                checked={isSelected}
                onChange={() => onChange(option)}
                className="hidden"
            />
            <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? "border-primary bg-primary" : "border-primary"
                }`}
            >
                {isSelected && (
                    <span className="w-1 h-1 rounded-full bg-white"></span>
                )}
            </span>
            <span className={`font-bold ${isSelected && "text-primary"}`}>
                {option}
            </span>
        </label>
    );
};

export default RadioBox;
