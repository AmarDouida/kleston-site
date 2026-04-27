import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/produits': {
      fr: '/produits',
      en: '/products',
    },
    '/produits/[categorie]': {
      fr: '/produits/[categorie]',
      en: '/products/[categorie]',
    },
    '/services': '/services',
    '/a-propos': {
      fr: '/a-propos',
      en: '/about',
    },
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/contact': '/contact',
    '/politique-confidentialite': {
      fr: '/politique-confidentialite',
      en: '/privacy-policy',
    },
  },
})
