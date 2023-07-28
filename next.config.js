/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')
const { createSearchIndex } = require('./src/features/search/index.js')

// import { withContentlayer } from 'next-contentlayer'
// import { createSearchIndex } from './src/features/search/index.js'

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    domains: ['img.youtube.com', 'i3.ytimg.com', 'localhost'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      createSearchIndex()
    }

    return config
  },
}

module.exports = withContentlayer(nextConfig)

// export default withContentlayer(nextConfig)
