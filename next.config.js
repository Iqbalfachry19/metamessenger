/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'links.papareact.com',
      'media-exp1.licdn.com',
      'platform-lookaside.fbsbx.com',
    ],
  },
};
