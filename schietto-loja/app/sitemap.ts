import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/contact'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacidade`,
      lastModified: new Date('2026-11-09'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
