import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add alias for @/ to resolve to the src directory
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    
    return config;
  },
};

export default nextConfig;
