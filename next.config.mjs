const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint during build
  },
  // Custom webpack configuration can be added here if needed
  // webpack: (config, { webpack }) => {
  //   // Custom webpack configuration here
  //   return config;
  // },
  env: {
    BACKEND_URL: process.env.BACKEND_URL, // Example environment variable
  },
  headers: async () => {
    return [
      {
        source: "/path",
        headers: [
          {
            key: "x-custom-header",
            value: "value",
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/old-path",
        destination: "/new-path",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
