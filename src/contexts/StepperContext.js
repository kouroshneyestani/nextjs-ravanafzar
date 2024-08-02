"use client";

import React, { createContext, useState } from "react";

const StepContext = createContext();

const StepProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const previousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    return (
        <StepContext.Provider value={{ currentStep, nextStep, previousStep }}>
            {children}
        </StepContext.Provider>
    );
};

export { StepContext, StepProvider };
