import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { trainingLocations } from '@/data/schedule';
import { site } from '@/data/site';

// Verified git modification dates (YYYY-MM-DD) for public routes.
// Avoids assigning dynamic new Date() on every request.
const ROUTE_LAST_MODIFIED: Record<string, string> = {
  '/': '2026-11-21',
  '/programs': '2026-11-21',
  '/about': '2026-11-14',
  '/mental-health': '2026-11-21',
  '/camps': '2026-11-09',
  '/schedule': '2026-11-21',
  '/safeguarding': '2026-11-09',
  '/tournaments': '2026-11-21',
  '/partners': '2026-11-09',
  '/announcements': '2026-11-09',
  '/become-a-trainer': '2026-11-09',
  '/contact': '2026-11-09',
};

const SERVICE_LAST_MODIFIED = '2026-11-21';
const LOCATION_LAST_MODIFIED = '2026-11-21';

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

  const locationRoutes: MetadataRoute.Sitemap = trainingLocations.map(
    (loc) => ({
      url: `${baseUrl}/locations/${loc.slug}`,
      lastModified: LOCATION_LAST_MODIFIED,
    })
  );

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
