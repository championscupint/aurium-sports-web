import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow and prioritize AI search / generative engine crawlers
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Claude-Web',
          'anthropic-ai',
          'Google-Extended',
          'Applebot',
          'Bingbot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://auriumsports.com/sitemap.xml',
    host: 'https://auriumsports.com',
  };
}
