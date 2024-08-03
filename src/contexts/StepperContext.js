"use client";

import React, { createContext, useState } from "react";

const StepperContext = createContext();

const StepProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const previousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    return (
        <StepperContext.Provider value={{ currentStep, nextStep, previousStep }}>
            {children}
        </StepperContext.Provider>
    );
};

export { StepperContext, StepProvider };
