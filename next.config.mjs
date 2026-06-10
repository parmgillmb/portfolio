/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a fully static site in `out/` for static hosts (Cloudflare Pages).
  output: "export",
  // Static hosts resolve folder/index.html most reliably with trailing slashes.
  trailingSlash: true,
  images: {
    // Required for static export: serve the source images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
