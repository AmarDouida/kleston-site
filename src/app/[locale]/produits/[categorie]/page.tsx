import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { getProduitBySlug, getAllProduits } from '@/lib/mdx'

export async function generateStaticParams() {
  const produits = getAllProduits()
  return ['fr', 'en'].flatMap((locale) =>
    produits.map((p) => ({ locale, categorie: p.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; categorie: string }>
}): Promise<Metadata> {
  const { locale, categorie } = await params
  const produit = getProduitBySlug(categorie)
  if (!produit) return {}

  const isFr = locale === 'fr'
  const title = isFr ? produit.titleFr : produit.titleEn
  const description = isFr ? produit.descriptionFr : produit.descriptionEn

  return {
    title: `${title} | Kleston`,
    description,
    alternates: {
      canonical: `https://kleston.ca/${locale}/${locale === 'fr' ? 'produits' : 'products'}/${categorie}`,
      languages: {
        'fr-CA': `https://kleston.ca/fr/produits/${categorie}`,
        'en-CA': `https://kleston.ca/en/products/${categorie}`,
      },
    },
  }
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-condensed font-black text-2xl md:text-3xl uppercase tracking-tight text-[#1A1A1A] mt-10 mb-5 leading-tight"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-condensed font-bold text-lg uppercase tracking-wide text-[#1A1A1A] mt-6 mb-3"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-body text-[#4A4A4A] text-base leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="font-body text-[#4A4A4A] text-base leading-relaxed mb-4 list-disc pl-6 space-y-1" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-[#1A1A1A]" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse font-body text-sm" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="font-condensed font-bold text-xs uppercase tracking-wider text-white bg-[#1A1A1A] px-4 py-2 text-left" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-2 border-b border-[#E0E0DE] text-[#4A4A4A]" {...props} />
  ),
}

export default async function ProduitPage({
  params,
}: {
  params: Promise<{ locale: string; categorie: string }>
}) {
  const { locale, categorie } = await params
  const produit = getProduitBySlug(categorie)

  if (!produit) notFound()

  const isFr = locale === 'fr'
  const title = isFr ? produit.titleFr : produit.titleEn
  const description = isFr ? produit.descriptionFr : produit.descriptionEn
  const applications = isFr ? produit.applications.fr : produit.applications.en

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-[#1E1E1E] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <Link
            href={`/${locale}/${isFr ? 'produits' : 'products'}`}
            className="inline-flex items-center gap-2 font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#B0B2B5] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            {isFr ? 'Tous les produits' : 'All products'}
          </Link>

          <h1 className="font-condensed font-black text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.9] tracking-tight mb-6">
            {title}
          </h1>
          <p className="font-body text-[#B0B2B5] text-lg max-w-2xl">
            {description}
          </p>

          {/* Certs */}
          <div className="flex flex-wrap gap-3 mt-8">
            {produit.certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 border border-[#FF5C00]/40 text-[#FF5C00] font-condensed font-bold text-xs tracking-wider uppercase px-3 py-1.5"
              >
                <ShieldCheck size={12} />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          <MDXRemote source={produit.content} components={mdxComponents} />
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Matériaux */}
          <div className="bg-white border border-[#E0E0DE] p-8">
            <h3 className="font-condensed font-black text-lg uppercase tracking-tight text-[#1A1A1A] mb-5">
              {isFr ? 'Matériaux' : 'Materials'}
            </h3>
            <ul className="space-y-3">
              {produit.materials.map((mat) => (
                <li key={mat} className="flex items-start gap-2 font-body text-sm text-[#4A4A4A]">
                  <CheckCircle2 size={14} className="text-[#FF5C00] mt-0.5 shrink-0" />
                  {mat}
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div className="bg-white border border-[#E0E0DE] p-8">
            <h3 className="font-condensed font-black text-lg uppercase tracking-tight text-[#1A1A1A] mb-5">
              {isFr ? 'Applications' : 'Applications'}
            </h3>
            <ul className="space-y-3">
              {applications.map((app) => (
                <li key={app} className="flex items-start gap-2 font-body text-sm text-[#4A4A4A]">
                  <CheckCircle2 size={14} className="text-[#FF5C00] mt-0.5 shrink-0" />
                  {app}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#FF5C00] p-8">
            <h3 className="font-condensed font-black text-xl uppercase tracking-tight text-white mb-3">
              {isFr ? 'Demander un devis' : 'Request a quote'}
            </h3>
            <p className="font-body text-white/80 text-sm mb-6">
              {isFr
                ? 'Réponse sous 24h. Livraison partout au Québec.'
                : 'Response within 24h. Delivery across Quebec.'}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-white text-[#FF5C00] hover:bg-[#1E1E1E] hover:text-white font-condensed font-bold text-sm tracking-[0.15em] uppercase px-6 py-3 transition-all duration-200"
            >
              {isFr ? 'Nous contacter' : 'Contact us'}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
