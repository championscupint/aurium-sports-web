import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { site } from '@/data/site';

// Verified git modification dates (YYYY-MM-DD) for public routes.
// Avoids assigning dynamic new Date() on every request.
const ROUTE_LAST_MODIFIED: Record<string, string> = {
  '/': '2026-11-09',
  '/programs': '2026-11-09',
  '/about': '2026-11-09',
  '/mental-health': '2026-11-09',
  '/camps': '2026-11-09',
  '/schedule': '2026-11-09',
  '/safeguarding': '2026-11-09',
  '/tournaments': '2026-11-09',
  '/partners': '2026-11-09',
  '/announcements': '2026-11-09',
  '/become-a-trainer': '2026-11-09',
  '/contact': '2026-11-09',
};

const SERVICE_LAST_MODIFIED = '2026-11-09';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url; // https://www.auriumsports.com

  const staticRoutes: MetadataRoute.Sitemap = Object.entries(
    ROUTE_LAST_MODIFIED
  ).map(([route, lastModified]) => ({
    url: route === '/' ? baseUrl : `${baseUrl}${route}`,
    lastModified,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: SERVICE_LAST_MODIFIED,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
