import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { trainingLocations } from '@/data/schedule';
import { playerProgrammes } from '@/data/programmes';
import { site } from '@/data/site';

// Verified git modification dates (YYYY-MM-DD) for public routes.
// Avoids assigning dynamic new Date() on every request.
const ROUTE_LAST_MODIFIED: Record<string, string> = {
  '/': '2026-11-26',
  '/programs': '2026-11-26',
  '/about': '2026-11-25',
  '/mental-health': '2026-11-21',
  '/camps': '2026-11-09',
  '/schedule': '2026-11-21',
  '/safeguarding': '2026-11-09',
  '/tournaments': '2026-11-21',
  '/aurium-arena': '2026-11-26',
  '/partners': '2026-11-09',
  '/announcements': '2026-11-09',
  '/become-a-trainer': '2026-11-09',
  '/contact': '2026-11-25',
};

const SERVICE_LAST_MODIFIED = '2026-11-21';
const LOCATION_LAST_MODIFIED = '2026-11-25';
const PROGRAMME_LAST_MODIFIED = '2026-11-26';
const TITANS_LAST_MODIFIED = '2026-11-25';

const AIC_TITANS_ROUTES = [
  '/aic-titans-cup',
  '/aic-titans-cup/about',
  '/aic-titans-cup/competitions',
  '/aic-titans-cup/competitions/type-a',
  '/aic-titans-cup/competitions/type-b',
  '/aic-titans-cup/competitions/type-c',
  '/aic-titans-cup/competitions/type-d',
  '/aic-titans-cup/competitions/clash-of-the-titans',
  '/aic-titans-cup/road-to-the-clash',
  '/aic-titans-cup/experience',
  '/aic-titans-cup/csr',
  '/aic-titans-cup/sponsors',
  '/aic-titans-cup/news',
  '/aic-titans-cup/register',
  '/aic-titans-cup/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url; // https://www.auriumsports.com

  const staticRoutes: MetadataRoute.Sitemap = Object.entries(
    ROUTE_LAST_MODIFIED
  ).map(([route, lastModified]) => ({
    url: route === '/' ? baseUrl : `${baseUrl}${route}`,
    lastModified,
  }));

  const programmeRoutes: MetadataRoute.Sitemap = playerProgrammes.map(
    (prog) => ({
      url: `${baseUrl}/programs/${prog.id}`,
      lastModified: PROGRAMME_LAST_MODIFIED,
    })
  );

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

  const titansRoutes: MetadataRoute.Sitemap = AIC_TITANS_ROUTES.map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: TITANS_LAST_MODIFIED,
    })
  );

  return [
    ...staticRoutes,
    ...programmeRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...titansRoutes,
  ];
}
