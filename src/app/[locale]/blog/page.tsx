import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { getAllPosts } from '@/lib/mdx'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isFr = locale === 'fr'
  return {
    title: isFr
      ? 'Blog — Conseils et normes | Kleston'
      : 'Blog — Advice and Standards | Kleston',
    description: isFr
      ? "Articles d'expertise sur les normes, l'accessibilité et les systèmes de protection architecturale au Québec."
      : 'Expert articles on standards, accessibility, and architectural protection systems in Quebec.',
    alternates: {
      canonical: `https://kleston.ca/${locale}/blog`,
      languages: {
        'fr-CA': 'https://kleston.ca/fr/blog',
        'en-CA': 'https://kleston.ca/en/blog',
      },
    },
    openGraph: {
      title: isFr ? 'Blog Kleston — Conseils et normes' : 'Kleston Blog — Advice and Standards',
      description: isFr
        ? "Articles d'expertise sur les normes, l'accessibilité et la protection architecturale au Québec."
        : 'Expert articles on standards, accessibility, and architectural protection in Quebec.',
      url: `https://kleston.ca/${locale}/blog`,
      images: [{ url: 'https://kleston.ca/images/og/kleston-og.jpg', width: 1200, height: 630 }],
    },
  }
}

function BlogPageContent({ locale }: { locale: string }) {
  const t = useTranslations('blog')
  const posts = getAllPosts(locale as 'fr' | 'en')

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <div className="bg-[#1E1E1E] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SectionLabel label={t('label')} light />
          <h1 className="font-condensed font-black text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.9] tracking-tight mt-4 max-w-2xl">
            {t('title')}
          </h1>
          <p className="font-body text-[#B0B2B5] text-lg mt-6 max-w-xl">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group flex flex-col bg-white border border-[#E0E0DE] hover:border-[#FF5C00] p-8 transition-all duration-300"
            >
              <span className="font-condensed font-semibold text-xs tracking-[0.2em] uppercase text-[#FF5C00] mb-4">
                {post.category}
              </span>
              <span className="font-condensed font-black text-6xl text-[#F0F0EE] leading-none mb-4 group-hover:text-[#FF5C00]/10 transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="font-condensed font-bold text-lg uppercase tracking-wide text-[#1A1A1A] leading-tight mb-auto group-hover:text-[#FF5C00] transition-colors duration-200">
                {post.title}
              </h2>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E0E0DE]">
                <span className="flex items-center gap-1.5 font-body text-xs text-[#7A7A7A]">
                  <Clock size={12} />
                  {post.readTime} {t('min_read')}
                </span>
                <span className="font-condensed font-bold text-xs tracking-wider uppercase text-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                  {t('read_more')} <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <BlogPageContent locale={locale} />
}
