"use client";

import { Container } from "@components";

export default function Footer() {
    const copyright = "© 1403 روان ابزار. تمامی حقوق محفوظ می باشد.";

    return (
        <footer className="flex flex-col gap-20 py-8">
            <div>
                <Container>
                    <span className="w-full h-[1px] bg-overlay block mb-8" />
                    <div className="flex flex-col items-center gap-5">
                        {copyright && <p>{copyright}</p>}
                    </div>
                </Container>
            </div>
        </footer>
    );
}
