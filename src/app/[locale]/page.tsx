import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import { HeroSection } from '@/components/home/HeroSection'
import { CredibilityBar } from '@/components/home/CredibilityBar'
import { IntroSection } from '@/components/home/IntroSection'
import { StatsSection } from '@/components/home/StatsSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProductsSection } from '@/components/home/ProductsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { BlogPreviewSection } from '@/components/home/BlogPreviewSection'
import { CTASection } from '@/components/home/CTASection'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isFr = locale === 'fr'
  return {
    title: isFr
      ? 'Kleston — Protection murale et mains courantes au Québec'
      : 'Kleston — Wall Protection and Handrails in Quebec',
    description: isFr
      ? 'Spécialiste québécois en systèmes de protection murale, mains courantes et sécurité architecturale certifiés CE, ISO 9001. Fourniture, installation et entretien partout au Québec.'
      : 'Quebec specialist in CE and ISO 9001 certified wall protection systems, handrails and architectural safety. Supply, installation and maintenance across Quebec.',
    alternates: {
      canonical: `https://kleston.ca/${locale}`,
      languages: {
        'fr-CA': 'https://kleston.ca/fr',
        'en-CA': 'https://kleston.ca/en',
      },
    },
    openGraph: {
      title: isFr
        ? 'Kleston — Votre partenaire en protection architecturale au Québec'
        : 'Kleston — Your architectural protection partner in Quebec',
      description: isFr
        ? 'La conformité livrée et installée.'
        : 'Compliance delivered and installed.',
      url: `https://kleston.ca/${locale}`,
      images: [
        {
          url: 'https://kleston.ca/images/og/kleston-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Kleston',
        },
      ],
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const posts = getAllPosts(locale as 'fr' | 'en').slice(0, 3)

  return (
    <>
      <HeroSection locale={locale} />
      <CredibilityBar />
      <IntroSection locale={locale} />
      <StatsSection />
      <ServicesSection locale={locale} />
      <ProductsSection locale={locale} />
      <TestimonialsSection />
      <BlogPreviewSection locale={locale} posts={posts} />
      <CTASection locale={locale} />
    </>
  )
}
