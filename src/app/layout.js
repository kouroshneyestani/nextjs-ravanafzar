"use client"; // This directive marks the file as a Client Component

import { usePathname } from "next/navigation";
import { Header1, Footer1, SpaceBar } from "@components";

// Import styles
import "./globals.css";
import "../assets/css/fonts.css";

function RootLayout({ children }) {
    const lng = "fa";
    const dir = "rtl";

    const pathname = usePathname();
    const condition = !(
        pathname.startsWith("/quizzes/") && pathname.split("/").length === 3
    );

    return (
        <html lang={lng} dir={dir}>
            <body className="font-1">
                {condition ? (
                    <>
                        <Header1 />
                        <div>
                            <SpaceBar pt={null} />
                            <div className="flex flex-col md:flex-row gap-8">
                                {children}
                            </div>
                            <SpaceBar pt={null} />
                        </div>
                        <Footer1 />
                    </>
                ) : (
                    children
                )}
            </body>
        </html>
    );
}

export default RootLayout;
