const { version } = require('./package.json');
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",

    images: { unoptimized: true,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'spadegrowth.com',
                port: '',
                pathname: '/**',
            },
        ], }
}

module.exports = nextConfig
