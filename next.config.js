// next.config.js
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '8800', // your backend port
          pathname: '/uploaded/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  