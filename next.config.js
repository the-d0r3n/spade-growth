const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        version,
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        minimumCacheTTL: 60,
        domains: [
            `${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`,
            `${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com`,
        ],
    },
    async rewrites() {
        return [
            {
                source: '/admin/:any*',
                destination: '/admin',
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/trap/:slug",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public,max-age=31536000,immutable",
                    },
                ],
            },
            {
                source: "/flag/:slug",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public,max-age=31536000,immutable",
                    },
                ],
            },
            {
                source: "/logo_black.png",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public,max-age=31536000,immutable",
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
