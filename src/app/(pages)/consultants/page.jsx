"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Header1,
    SpaceBar,
    Container,
    TomanIcon,
    ClockIcon,
    BarChartIcon,
} from "../../../components";
import { consultants } from "@data";

export default function Page() {
    return (
        <>
            <aside className="w-1/6">
                <ul className="flex flex-col gap-2">
                    <li className="flex items-center justify-center font-bold bg-overlay rounded-default p-4">
                        <Link href="#">
                            <span># روان شناسی</span>
                        </Link>
                    </li>
                    <li className="flex items-center justify-center font-bold bg-overlay rounded-default p-4">
                        <Link href="#">
                            <span># خود شناسی</span>
                        </Link>
                    </li>
                    <li className="flex items-center justify-center font-bold bg-overlay rounded-default p-4">
                        <Link href="#">
                            <span># رشد فردی</span>
                        </Link>
                    </li>
                </ul>
            </aside>
            <main className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {consultants.map((item) => (
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
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
