import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { Clock, ArrowRight, Calendar } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { getAllPosts } from '@/lib/mdx'
import { BLOG_IMAGES, BLOG_IMAGE_FALLBACK } from '@/lib/blog-images'

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

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations('blog')
  const posts = getAllPosts(locale as 'fr' | 'en')

  return (
    <main className="min-h-screen bg-[#F5F1EA]">
      <PageHero
        label={t('label')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      {/* Articles grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {posts.length === 0 ? (
          <p className="font-body text-[#4A4A4A] text-base">
            {locale === 'fr' ? 'Aucun article pour le moment.' : 'No articles yet.'}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {posts.map((post) => {
              const img = BLOG_IMAGES[post.slug] ?? BLOG_IMAGE_FALLBACK
              const formattedDate = new Date(post.date).toLocaleDateString(
                locale === 'fr' ? 'fr-CA' : 'en-CA',
                { year: 'numeric', month: 'short', day: 'numeric' },
              )
              return (
                <article
                  key={post.slug}
                  className="bg-white border border-[#E0E0DE] group overflow-hidden flex flex-col hover:border-[#FF5C00] transition-colors duration-300"
                >
                  {/* Cover image */}
                  <Link href={`/${locale}/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden shrink-0">
                    <Image
                      src={img}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </Link>

                  {/* Body */}
                  <div className="p-7 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#FF5C00]">
                        {post.category}
                      </span>
                      <span className="block w-1 h-1 bg-[#B0B2B5]" />
                      <span className="flex items-center gap-1.5 font-body text-xs text-[#4A4A4A]">
                        <Clock size={11} />
                        {post.readTime} {t('min_read')}
                      </span>
                    </div>

                    <Link href={`/${locale}/blog/${post.slug}`}>
                      <h2 className="font-condensed font-black text-[22px] uppercase tracking-tight text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#FF5C00] transition-colors">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="font-body text-[14px] text-[#4A4A4A] leading-relaxed mb-5 line-clamp-2 flex-1">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between pt-5 border-t border-[#E0E0DE] mt-auto">
                      <span className="flex items-center gap-1.5 font-body text-xs text-[#4A4A4A]">
                        <Calendar size={11} />
                        {formattedDate}
                      </span>
                      <Link
                        href={`/${locale}/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#FF5C00] transition-colors"
                      >
                        {t('read_more')}
                        <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
