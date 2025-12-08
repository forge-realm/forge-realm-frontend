import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blush-arrogant-damselfly-457.mypinata.cloud',
        port: '',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: '*.mypinata.cloud',
        port: '',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cryptologos.cc',
        port: '',
        pathname: '/**'
      }
    ],
  },
  // serverExternalPackages: [
  //   'pino',
  //   'thread-stream',
  //   '@walletconnect/ethereum-provider',
  //   '@walletconnect/logger',
  //   '@pushchain/ui-kit'
  // ],
}

export default nextConfig;