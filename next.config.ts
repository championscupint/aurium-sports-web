import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      // 1. Canonical Domain Migration: 301 Redirect old domain (theauriumacademy.com / www.theauriumacademy.com)
      // to https://www.auriumsports.com while preserving the exact URL path.
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "theauriumacademy.com",
          },
        ],
        destination: "https://www.auriumsports.com/:path*",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.theauriumacademy.com",
          },
        ],
        destination: "https://www.auriumsports.com/:path*",
        statusCode: 301,
      },
      // 2. Legacy / Alternate Path 301 Redirects to Canonical Aurium Sports Routes
      {
        source: "/programmes",
        destination: "/programs",
        statusCode: 301,
      },
      {
        source: "/our-programs",
        destination: "/programs",
        statusCode: 301,
      },
      {
        source: "/about-us",
        destination: "/about",
        statusCode: 301,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        statusCode: 301,
      },
      {
        source: "/locations",
        destination: "/schedule",
        statusCode: 301,
      },
      {
        source: "/academy",
        destination: "/services/academy",
        statusCode: 301,
      },
      {
        source: "/school-programs",
        destination: "/services/school-programs",
        statusCode: 301,
      },
      {
        source: "/training-camps",
        destination: "/camps",
        statusCode: 301,
      },
      {
        source: "/international-tours",
        destination: "/services/international",
        statusCode: 301,
      },
      {
        source: "/tournaments-leagues",
        destination: "/tournaments",
        statusCode: 301,
      },
      {
        source: "/sports-for-mental-health",
        destination: "/mental-health",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
