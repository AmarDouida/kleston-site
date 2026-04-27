import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Analytics } from '@vercel/analytics/react'
import { routing } from '@/lib/i18n/routing'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { CustomCursor } from '@/components/ui/CustomCursor'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

function getJsonLd(locale: string) {
  const isFr = locale === 'fr'
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://kleston.ca',
    name: 'Kleston',
    description: isFr
      ? 'Spécialiste québécois en systèmes de protection murale, mains courantes et sécurité architecturale certifiés CE et ISO 9001.'
      : 'Quebec specialist in CE and ISO 9001 certified wall protection systems, handrails and architectural safety.',
    url: `https://kleston.ca/${locale}`,
    telephone: '+15145508823',
    email: 'info@kleston.ca',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Montréal',
      addressRegion: 'QC',
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'State',
      name: 'Quebec',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isFr ? 'Produits Kleston' : 'Kleston Products',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: isFr ? 'Mains courantes' : 'Handrails',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: isFr ? 'Protection murale' : 'Wall Protection',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: isFr ? 'Barrières et garde-corps' : 'Barriers and Guardrails',
          },
        },
      ],
    },
    sameAs: [
      'https://www.linkedin.com/company/kleston',
    ],
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound()
  }

  const messages = await getMessages()
  const jsonLd = getJsonLd(locale)

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CustomCursor />
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      <CookieBanner />
      <Analytics />
    </NextIntlClientProvider>
  )
}
