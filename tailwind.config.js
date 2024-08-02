/** @type {import('tailwindcss').Config} */
const tailwindRtl = require("tailwindcss-rtl");

module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
                persian: ["IRANSansWeb", "ui-sans-serif", "system-ui"], // Add Persian font
            },
        },
    },
    plugins: [tailwindRtl],
};
