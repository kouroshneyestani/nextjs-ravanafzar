import { consultants, quizzes } from "@data";
import { Container, CardConsultants, CardQuiz } from "@components";

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-48">
                <section className="w-full flex flex-col gap-24">
                    <header>
                        <Container>
                            <h2 className="text-4xl font-bold">
                                برترین مشاورین
                            </h2>
                        </Container>
                    </header>
                    <Container>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {consultants.map((item) => (
                                <CardConsultants key={item.id} {...item} />
                            ))}
                        </div>
                    </Container>
                </section>
                <section className="w-full flex flex-col gap-24">
                    <header>
                        <Container>
                            <h2 className="text-4xl font-bold">
                                تست های روان شناسی
                            </h2>
                        </Container>
                    </header>
                    <Container>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {quizzes.map((item) => (
                                <CardQuiz key={item.id} {...item} />
                            ))}
                        </div>
                    </Container>
                </section>
            </div>
        </>
    );
}
