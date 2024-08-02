"use client"; // This directive marks the file as a Client Component

import { appWithTranslation } from "next-i18next";

// Import styles
import "./globals.css";
import "../assets/css/fonts.css";

function RootLayout({ children }) {
    const lng = "fa";
    const dir = "rtl";

    return (
        <html lang={lng} dir={dir}>
            <body className="font-1">{children}</body>
        </html>
    );
}

export default appWithTranslation(RootLayout);
