"use client";

import Image from "next/image";
import { useState } from "react";
import { StepProvider } from "../../../../contexts/StepperContext";
import {
    Stepper,
    Button,
    TomanIcon,
    ClockIcon,
    ProfileIcon,
    BarChartIcon,
} from "../../../../components";

export default function Page() {
    const [view, setView] = useState("landing");

    const startTest = () => setView("landing");
    const onAddToCart = () => {
        alert("دروازه پرداخت");
        setView("tests");
    };

    return (
        <>
            {view === "landing" ? (
                <TestIntro
                    title="تست روان شناسی شخصیت (NEO)"
                    subtitle="این مجموعه سوالات به احساس رضایت از ظاهر شما می‌پردازد. توجه داشته باشید که نتایج، به صورت مطلق نشان‌دهنده وجود یا عدم شرمساری از بدن نیست و بهتر است این موضوع با نظارت و همراهی یک متخصص، بررسی شود."
                    ages={18}
                    time={180}
                    questions={240}
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
        <div className="flex flex-col gap-10 justify-between mx-auto select-none pb-6 pt-16">
            <div className="w-lvw max-w-4xl">
                <div className="flex items-center gap-16">
                    <article>
                        <div className="flex flex-col gap-6">
                            {title && (
                                <h1 className="font-bold text-4xl">{title}</h1>
                            )}
                            {subtitle && <p className="text-lg">{subtitle}</p>}
                            <ul className="gap-10 flex items-center mb-10">
                                {questions && (
                                    <li className="flex flex-col gap-4">
                                        <span className="font-bold text-lg flex items-center gap-2">
                                            <BarChartIcon />
                                            <span className="mt-2">
                                                تعداد سوالات
                                            </span>
                                        </span>
                                        <span>{questions} پرسش</span>
                                    </li>
                                )}
                                {time && (
                                    <li className="flex flex-col gap-4">
                                        <span className="font-bold text-lg flex items-center gap-2">
                                            <ClockIcon />
                                            <span>زمان مورد نیاز</span>
                                        </span>
                                        <span>{time} دقیقه</span>
                                    </li>
                                )}
                                {ages && (
                                    <li className="flex flex-col gap-4">
                                        <span className="font-bold text-lg flex items-center gap-2">
                                            <ProfileIcon />
                                            <span>رده سنسی</span>
                                        </span>
                                        <span>{ages} سال</span>
                                    </li>
                                )}
                            </ul>
                            <div className="flex items-center">
                                {price ? (
                                    <Button onClick={onAddToCart}>
                                        <span>شروع آزمون:</span>
                                        <div className="flex items-center justify-end">
                                            {price.toLocaleString()}
                                            <TomanIcon />
                                        </div>
                                    </Button>
                                ) : (
                                    <Button onClick={onStartTest}>
                                        شروع آزمون
                                    </Button>
                                )}
                            </div>
                        </div>
                    </article>
                    <aside className="w-3/4">
                        <div className="relative">
                            <Image
                                src="/images/tests/1.png"
                                width="400"
                                height="300"
                                alt="تست"
                            />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
