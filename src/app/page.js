import Image from "next/image";
import { consultants, quizzes } from "@data";
import { Container, CardConsultants, CardQuiz } from "@components";

export default function Home() {
    return (
        <>
            <div className="w-full flex flex-col gap-24">
                <section className="w-full">
                    <Container>
                        <div className="w-full relative pt-[40%] rounded-default bg-overlay">
                            {/* <Image
                                fill
                                objectFit="cover"
                                className="rounded-default"
                                src="/images/hero/hero.jpg"
                            /> */}
                        </div>
                    </Container>
                </section>
                <section className="w-full flex flex-col gap-24">
                    <header>
                        <Container>
                            <h2 className="text-4xl font-bold">
                                برترین مشاورین
                            </h2>
                        </Container>
                    </header>
                    <Container>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
                            {consultants.map((item) => (
                                <div className="-mb-1" key={item.id}>
                                    <CardConsultants {...item} />
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
                <section className="w-full">
                    <Container>
                        <div className="flex items-center gap-5">
                            <div className="w-3/4 pt-[35%] rounded-default overflow-hidden relative bg-blue-600">
                                <Image
                                    fill
                                    objectFit="cover"
                                    src="/images/hero/hero-1.jpg"
                                />
                            </div>
                            <div className="w-1/3 flex flex-col gap-5">
                                <div className="pt-[55%] rounded-default overflow-hidden relative bg-red-300">
                                    <Image
                                        fill
                                        objectFit="cover"
                                        src="/images/hero/hero-2.jpg"
                                    />
                                </div>
                                <div className="pt-[55%] rounded-default overflow-hidden relative bg-red-300">
                                    <Image
                                        fill
                                        objectFit="cover"
                                        src="/images/hero/hero-3.jpg"
                                    />
                                </div>
                            </div>
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
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
                            {quizzes.map((item) => (
                                <div className="-mb-1" key={item.id}>
                                    <CardQuiz {...item} />
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            </div>
        </>
    );
}
