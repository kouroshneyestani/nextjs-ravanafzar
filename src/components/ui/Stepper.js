import React, { useContext, useState, useEffect } from "react";
import { StepContext } from "../../contexts/StepperContext";
import { useFetch, useSubmitData } from "../../hooks";
import {
    Button,
    Loading,
    RadioBox,
    ProgressBar,
    LongArrowLeft,
    LongArrowRight,
} from "../../components";

const Stepper = ({ className }) => {
    const { currentStep, nextStep, previousStep } = useContext(StepContext);
    const { data: questions, loading, error } = useFetch("/data/all.json");
    const {
        isSubmitting,
        response,
        error: submitError,
        submitData,
    } = useSubmitData("/submit-endpoint");
    const [answers, setAnswers] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isSurveyComplete, setIsSurveyComplete] = useState(false);

    useEffect(() => {
        if (questions && questions.length > 0 && currentStep === 0) {
            setAnswers({ [0]: questions[0].options[0] });
        }
    }, [questions, currentStep]);

    const handleTransition = (direction) => {
        if (isSurveyComplete) return;

        setIsTransitioning(true);
        setTimeout(() => {
            direction === "next" ? nextStep() : previousStep();
            setIsTransitioning(false);
        }, 300);
    };

    const handleOptionChange = (value) => {
        setAnswers({ ...answers, [currentStep]: value });

        if (currentStep < questions.length - 1) {
            handleTransition("next");
        }
    };

    if (loading) return <Loading />;
    if (error) return <div>مشکل در ارتباط با سرور.</div>;

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
                className="absolute top-0 left-0"
                totalSteps={questions.length}
                currentStep={
                    isSurveyComplete ? questions.length - 1 : currentStep
                }
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

                        <article className="flex flex-col gap-2">
                            {currentQuestion.options.map((option, index) => (
                                <RadioBox
                                    key={index}
                                    option={option}
                                    isSelected={answers[currentStep] === option}
                                    onChange={handleOptionChange}
                                    name={`question-${currentStep}`}
                                />
                            ))}
                        </article>

                        <footer className="mx-auto flex justify-between items-center gap-4">
                            <Button
                                color="primary"
                                onClick={() => handleTransition("prev")}
                                disabled={currentStep === 0}
                            >
                                سوال قبلی
                                <LongArrowRight width={21} />
                            </Button>

                            {isLastStep ? (
                                <Button
                                    color="success"
                                    onClick={handleFinish}
                                    disabled={isSubmitting || isFinishDisabled}
                                >
                                    {isSubmitting
                                        ? "در حال پردازش..."
                                        : "دیدن نتایج"}
                                    <LongArrowLeft width={21} />
                                </Button>
                            ) : (
                                <Button
                                    color="primary"
                                    onClick={() => handleTransition("next")}
                                    disabled={isNextDisabled}
                                >
                                    سوال بعدی
                                    <LongArrowLeft width={21} />
                                </Button>
                            )}
                        </footer>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center">
                    <div className="text-lg font-bold mb-4">نتایج تست</div>
                    {submitStatus === "success" && (
                        <div className="mt-4 text-success">
                            <div>با موفقیت ثبت شد.</div>
                            <div>{response}</div>
                        </div>
                    )}
                    {submitStatus === "error" && (
                        <div className="mt-4 text-danger">
                            <div>مشکلی پیش آمده. لطفا دوباره امتحان کنید.</div>
                        </div>
                    )}
                    {submitError && (
                        <div className="mt-4 text-danger">
                            ارور: {submitError}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Stepper;
