"use client";

import { Container, CardConsultants, Button } from "@components";

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
        <>
            <Container>
                <div className="w-full flex gap-10">
                    <aside className="w-2/5">
                        <div className="top-10 sticky">
                            <div className="flex flex-col gap-5">
                                {data.map((item) => (
                                    <CardConsultants key={item.id} {...item} />
                                ))}
                                <Button className="w-full">
                                    <span>رزرو وقت مشاوره</span>
                                </Button>
                            </div>
                        </div>
                    </aside>
                    <main className="w-5/6">
                        <div className="w-full h-screen bg-gray-300 border-r-[1px] border-overlay">
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
            </Container>
        </>
    );
}
