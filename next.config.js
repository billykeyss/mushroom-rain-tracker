/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Required for leaflet tiles to work in static export
  //   assetPrefix: ".",
};

module.exports = nextConfig;
