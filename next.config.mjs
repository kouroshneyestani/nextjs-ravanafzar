import config from "./next-i18next.config.js";

const { i18n } = config;

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n,
    images: {
        domains: ["images.unsplash.com"],
    },
    reactStrictMode: true,
};

export default nextConfig;
