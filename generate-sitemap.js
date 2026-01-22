import { Sitemap } from 'sitemap';
import { writeFileSync } from 'fs';
import { blogMetadata } from './src/blogs/metadata.js';

// Static routes from main.jsx
const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/customer-success', changefreq: 'monthly', priority: 0.8 },
  { url: '/insights', changefreq: 'weekly', priority: 0.9 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/s4-access-architecture-design', changefreq: 'monthly', priority: 0.7 },
  { url: '/careers', changefreq: 'monthly', priority: 0.7 },
  { url: '/sap-access-management-review', changefreq: 'monthly', priority: 0.7 },
  { url: '/sod-strategy-approach', changefreq: 'monthly', priority: 0.7 },
  { url: '/sap-access-management-automation', changefreq: 'monthly', priority: 0.7 },
  { url: '/sap-s4-access-implementation', changefreq: 'monthly', priority: 0.7 },
  { url: '/sod-role-redesign', changefreq: 'monthly', priority: 0.7 },
  { url: '/reorganisation-ma-projects', changefreq: 'monthly', priority: 0.7 },
  { url: '/outsourced-access-management', changefreq: 'monthly', priority: 0.7 },
  { url: '/authorisation-concept-owner', changefreq: 'monthly', priority: 0.7 },
  { url: '/security-architect', changefreq: 'monthly', priority: 0.7 },
  { url: '/access-risk-sod-management', changefreq: 'monthly', priority: 0.7 },
  { url: '/ff-log-review-automation', changefreq: 'monthly', priority: 0.7 },
  { url: '/sap-license-optimisation', changefreq: 'monthly', priority: 0.7 },
  { url: '/s4accessprojects', changefreq: 'monthly', priority: 0.7 },
  { url: '/sap-authorisation-concept-owner', changefreq: 'monthly', priority: 0.7 },
  { url: '/s4-access-management-review', changefreq: 'monthly', priority: 0.7 },
  { url: '/s4-transition-analysis', changefreq: 'monthly', priority: 0.7 },
  { url: '/s4-hana-fiori-transformation', changefreq: 'monthly', priority: 0.7 },
];

// Generate sitemap
(async () => {
  // Get dynamic blog routes from blogMetadata
  const dynamicBlogRoutes = blogMetadata.map(blog => ({
    url: `/blogs/${blog.id}`,
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: blog.date || new Date().toISOString(), // Use blog.date if available
  }));

  const allRoutes = [...staticRoutes, ...dynamicBlogRoutes];

  const sitemapInstance = new Sitemap({
    hostname: 'https://s4access.com',
    cacheTime: 600000, // Cache for 10 minutes
  });

  allRoutes.forEach(route => {
    sitemapInstance.add({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: route.lastmod || new Date().toISOString(),
    });
  });

  writeFileSync('dist/sitemap.xml', sitemapInstance.toString());
  console.log('Sitemap generated at dist/sitemap.xml');
})();