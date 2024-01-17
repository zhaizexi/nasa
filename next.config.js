const withSvgr = require('next-plugin-svgr');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'd2pn8kiwq2w21t.cloudfront.net',
        port: '',
      },
    ],
    deviceSizes: [320,768,1440,1600]
  },
}

module.exports =withSvgr(nextConfig)
