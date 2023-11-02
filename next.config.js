/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    // NODE_API: "https://a.theonebureau.design/graphql",
    // NODE_API_LOCAL: "http://localhost:1336/graphql",
    NEXT_PUBLIC_NODE_FRONT: "https://theonebureau.design",
    NEXT_PUBLIC_NODE_BACK: "https://a.theonebureau.design",
    // NODE_ENV: "production",
    // PORT: "10001",
    // BACK_URL: "http://localhost:1336",
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "127.0.0.1",
      },

      {
        hostname: "theonebureau.design",
      },

      {
        hostname: "a.theonebureau.design",
      },

      {
        hostname: "images.unsplash.com",
      },
    ],

    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
