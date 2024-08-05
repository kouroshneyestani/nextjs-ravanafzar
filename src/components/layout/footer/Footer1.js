"use client";

import { footerLinks as links } from "@data";
import Link from "next/link";
import { Container, LogoSVG } from "@components";

export default function Footer() {
    const copyright = "© 1403 روان ابزار. تمامی حقوق محفوظ می باشد.";

    return (
        <footer className="flex flex-col gap-20 py-8">
            {/* <div>
                <Container>
                    <div className="flex items-center justify-between">
                        <div>
                            <LogoSVG />
                        </div>
                        <div>
                            <ul className="flex items-center justify-center gap-8">
                                {links.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href}>
                                            <span className="font-bold hover:text-primary">
                                                {item.text}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </div> */}
            <div>
                <Container>
                    <span className="w-full h-[1px] bg-overlay block mb-8" />
                    <div className="flex flex-col items-center gap-5">
                        {copyright && <p className="font-bold">{copyright}</p>}
                    </div>
                </Container>
            </div>
        </footer>
    );
}
