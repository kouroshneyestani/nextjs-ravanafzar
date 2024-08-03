/** @type {import('tailwindcss').Config} */
const tailwindRtl = require("tailwindcss-rtl");

module.exports = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--afc-background-color)",
                text: "var(--afc-text-color)",
                primary: "var(--afc-primary-color)",
                secondary: "var(--afc-secondary-color)",
                overlay: "var(--afc-overlay-color)",
                success: "var(--afc-success-color)",
            },
            borderRadius: {
                default: "6px",
            },
            fontFamily: {
                1: ["afc-font-1", "sans-serif"],
                2: ["afc-font-2", "sans-serif"],
                3: ["afc-font-3", "sans-serif"],
                4: ["afc-font-4", "sans-serif"],
            },
        },
    },
    plugins: [tailwindRtl],
};
