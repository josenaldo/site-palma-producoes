/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    domains: ['img.youtube.com', 'i3.ytimg.com'],
  },
}

module.exports = nextConfig
