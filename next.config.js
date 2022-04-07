/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: '@import "_theme.sass"'
  }
}

module.exports = nextConfig
