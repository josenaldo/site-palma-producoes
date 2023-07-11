/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    domains: ['img.youtube.com', 'i3.ytimg.com', 'localhost'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
}

module.exports = withContentlayer(nextConfig)
