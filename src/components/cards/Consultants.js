import Link from "next/link";
import Image from "next/image";
import { TomanIcon, ClockIcon, BarChartIcon } from "@components";

export default function Card({
    id,
    title,
    image,
    subtitle,
    price,
    off,
    questions,
    readingTime,
}) {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 relative  overflow-hidden rounded-default">
                        <Link href={`/consultants/${id}`}>
                            <Image
                                fill
                                alt={title}
                                src={image}
                                objectFit="cover"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        <h3 className="text-xl font-bold hover:text-primary transition-colors duration-100">
                            <Link href={`/consultants/${id}`}>{title}</Link>
                        </h3>
                        <p>{subtitle}</p>
                    </div>
                </div>
                <div className="pt-3 pb-3">
                    <div className="flex items-center justify-around gap-10 text-sm">
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <ClockIcon width={15} height={15} />
                                    <span className="flex gap-1">
                                        <span>{readingTime}</span>
                                        <span>دقیقه</span>
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <BarChartIcon width={15} height={15} />
                                    <span className="flex gap-1">
                                        <span>{questions}</span>
                                        <span>پرسش</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span className="w-[1px] h-10 flex bg-overlay" />
                        <div className="flex flex-col gap-1">
                            {off ? (
                                <>
                                    <div className="flex gap-1 ">
                                        <span className="text-lg">
                                            {parseInt(
                                                price * (1 - off / 100),
                                            ).toLocaleString()}
                                        </span>
                                        <span>
                                            <TomanIcon />
                                        </span>
                                    </div>
                                    <div className="flex gap-1 ">
                                        <span className="line-through opacity-50">
                                            {price.toLocaleString()}
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <div className="flex gap-1 ">
                                    <span className="text-lg">
                                        {price.toLocaleString()}
                                    </span>
                                    <span>
                                        <TomanIcon />
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <span className="w-full h-[1px] flex bg-overlay" />
            </div>
        </div>
    );
}
