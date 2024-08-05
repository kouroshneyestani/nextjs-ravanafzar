"use client";

import { quizzes } from "@data";
import { Container, CardQuiz } from "@components";

export default function Page() {
    return (
        <>
            <main className="w-full">
                <Container>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
                        {quizzes.map((item) => (
                            <div className="-mb-1" key={item.id}>
                                <CardQuiz {...item} />
                            </div>
                        ))}
                    </div>
                </Container>
            </main>
        </>
    );
}
