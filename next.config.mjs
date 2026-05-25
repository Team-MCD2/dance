import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tempsdance.fr',
      },
    ],
  },
  async rewrites() {
    return [
      { source: '/albums', destination: '/pages/albums.html' },
      { source: '/planning-tarifs', destination: '/pages/planning-tarifs.html' },
      { source: '/livre-d-or', destination: '/pages/livre-d-or.html' },
      { source: '/faq', destination: '/pages/faq.html' },
      { source: '/mentions-legales', destination: '/pages/mentions-legales.html' },
      { source: '/depot-dun-temoignage', destination: '/pages/depot-dun-temoignage.html' },
    ];
  },
};

export default nextConfig;
