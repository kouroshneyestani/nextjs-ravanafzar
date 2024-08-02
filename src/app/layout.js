"use client"; // This directive marks the file as a Client Component

import { appWithTranslation } from "next-i18next";

// Import styles
import "./globals.css";

function RootLayout({ children }) {
    const lng = "fa";
    const dir = "rtl";

    return (
        <html lang={lng}>
            <body dir={dir}>{children}</body>
        </html>
    );
}

export default appWithTranslation(RootLayout);
