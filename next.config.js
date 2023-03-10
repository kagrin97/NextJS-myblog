/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const withContentlayerSettings = withContentlayer({});

const nextConfig = withPWA(withContentlayerSettings);

module.exports = nextConfig;
