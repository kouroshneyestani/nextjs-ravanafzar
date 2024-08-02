"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }) {
    const pathname = usePathname();
    const links = [
        {
            href: "/",
            name: "Home",
        },
        {
            href: "/tests",
            name: "Tests",
        },
        {
            href: "/blog",
            name: "Blog",
        },
    ];

    return (
        <section>
            <header>
                <nav>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className={`${
                                        pathname === link.href && "text-red-600"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {children}
        </section>
    );
}
