import config from "./next-i18next.config.js";
import path from "path";
import { fileURLToPath } from "url";

// Convert the import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com"],
    },
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@app": path.resolve(__dirname, "src/app"),
            "@data": path.resolve(__dirname, "src/data"),
            "@contexts": path.resolve(__dirname, "src/contexts"),
            "@components": path.resolve(__dirname, "src/components"),
        };
        return config;
    },
};

export default nextConfig;
