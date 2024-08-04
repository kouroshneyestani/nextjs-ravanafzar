"use client";

import Link from "next/link";
import { quizzes } from "@data";
import { CardQuiz } from "@components";

export default function Page() {
    return (
        <>
            <main className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {quizzes.map((item) => (
                        <CardQuiz key={item.id} {...item} />
                    ))}
                </div>
            </main>
        </>
    );
}
