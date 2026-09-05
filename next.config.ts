import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: isProd ? '/pangasinan-heritage-guide' : '',

  assetPrefix: isProd
    ? '/pangasinan-heritage-guide/'
    : '',
};

export default nextConfig;