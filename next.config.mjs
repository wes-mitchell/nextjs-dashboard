/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: 'incremental',
    },
    reactStrictMode: true,
};

export default nextConfig;
