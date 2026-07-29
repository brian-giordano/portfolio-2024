/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services/site-rescue',
        destination: '/services/website-rescue',
        permanent: true,
      },
      {
        source: '/services/starter',
        destination: '/services/foundation-site',
        permanent: true,
      },
      {
        source: '/services/monthly-care',
        destination: '/services/ongoing-care',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
