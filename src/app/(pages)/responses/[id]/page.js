"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
    Container,
    ClockIcon,
    BarChartIcon,
    ProfileIcon,
    SettingsIcon,
} from "@components";

const Profile = ({ className }) => {
    const ProfileMenu = () => {
        const data = [
            {
                text: "پروفایل",
                href: `&quot;`,
                icon: <ProfileIcon />,
            },
            {
                text: "تنظیمات",
                href: `&quot;`,
                icon: <SettingsIcon />,
            },
            {
                text: "محصولات",
                href: `&quot;`,
                icon: <BarChartIcon />,
            },
        ];

        return (
            <ul className="flex flex-col gap-3 py-5">
                {data.map((item, index) => (
                    <li key={index}>
                        <div className="flex items-center gap-5 px-5">
                            <div className="flex gap-3 items-center">
                                {item.icon}
                                {item.text}
                            </div>
                            <span className="w-full h-[1px] bg-overlay" />
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className={className}>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 relative  overflow-hidden rounded-default">
                        <Image
                            fill
                            alt="alt"
                            src="/images/consultants/avatar-1.jpg"
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        <h3 className="text-xl font-bold hover:text-primary transition-colors duration-100">
                            کوروش نیستانی
                        </h3>
                        <p>09196965764</p>
                    </div>
                </div>
                <div className="pt-3 pb-3">
                    <div className="flex items-center justify-around gap-10 text-sm">
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <ClockIcon width={15} height={15} />
                                    <span className="flex gap-1">
                                        <span>240</span>
                                        <span>دقیقه</span>
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <BarChartIcon width={15} height={15} />
                                    <span className="flex gap-1">
                                        <span>22</span>
                                        <span>پرسش</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span className="w-[1px] h-10 flex bg-overlay" />
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <ClockIcon width={15} height={15} />
                                    <span className="flex gap-1">
                                        <span>240</span>
                                        <span>دقیقه</span>
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <BarChartIcon width={15} height={15} />
                                    <span className="flex gap-1">
                                        <span>22</span>
                                        <span>پرسش</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="w-full h-[1px] flex bg-overlay" />
                <ProfileMenu />
            </div>
        </div>
    );
};

export default function Page() {
    const searchParams = useSearchParams();
    const result = searchParams.get("result");

    // Safely parse the result if it's present and handle potential errors
    let parsedResult = null;
    if (result) {
        try {
            parsedResult = JSON.parse(result);
        } catch (error) {
            console.error("Error parsing JSON from result:", error);
            parsedResult = null; // or set to some default value
        }
    }

    const list = ["آیتم جدید", "آیتم جدید", "آیتم جدید"];
    const list2 = [
        "عدم علاقه به مقررات و قوانین شدید",
        "دشواری در تصمیم گیری صحیح در برخی موارد",
        "بی علاقگی در سازمان دهی و آمادگی قبلی در کارها",
    ];

    return (
        <div className="w-full">
            <Container>
                <div className="flex gap-10">
                    <div className="w-3/12">
                        <Profile className="top-10 sticky" />
                    </div>
                    <div className="w-9/12">
                        <div className="flex flex-col gap-10 border-r-[1px] border-overlay">
                            <div className="flex flex-col gap-10 text-xl px-10">
                                <h2 className="text-3xl font-bold">
                                    تست شخصیت شناسی MBTI
                                </h2>
                                <p>
                                    شما با موفقیت تست MBTI را انجام داده‌اید.
                                    نتایج اختصاصی شما در بخش‌های مختلف تنظیم شده
                                    است. می‌توانید برای مشاهده و بررسی تفسیر
                                    خود، با استفاده از دکمه‌ی بعدی بین صفحات
                                    جابه جا شوید.
                                </p>
                                <TagList data={list} />
                                <BulletList data={list2} />
                                <BadgeList data={list} />
                                <PersonalityType />
                                <ProgressBar
                                    startPoint={25}
                                    startTitle="قضاوتی"
                                    endPoint={75}
                                    endTitle="ادراکی"
                                />
                                <BloqeQuote
                                    author="«هریسون فورد»"
                                    quote="من می خواستم زندگی کنم، یک زندگی متفاوت. نمی خواستم هر روز به یک مکان بروم و همان افراد را ببینم و همان کار را انجام دهم. من خواستار چالش های شگفت انگیز بودم."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {parsedResult ? (
                    <div>
                        {/* Render your result here */}
                        <p>Result: {JSON.stringify(parsedResult)}</p>
                    </div>
                ) : (
                    <p>No result data found or error parsing data.</p>
                )}
            </Container>
        </div>
    );
}

const TagList = ({ data }) => {
    return (
        <ul className="-mx-1">
            {data?.map((item, index) => (
                <li
                    className="text-sm inline-block px-4 py-2 rounded-default bg-overlay mx-1"
                    key={index}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

const BulletList = ({ data }) => {
    return (
        <ul className="flex flex-col gap-3">
            {data?.map((item, index) => (
                <li className="rounded-default" key={index}>
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span>{item}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

const Badge = ({ text, prefix, className }) => {
    return (
        <div
            className={`p-2 rounded-full bg-overlay gap-2 inline-flex items-center ${className}`}
        >
            {prefix && (
                <span className="w-8 h-8 bg-primary text-white text-xs font-bold flex items-center justify-center rounded-full">
                    {prefix}
                </span>
            )}
            <span className="inline-flex text-sm ml-2">{text}</span>
        </div>
    );
};

const BadgeList = ({ data }) => {
    return (
        <ul className="-m-1">
            {data?.map((item, index) => (
                <Badge key={index} text={item} prefix="75%" className="m-1" />
            ))}
        </ul>
    );
};

const PersonalityType = () => {
    const data = [
        {
            text: "سیاستمداران",
            image: "/images/personality-types/1.svg",
        },
        {
            text: "جستجوگران",
            image: "/images/personality-types/2.svg",
        },
        {
            text: "امنیت طلب ها",
            image: "/images/personality-types/3.svg",
        },
        {
            text: "تحلیل گران",
            image: "/images/personality-types/4.svg",
        },
    ];

    return (
        <ul className="flex flex-items-center justify-between gap-5 text-center">
            {data?.map((item, index) => (
                <li key={index} className="w-full">
                    <div
                        className={`w-full inline-flex flex-col gap-5 items-center justify-center rounded-default border-2 border-overlay p-4 ${index === 1 && "fill-primary text-primary border-primary"}`}
                    >
                        <Image src={item.image} alt="" width="60" height="60" />
                        <span>{item.text}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

const ProgressBar = ({ startPoint, startTitle, endPoint, endTitle }) => {
    let calculateHeight = "0";

    if (startPoint && endPoint) {
        calculateHeight = "h-44 items-center";
    } else if (!startPoint) {
        calculateHeight = "h-24 items-start";
    } else if (!endPoint) {
        calculateHeight = "h-24 items-end";
    }

    return (
        <div className={`w-full flex relative  ${calculateHeight}`}>
            <span className="left-0 bottom-0 w-full h-2 bg-overlay rounded-default" />
            {startPoint && (
                <div
                    className="h-3 -mt-3 right-0 absolute bg-primary rounded-default"
                    style={{ width: `${startPoint}%` }}
                >
                    <div className="w-16 h-16 flex flex-col items-center justify-center bottom-8 -left-7 absolute bg-primary text-white rounded-full before:w-[1px] before:h-5 before:bg-gray before:absolute before:top-16 before:-z-0">
                        <span className="text-sm">
                            {startPoint}
                            <small>%</small>
                        </span>
                        <span className="text-xs">{startTitle}</span>
                    </div>
                </div>
            )}
            {endPoint && (
                <div
                    className="h-3 -mb-3 right-0 absolute bg-secondary rounded-default"
                    style={{ width: `${endPoint}%` }}
                >
                    <div className="w-16 h-16 flex flex-col items-center justify-center top-8 -left-7 absolute bg-secondary text-white rounded-full before:w-[1px] before:h-5 before:bg-gray before:absolute before:bottom-16 before:-z-0">
                        <span className="text-sm">
                            {endPoint}
                            <small>%</small>
                        </span>
                        <span className="text-xs">{endTitle}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

const BloqeQuote = ({ author, quote }) => {
    return (
        <div className="flex flex-col gap-5 p-10 rounded-default bg-overlay border-b-4 border-primary">
            {quote && <bloquote>"{quote}"</bloquote>}
            {author && (
                <cite class="flex items-center gap-3 before:w-10 before:h-[2px] before:bg-primary">
                    {author}
                </cite>
            )}
        </div>
    );
};
