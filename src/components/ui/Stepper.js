import React, { useContext, useState, useEffect } from "react";
import { StepContext } from "../../contexts/StepperContext";
import { useFetch } from "../../hooks/useFetch";
import useSubmitData from "../../hooks/useSubmitData";

const Stepper = ({ className }) => {
    const { currentStep, nextStep, previousStep } = useContext(StepContext);
    const { data: questions, loading, error } = useFetch("/data/all.json");
    const {
        isSubmitting,
        response,
        error: submitError,
        submitData,
    } = useSubmitData("/submit-endpoint"); // Replace with your actual endpoint
    const [answers, setAnswers] = useState({});

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading questions</div>;

    const currentQuestion = questions[currentStep];
    const isNextDisabled = currentQuestion.required && !answers[currentStep];

    // Determine if the current step is the last one
    const isLastStep = currentStep === questions.length - 1;
    const isFinishDisabled =
        isLastStep && currentQuestion.required && !answers[currentStep];

    const handleOptionChange = (value) => {
        setAnswers({ ...answers, [currentStep]: value });
    };

    const handleFinish = () => {
        submitData(answers);
    };

    return (
        <div className={className}>
            {currentStep < questions.length ? (
                <>
                    <div className="mb-4">
                        <div className="text-lg font-bold mb-2">
                            {currentQuestion.question}
                        </div>
                        {currentQuestion.options.map((option, index) => (
                            <label key={index} className="block mb-2">
                                <input
                                    type="radio"
                                    name={`question-${currentStep}`}
                                    value={option}
                                    checked={answers[currentStep] === option}
                                    onChange={() => handleOptionChange(option)}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                            onClick={previousStep}
                            disabled={currentStep === 0}
                        >
                            Previous
                        </button>

                        <span>
                            {currentStep + 1}/{questions.length}
                        </span>

                        {isLastStep ? (
                            <button
                                className={`bg-green-500 text-white px-4 py-2 rounded ${isSubmitting || isFinishDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                                onClick={handleFinish}
                                disabled={isSubmitting || isFinishDisabled}
                            >
                                {isSubmitting ? "Submitting..." : "Finish"}
                            </button>
                        ) : (
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                                onClick={nextStep}
                                disabled={isNextDisabled}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center">
                    <div className="text-lg font-bold mb-4">Finish Survey</div>
                    <button
                        className={`bg-green-500 text-white px-4 py-2 rounded ${isSubmitting || isFinishDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={handleFinish}
                        disabled={isSubmitting || isFinishDisabled}
                    >
                        {isSubmitting ? "Submitting..." : "Finish"}
                    </button>
                    {response && (
                        <div className="mt-4 text-green-500">{response}</div>
                    )}
                    {submitError && (
                        <div className="mt-4 text-red-500">
                            Error: {submitError}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Stepper;
