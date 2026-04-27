import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, Clock } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { PostMeta } from '@/lib/mdx'

interface BlogPreviewSectionProps {
  locale: string
  posts: PostMeta[]
}

export async function BlogPreviewSection({ locale, posts }: BlogPreviewSectionProps) {
  const t = await getTranslations('blog')

  if (posts.length === 0) return null

  return (
    <section className="bg-[#FAFAF8] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel label={t('label')} />
            <h2 className="font-condensed font-black text-5xl md:text-6xl uppercase tracking-tight text-[#1A1A1A] leading-[0.9] mt-4">
              {t('title')}
            </h2>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 font-condensed font-bold text-sm tracking-[0.15em] uppercase text-[#FF5C00] hover:text-[#1A1A1A] transition-colors shrink-0"
          >
            {t('cta')}
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0E0DE]">
          {posts.map((post) => (
            <article key={post.slug} className="bg-[#FAFAF8] group">
              {/* Color bar */}
              <div className="h-1 bg-[#E0E0DE] group-hover:bg-[#FF5C00] transition-colors" />

              <div className="p-8">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#FF5C00]">
                    {post.category}
                  </span>
                  <span className="block w-1 h-1 bg-[#B0B2B5]" />
                  <span className="flex items-center gap-1.5 font-body text-xs text-[#7A7A7A]">
                    <Clock size={11} />
                    {post.readTime} {t('min_read')}
                  </span>
                </div>

                <h3 className="font-condensed font-black text-2xl uppercase tracking-tight text-[#1A1A1A] leading-tight mb-3">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-[#4A4A4A] leading-relaxed mb-6 line-clamp-2">
                  {post.description}
                </p>

                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#FF5C00] transition-colors group-hover:gap-3"
                >
                  {t('read_more')}
                  <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
