/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        ppr: 'incremental',
    },
    reactStrictMode: true,
};

export default nextConfig;
