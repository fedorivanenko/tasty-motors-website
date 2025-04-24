import { withNextVideo } from "next-video/process";
import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
}

export default withNextVideo(withPayload(nextConfig, { devBundleServerPackages: false }));