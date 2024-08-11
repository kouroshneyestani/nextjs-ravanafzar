"use client";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

import {
    Button,
    Loading,
    TomanIcon,
    ClockIcon,
    ProfileIcon,
    BarChartIcon,
    Container
} from "@components";

export default function Page() {
    const router = useRouter();
    const { id } = useParams();

    const onAddToCart = () => {
        alert("دروازه پرداخت");

        if (id) {
            console.log(`Navigating to /quizzes/${id}/start`);
            router.push(`/quizzes/${id}/start`);
        }
    };

    if (!id) {
        return <Loading />;
    }

    return (
        <div className="w-full">
            <Container>
                <div className="flex items-center gap-16">
                    <article>
                        <div className="flex flex-col gap-6">
                            <h1 className="font-bold text-4xl">
                                تست روان شناسی شخصیت (NEO)
                            </h1>
                            <p className="text-lg">
                                این مجموعه سوالات به احساس رضایت از ظاهر شما
                                می‌پردازد. توجه داشته باشید که نتایج، به صورت
                                مطلق نشان‌دهنده وجود یا عدم شرمساری از بدن نیست
                                و بهتر است این موضوع با نظارت و همراهی یک متخصص،
                                بررسی شود.
                            </p>
                            <ul className="gap-10 flex items-center mb-10">
                                <TestDetail
                                    icon={<BarChartIcon />}
                                    label="تعداد سوالات"
                                    value="240 پرسش"
                                />
                                <TestDetail
                                    icon={<ClockIcon />}
                                    label="زمان مورد نیاز"
                                    value="180 دقیقه"
                                />
                                <TestDetail
                                    icon={<ProfileIcon />}
                                    label="رده سنی"
                                    value="18 سال"
                                />
                            </ul>
                            <div className="flex items-center">
                                <Button onClick={onAddToCart}>
                                    <span>شروع آزمون:</span>
                                    <div className="flex items-center justify-end">
                                        {(20000).toLocaleString()}
                                        <TomanIcon />
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </article>
                    <aside className="w-3/4">
                        <div className="relative">
                            <Image
                                src="/images/quizzes/1.png"
                                width={400}
                                height={300}
                                alt="تست"
                            />
                        </div>
                    </aside>
                </div>
            </Container>
        </div>
    );
}

function TestDetail({ icon, label, value }) {
    return (
        <li className="flex flex-col gap-4">
            <span className="font-bold text-lg flex items-center gap-2">
                {icon}
                <span>{label}</span>
            </span>
            <span>{value}</span>
        </li>
    );
}
