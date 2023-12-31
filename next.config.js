/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
      },
      {
        hostname: 'media.graphassets.com',
      },
      {
        hostname: 'github.com',
      },
    ],
  },
}

module.exports = nextConfig
