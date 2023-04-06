/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://mbti.pinodev.shop:8080/:path*',
      },
    ]
  },
}

module.exports = nextConfig
