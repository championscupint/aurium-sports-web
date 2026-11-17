import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/football-club/vision-mission",
        destination: "/football-club#vision-mission",
        permanent: false,
      },
      {
        source: "/football-club/player-pathway",
        destination: "/football-club#player-pathway",
        permanent: false,
      },
      {
        source: "/football-club/first-team",
        destination: "/football-club#first-team",
        permanent: false,
      },
      {
        source: "/football-club/news",
        destination: "/football-club#news",
        permanent: false,
      },
      {
        source: "/football-club/partnerships",
        destination: "/football-club#partnerships",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
