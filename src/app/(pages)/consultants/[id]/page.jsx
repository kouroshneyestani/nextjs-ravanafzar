"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Button,
    Header1,
    SpaceBar,
    Container,
    TomanIcon,
    ClockIcon,
    BarChartIcon,
} from "@components";

const data = [
    {
        id: 1,
        price: 180000,
        image: "/images/consultants/avatar-1.jpg",
        title: "علیرضا هراتی",
        subtitle: "شماره پروانه اشتغال تخصصی: 13499",
        description:
            "طرحواره درمانگر، مشاوره فردی افسردگی، اضطراب و مشکل در روابط بین فردی",
        questions: "240",
        tags: ["شخصیت", "پنج عاملی"],
        readingTime: "45",
        sales: 120,
        reviews: 4,
        off: 10,
    },
];

export default function Page() {
    return (
        <div className="w-full flex gap-10 b-red-300">
            <aside className="w-2/5">
                <div className="top-10 sticky">
                    {data.map((item) => (
                        <div key={item.id}>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 relative  overflow-hidden rounded-default">
                                        <Link href={`/quizzes/${item.id}`}>
                                            <Image
                                                fill
                                                alt={item.title}
                                                src={item.image}
                                                objectFit="cover"
                                            />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <h3 className="text-xl font-bold hover:text-primary transition-colors duration-100">
                                            <Link
                                                href={`/consultants/${item.id}`}
                                            >
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <p>{item.subtitle}</p>
                                    </div>
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
                                                    <span className="flex gap-1">
                                                        <span>
                                                            {item.readingTime}
                                                        </span>
                                                        <span>دقیقه</span>
                                                    </span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <BarChartIcon
                                                        width={15}
                                                        height={15}
                                                    />
                                                    <span className="flex gap-1">
                                                        <span>
                                                            {item.questions}
                                                        </span>
                                                        <span>پرسش</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="w-[1px] h-10 flex bg-gray" />
                                        <div className="flex flex-col gap-1">
                                            {item.off ? (
                                                <>
                                                    <div className="flex gap-1 ">
                                                        <span className="text-lg">
                                                            {parseInt(
                                                                item.price *
                                                                    (1 -
                                                                        item.off /
                                                                            100),
                                                            ).toLocaleString()}
                                                        </span>
                                                        <span>
                                                            <TomanIcon />
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-1 ">
                                                        <span className="line-through opacity-50">
                                                            {item.price.toLocaleString()}
                                                        </span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="flex gap-1 ">
                                                    <span className="text-lg">
                                                        {item.price.toLocaleString()}
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
                                <Button color="primary" className="w-full">
                                    <span>رزرور وقت مشاوره</span>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
            <main className="w-5/6">
                <div className="w-full h-screen bg-gray-300 shadow rounded-default">
                    <nav className="top-0 sticky">
                        <ul className="flex items-end justify-around border-b border-overlay">
                            <li className="h-16 px-10 font-bold flex items-center justify-center border-b-4 border-primary text-primary">
                                دیدگاه کاربران
                            </li>
                            <li className="h-16 px-10 font-bold flex items-center justify-center border-b-4 border-transparent">
                                سوابقه و مشخصات{" "}
                            </li>
                            <li className="h-16 px-10 font-bold flex items-center justify-center border-b-4 border-transparent">
                                رزومه و افتخارات
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        </div>
    );
}
