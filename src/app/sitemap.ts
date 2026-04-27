import { MetadataRoute } from 'next'

const BASE_URL = 'https://kleston.ca'

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

interface SitemapEntry {
  url: string
  lastModified: string
  changeFrequency: ChangeFrequency
  priority: number
  alternates?: {
    languages: Record<string, string>
  }
}

function makeEntry(
  frPath: string,
  enPath: string,
  changeFrequency: ChangeFrequency,
  priority: number,
): SitemapEntry[] {
  return [
    {
      url: `${BASE_URL}/fr${frPath}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          'fr-CA': `${BASE_URL}/fr${frPath}`,
          'en-CA': `${BASE_URL}/en${enPath}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en${enPath}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          'fr-CA': `${BASE_URL}/fr${frPath}`,
          'en-CA': `${BASE_URL}/en${enPath}`,
        },
      },
    },
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...makeEntry('', '', 'weekly', 1.0),
    ...makeEntry('/services', '/services', 'monthly', 0.9),
    ...makeEntry('/produits', '/products', 'monthly', 0.9),
    ...makeEntry('/produits/mains-courantes', '/products/mains-courantes', 'monthly', 0.8),
    ...makeEntry('/produits/protection-murale', '/products/protection-murale', 'monthly', 0.8),
    ...makeEntry('/produits/barrieres-garde-corps', '/products/barrieres-garde-corps', 'monthly', 0.8),
    ...makeEntry('/produits/accessoires-fixation', '/products/accessoires-fixation', 'monthly', 0.8),
    ...makeEntry('/a-propos', '/about', 'monthly', 0.7),
    ...makeEntry('/blog', '/blog', 'weekly', 0.8),
    ...makeEntry('/blog/normes-mains-courantes-quebec', '/blog/handrail-standards-quebec', 'monthly', 0.7),
    ...makeEntry('/blog/protection-murale-hopitaux-chsld', '/blog/wall-protection-hospitals-ltc', 'monthly', 0.7),
    ...makeEntry('/blog/guide-accessibilite-pmr-quebec', '/blog/accessibility-guide-pmr-quebec', 'monthly', 0.7),
    ...makeEntry('/blog/choix-materiaux-mains-courantes', '/blog/handrail-material-selection', 'monthly', 0.7),
    ...makeEntry('/blog/entretien-protection-murale', '/blog/wall-protection-maintenance', 'monthly', 0.7),
    ...makeEntry('/contact', '/contact', 'monthly', 0.8),
    ...makeEntry('/politique-confidentialite', '/privacy-policy', 'yearly', 0.3),
  ]
}
