"use client";

import { consultants } from "@data";
import { Container, CardConsultants } from "@components";

export default function Page() {
    return (
        <>
            <main className="w-full">
                <Container>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
                        {consultants.map((item) => (
                            <div className="-mb-1" key={item.id}>
                                <CardConsultants {...item} />
                            </div>
                        ))}
                    </div>
                </Container>
            </main>
        </>
    );
}
