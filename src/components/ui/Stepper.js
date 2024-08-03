import React, { useContext, useState, useEffect } from "react";
import { StepContext } from "../../contexts/StepperContext";
import { useFetch, useSubmitData } from "../../hooks";
import { Loading, ProgressBar } from "../../components";

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
    const [submitStatus, setSubmitStatus] = useState(null); // To track submission status
    const [isTransitioning, setIsTransitioning] = useState(false); // For handling transition effects
    const [isSurveyComplete, setIsSurveyComplete] = useState(false); // To track survey completion

    useEffect(() => {
        // Initialize the answers state with the first option of the first question
        if (questions && questions.length > 0 && currentStep === 0) {
            setAnswers({ [0]: questions[0].options[0] });
        }
    }, [questions, currentStep]);

    const handleTransition = (direction) => {
        if (isSurveyComplete) return; // Prevent transitions if survey is complete

        setIsTransitioning(true);
        setTimeout(() => {
            direction === "next" ? nextStep() : previousStep();
            setIsTransitioning(false);
        }, 300); // Match this duration with your Tailwind transition duration
    };

    const handleOptionChange = (value) => {
        setAnswers({ ...answers, [currentStep]: value });
        if (currentStep < questions.length - 1) {
            handleTransition("next");
        }
    };

    if (loading) return <Loading />;
    if (error) return <div>Error loading questions</div>;

    const currentQuestion = questions[currentStep];
    const isNextDisabled = currentQuestion.required && !answers[currentStep];
    const isLastStep = currentStep === questions.length - 1;
    const isFinishDisabled =
        isLastStep && currentQuestion.required && !answers[currentStep];

    const handleFinish = async () => {
        const result = await submitData(answers);
        if (result) {
            setSubmitStatus("success");
            setIsSurveyComplete(true);
        } else {
            setSubmitStatus("error");
        }
    };

    return (
        <div className={`relative`}>
            <ProgressBar
                currentStep={
                    isSurveyComplete ? questions.length - 1 : currentStep
                }
                height="h-1"
                totalSteps={questions.length}
                className="absolute top-0 left-0"
            />
            {currentStep < questions.length ? (
                <>
                    <div
                        className={`${className} relative transition-transform duration-300 transform ${
                            isTransitioning
                                ? "scale-95 opacity-50"
                                : "scale-100 opacity-100"
                        }`}
                    >
                        <header className="flex flex-col gap-4">
                            <div className="flex gap-2 text-lg font-bold text-primary">
                                <span className="text-xl">پرسش</span>
                                <div className="flex gap-1">
                                    <span>{currentStep + 1}</span>
                                    <span>از</span>
                                    <span>{questions.length}</span>
                                </div>
                            </div>
                            <h4 className="text-3xl font-bold mb-2">
                                {currentQuestion.body}
                            </h4>
                        </header>
                        <div className="flex flex-col gap-2">
                            {currentQuestion.options.map((option, index) => (
                                <label
                                    key={index}
                                    className={`w-full h-14 flex gap-4 items-center cursor-pointer px-4 border-2 rounded-3xl ${
                                        answers[currentStep] === option
                                            ? "border-primary"
                                            : ""
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${currentStep}`}
                                        value={option}
                                        checked={
                                            answers[currentStep] === option
                                        }
                                        onChange={() =>
                                            handleOptionChange(option)
                                        }
                                        className="hidden"
                                    />
                                    <span
                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                            answers[currentStep] === option
                                                ? "border-primary bg-primary"
                                                : "border-primary"
                                        }`}
                                    >
                                        {answers[currentStep] === option && (
                                            <span className="w-1 h-1 rounded-full bg-white"></span>
                                        )}
                                    </span>
                                    <span
                                        className={`font-bold ${
                                            answers[currentStep] === option &&
                                            "text-primary"
                                        }`}
                                    >
                                        {option}
                                    </span>
                                </label>
                            ))}
                        </div>

                        <div className="mx-auto flex justify-between items-center gap-4">
                            <button
                                className="font-bold h-14 border-2 border-overlay flex items-center justify-center px-6 text-primary rounded-default disabled:opacity-50"
                                onClick={() => handleTransition("prev")}
                                disabled={currentStep === 0}
                            >
                                <LongArrowRight width={21} />
                            </button>

                            {isLastStep ? (
                                <button
                                    className={`font-bold w-full border-2 border-success h-14 flex items-center justify-end px-6 bg-success text-white rounded-default disabled:opacity-50 gap-3 ${
                                        isSubmitting || isFinishDisabled
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                    }`}
                                    onClick={handleFinish}
                                    disabled={isSubmitting || isFinishDisabled}
                                >
                                    {isSubmitting
                                        ? "در حال پردازش..."
                                        : "دیدن نتایج"}
                                    <LongArrowLeft width={21} />
                                </button>
                            ) : (
                                <button
                                    className="font-bold w-full border-2 border-primary h-14 flex items-center justify-end px-6 bg-primary text-white rounded-default disabled:opacity-50 gap-3"
                                    onClick={() => handleTransition("next")}
                                    disabled={isNextDisabled}
                                >
                                    سوال بعدی
                                    <LongArrowLeft width={21} />
                                </button>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center">
                    <div className="text-lg font-bold mb-4">Finish Survey</div>
                    <button
                        className={`bg-green-500 text-white px-4 py-2 rounded ${
                            isSubmitting || isFinishDisabled
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }`}
                        onClick={handleFinish}
                        disabled={isSubmitting || isFinishDisabled}
                    >
                        {isSubmitting ? "Submitting..." : "Finish"}
                    </button>
                    {submitStatus === "success" && (
                        <div className="mt-4 text-success">
                            <div>Submission successful!</div>
                            <div>{response}</div>
                        </div>
                    )}
                    {submitStatus === "error" && (
                        <div className="mt-4 text-danger">
                            <div>Submission failed. Please try again.</div>
                        </div>
                    )}
                    {submitError && (
                        <div className="mt-4 text-danger">
                            Error: {submitError}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const LongArrowLeft = ({
    width = "100%",
    height = "100%",
    color = "currentcolor",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 50"
        width={width}
        height={height}
        fill={color}
        {...props}
    >
        <path d="M5 25 L95 25 L95 28 L18 28 L38 43 L33 48 L5 25 L33 2 L38 7 L18 22 L95 22 L95 25 Z" />
    </svg>
);

const LongArrowRight = ({
    width = "100%",
    height = "100%",
    color = "currentcolor",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 50"
        width={width}
        height={height}
        fill={color}
        {...props}
    >
        <path d="M95 25 L5 25 L5 22 L82 22 L62 7 L67 2 L95 25 L67 48 L62 43 L82 28 L5 28 L5 25 Z" />
    </svg>
);

export default Stepper;
