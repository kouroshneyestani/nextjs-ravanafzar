import React from "react";

const ProgressBar = ({
    height = "h-1",
    currentStep,
    totalSteps,
    className,
}) => {
    // Calculate the percentage of progress
    const progress = (currentStep / totalSteps) * 100;
    const displayText = false;

    return (
        <div
            className={`w-full ${height} bg-gray-200 rounded-full ${className}`}
        >
            <div
                className="absolute top-0 right-0 h-full bg-primary rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
            />

            <div
                className={`${height} relative text-center text-xs font-semibold text-white`}
            >
                {displayText && `${Math.round(progress)}%`}
            </div>
        </div>
    );
};

export default ProgressBar;
