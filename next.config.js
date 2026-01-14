/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: If using API routes, static export should be removed
  // output: 'export',  // Disabled because app/api/contact/route.ts is present

  // If static export is needed in future, remove API routes and use this instead
  // images: {
  //   unoptimized: true,
  // },
  // trailingSlash: true,

  // React Strict Mode (recommended for development)
  reactStrictMode: true,

  // Supported page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // ⚠ Remove the `experimental.appDir` key. The `app` directory is now stable and enabled by default.

  // ⚠ Headers won't work with `output: 'export'`. Remove or comment out the `headers` function if you're using static exports.
  // async headers() { ... },

  // ⚠ Turbopack is now the default. If you need webpack, add this:
  webpack: (config, { dev, isServer }) => {
    // Custom webpack config (if needed)
    return config;
  },

  // Add this to silence the Turbopack warning (if you don't need custom webpack config)
  turbopack: {},
};

module.exports = nextConfig;
