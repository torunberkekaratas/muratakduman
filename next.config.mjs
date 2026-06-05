import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Bu klasörü kök kabul et (üst dizindeki lockfile uyarısını engeller)
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
