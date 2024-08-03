"use client";

import Link from "next/link";
import Image from "next/image";
import {
    SpaceBar,
    Container,
    TomanIcon,
    ClockIcon,
    BarChartIcon,
} from "../../../components";

const tests = [
    {
        id: 1,
        price: 180000,
        image: "https://i.sstatic.net/y9DpT.jpg",
        title: "تست NEO، ارزیابی پنج بعد اصلی شخصیت شامل برون‌گرایی، وظیفه‌شناسی",
        subtitle: "ارزیابی پنج بعد اصلی شخصیت شامل برون‌گرایی، وظیفه‌شناسی",
        questions: "240",
        tags: ["شخصیت", "پنج عاملی"],
        readingTime: "45",
        sales: 120,
        off: 10,
    },
    {
        id: 2,
        price: 150000,
        image: "https://i.sstatic.net/y9DpT.jpg",
        title: "تست MBTI، ارزیابی پنج بعد اصلی شخصیت شامل برون‌گرایی، وظیفه‌شناسی",
        subtitle: "شناسایی 16 تیپ شخصیتی مختلف بر اساس چهار بعد اصلی شخصیت",
        questions: "93",
        tags: ["شخصیت", "تیپ‌شناسی"],
        readingTime: "30",
        sales: 85,
        off: 10,
    },
    {
        id: 3,
        price: 200000,
        image: "https://i.sstatic.net/y9DpT.jpg",
        title: "تست MBTI، ارزیابی پنج بعد اصلی شخصیت شامل برون‌گرایی، وظیفه‌شناسی",
        subtitle:
            "اندازه‌گیری توانایی‌های شناختی از جمله استدلال، حافظه، و حل مسئله",
        questions: "80",
        tags: ["هوش", "آزمون"],
        readingTime: "60",
        sales: 50,
        off: 10,
    },
    {
        id: 4,
        price: 170000,
        image: "https://i.sstatic.net/y9DpT.jpg",
        title: "تست MMPI، ارزیابی پنج بعد اصلی شخصیت شامل برون‌گرایی، وظیفه‌شناسی",
        subtitle:
            "ارزیابی ویژگی‌های روانشناختی و اختلالات شخصیتی از طریق سوالات گسترده",
        questions: "567",
        tags: ["شخصیت", "اختلالات"],
        readingTime: "90",
        sales: 95,
        off: 10,
    },
    {
        id: 1,
        price: 180000,
        image: "https://i.sstatic.net/y9DpT.jpg",
        title: "تست NEO، ارزیابی پنج بعد اصلی شخصیت شامل برون‌گرایی، وظیفه‌شناسی",
        subtitle: "ارزیابی پنج بعد اصلی شخصیت شامل برون‌گرایی، وظیفه‌شناسی",
        questions: "240",
        tags: ["شخصیت", "پنج عاملی"],
        readingTime: "45",
        sales: 120,
        off: 10,
    },
    {
        id: 2,
        price: 150000,
        image: "https://i.sstatic.net/y9DpT.jpg",
        title: "تست MBTI، ارزیابی پنج بعد اصلی شخصیت شامل برون‌گرایی، وظیفه‌شناسی",
        subtitle: "شناسایی 16 تیپ شخصیتی مختلف بر اساس چهار بعد اصلی شخصیت",
        questions: "93",
        tags: ["شخصیت", "تیپ‌شناسی"],
        readingTime: "30",
        sales: 85,
        off: 10,
    },
];

export default function Page() {
    return (
        <div>
            <SpaceBar pt={null} />
            <Container>
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="w-1/6">
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center justify-center font-bold text-white bg-primary rounded-default p-4">
                                <Link href="#">
                                    <span>تست های روان شناسی</span>
                                </Link>
                            </li>
                            <li className="flex items-center justify-center font-bold text-white bg-primary rounded-default p-4">
                                <Link href="#">
                                    <span>تست های خود شناسی</span>
                                </Link>
                            </li>
                            <li className="flex items-center justify-center font-bold text-white bg-primary rounded-default p-4">
                                <Link href="#">
                                    <span>تست های رشد فردی</span>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                    <main className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tests.map((test) => (
                                <div key={test.id}>
                                    <div className="flex flex-col gap-4">
                                        <div className="relative pt-[69%] overflow-hidden rounded-default">
                                            <Link href={`/quizzes/${test.id}`}>
                                                <Image
                                                    fill
                                                    alt={test.title}
                                                    src={test.image}
                                                    objectFit="cover"
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-xl font-bold hover:text-primary transition-colors duration-100">
                                                <Link
                                                    href={`/quizzes/${test.id}`}
                                                >
                                                    {test.title}
                                                </Link>
                                            </h3>
                                            <p className="text-lg hidden">
                                                {test.subtitle}
                                            </p>
                                        </div>
                                        <div className="pt-3 pb-3">
                                            <div className="flex items-center justify-around gap-10 text-sm">
                                                <div className="flex flex-col items-center gap-1">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex gap-2">
                                                            <ClockIcon
                                                                width={15}
                                                                height={15}
                                                            />
                                                            <span class="flex gap-1">
                                                                <span>
                                                                    {
                                                                        test.readingTime
                                                                    }
                                                                </span>
                                                                <span>
                                                                    دقیقه
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <BarChartIcon
                                                                width={15}
                                                                height={15}
                                                            />
                                                            <span class="flex gap-1">
                                                                <span>
                                                                    {
                                                                        test.questions
                                                                    }
                                                                </span>
                                                                <span>
                                                                    پرسش
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="w-[1px] h-10 flex bg-gray" />
                                                <div className="flex flex-col gap-1">
                                                    {test.off ? (
                                                        <>
                                                            <div className="flex gap-1 ">
                                                                <span className="text-lg">
                                                                    {parseInt(
                                                                        test.price *
                                                                            (1 -
                                                                                test.off /
                                                                                    100),
                                                                    ).toLocaleString()}
                                                                </span>
                                                                <span>
                                                                    <TomanIcon />
                                                                </span>
                                                            </div>
                                                            <div className="flex gap-1 ">
                                                                <span className="line-through opacity-50">
                                                                    {test.price.toLocaleString()}
                                                                </span>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="flex gap-1 ">
                                                            <span className="text-lg">
                                                                {test.price.toLocaleString()}
                                                            </span>
                                                            <span>
                                                                <TomanIcon />
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="w-full h-[1px] flex bg-gray" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </Container>
            <SpaceBar />
        </div>
    );
}
