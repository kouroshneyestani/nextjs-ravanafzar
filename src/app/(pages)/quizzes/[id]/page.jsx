"use client";

import { useState } from "react";
import { StepProvider } from "../../../../contexts/StepperContext";
import { SpaceBar, Stepper, Button, TomanIcon } from "../../../../components";

export default function Page() {
    const [landing, setLanding] = useState(true);

    const startTest = () => setLanding(false);
    const onAddToCart = () => {
        alert("دروازه پرداخت");
        setLanding(false);
    };

    return (
        <>
            {landing ? (
                <TestIntro
                    title="تست شرمساری از بدن"
                    subtitle="این مجموعه سوالات به احساس رضایت از ظاهر شما می‌پردازد. توجه داشته باشید که نتایج، به صورت مطلق نشان‌دهنده وجود یا عدم شرمساری از بدن نیست و بهتر است این موضوع با نظارت و همراهی یک متخصص، بررسی شود."
                    ages={18}
                    time={180}
                    questions={80}
                    price={240000}
                    onStartTest={startTest}
                    onAddToCart={onAddToCart}
                />
            ) : (
                <StepProvider>
                    <Stepper className="w-lvw max-w-xl h-screen flex flex-col gap-10 justify-end mx-auto select-none " />
                </StepProvider>
            )}
        </>
    );
}

function TestIntro({
    title,
    subtitle,
    questions,
    time,
    ages,
    price,
    onStartTest,
    onAddToCart,
}) {
    return (
        <div className="max-w-2xl flex flex-col gap-10 justify-between mx-auto select-none pb-6 pt-16">
            <div className="text-center flex flex-col gap-6">
                {title && <h1 className="font-bold text-4xl">{title}</h1>}
                {subtitle && <p className="text-lg">{subtitle}</p>}
                <ul className="gap-10 flex items-center justify-center my-10">
                    {questions && (
                        <li className="flex flex-col gap-4">
                            <span class="font-bold text-lg">تعداد سوالات</span>
                            <span>{questions}</span>
                        </li>
                    )}
                    {time && (
                        <li className="flex flex-col gap-4">
                            <span class="font-bold text-lg">
                                زمان مورد نیاز
                            </span>
                            <span>{time}</span>
                        </li>
                    )}
                    {ages && (
                        <li className="flex flex-col gap-4">
                            <span class="font-bold text-lg">رده سنسی</span>
                            <span>{ages}</span>
                        </li>
                    )}
                </ul>
                <div className="flex items-center justify-center">
                    {price ? (
                        <Button onClick={onAddToCart}>
                            <span>شروع آزمون:</span>
                            <div className="flex items-center justify-end">
                                {price.toLocaleString()}
                                <TomanIcon />
                            </div>
                        </Button>
                    ) : (
                        <Button onClick={onStartTest}>شروع آزمون</Button>
                    )}
                </div>
            </div>
        </div>
    );
}
