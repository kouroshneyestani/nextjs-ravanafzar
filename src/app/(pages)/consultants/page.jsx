"use client";

import Link from "next/link";
import { consultants } from "@data";
import { CardConsultants } from "@components";

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
                        <CardConsultants key={item.id} {...item} />
                    ))}
                </div>
            </main>
        </>
    );
}
