import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, Clock, User } from 'lucide-react'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'

export async function generateStaticParams() {
  const frPosts = getAllPosts('fr').map((p) => ({ locale: 'fr', slug: p.slug }))
  const enPosts = getAllPosts('en').map((p) => ({ locale: 'en', slug: p.slug }))
  return [...frPosts, ...enPosts]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getPostBySlug(locale as 'fr' | 'en', slug)
  if (!post) return {}

  return {
    title: `${post.title} | Kleston`,
    description: post.description,
    alternates: {
      canonical: `https://kleston.ca/${locale}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-condensed font-black text-3xl md:text-4xl uppercase tracking-tight text-[#1A1A1A] mt-12 mb-6 leading-tight"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-condensed font-bold text-xl uppercase tracking-wide text-[#1A1A1A] mt-8 mb-4"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-body text-[#4A4A4A] text-base leading-relaxed mb-5" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="font-body text-[#4A4A4A] text-base leading-relaxed mb-5 list-disc pl-6 space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="font-body text-[#4A4A4A] text-base leading-relaxed mb-5 list-decimal pl-6 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-[#1A1A1A]" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse font-body text-sm" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="font-condensed font-bold text-xs uppercase tracking-wider text-white bg-[#1A1A1A] px-4 py-3 text-left"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 border-b border-[#E0E0DE] text-[#4A4A4A]" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-[#FF5C00] pl-6 py-2 my-8 font-body text-[#4A4A4A] italic"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[#FF5C00] hover:text-[#E05200] underline transition-colors" {...props} />
  ),
  hr: () => <hr className="border-[#E0E0DE] my-10" />,
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = getPostBySlug(locale as 'fr' | 'en', slug)

  if (!post) notFound()

  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === 'fr' ? 'fr-CA' : 'en-CA',
    { year: 'numeric', month: 'long', day: 'numeric' },
  )

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-[#1E1E1E] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#B0B2B5] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            {locale === 'fr' ? 'Retour au blog' : 'Back to blog'}
          </Link>

          <span className="font-condensed font-semibold text-xs tracking-[0.2em] uppercase text-[#FF5C00] block mb-4">
            {post.category}
          </span>

          <h1 className="font-condensed font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[0.95] tracking-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-[#7A7A7A] font-body text-sm">
            <span className="flex items-center gap-2">
              <User size={14} />
              {post.author}
            </span>
            <span>{formattedDate}</span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {post.readTime} min
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="prose-kleston">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-[#E0E0DE]">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 font-condensed font-bold text-sm tracking-[0.15em] uppercase text-[#FF5C00] hover:text-[#E05200] transition-colors"
          >
            <ArrowLeft size={16} />
            {locale === 'fr' ? 'Tous les articles' : 'All articles'}
          </Link>
        </div>
      </div>
    </main>
  )
}
