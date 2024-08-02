import React, { useContext, useState } from "react";
import { StepContext } from "../../contexts/StepperContext";
import { useFetch } from "../../hooks/useFetch";

const Stepper = ({ clasName }) => {
    const { currentStep, nextStep, previousStep } = useContext(StepContext);
    const { data: questions, loading, error } = useFetch("/data/all.json");
    const [answers, setAnswers] = useState({});

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading questions</div>;

    const currentQuestion = questions[currentStep];
    const isNextDisabled = currentQuestion.required && !answers[currentStep];

    const handleOptionChange = (value) => {
        setAnswers({ ...answers, [currentStep]: value });
    };

    return (
        <div className={clasName}>
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

            <div className="flex justify-between">
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

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                    onClick={nextStep}
                    disabled={
                        isNextDisabled || currentStep === questions.length - 1
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Stepper;
