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
    openGraph: {
      title: `${title} | Kleston`,
      description,
      url: `https://kleston.ca/${locale}/${isFr ? 'produits' : 'products'}/${categorie}`,
      images: [{ url: 'https://kleston.ca/images/og/kleston-og.jpg', width: 1200, height: 630 }],
    },
  }
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-condensed font-black text-2xl md:text-3xl uppercase tracking-tight text-white mt-10 mb-5 leading-tight"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-condensed font-bold text-lg uppercase tracking-wide text-white mt-6 mb-3"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-body text-[#B0B2B5] text-base leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="font-body text-[#B0B2B5] text-base leading-relaxed mb-4 list-disc pl-6 space-y-1" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-white" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse font-body text-sm" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="font-condensed font-bold text-xs uppercase tracking-wider text-white bg-[#FF5C00] px-4 py-2 text-left" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-2 border-b border-white/[0.08] text-[#B0B2B5]" {...props} />
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    description,
    brand: { '@type': 'Brand', name: 'Kleston' },
    manufacturer: { '@type': 'Organization', name: 'Kleston', url: 'https://kleston.ca' },
    additionalProperty: produit.certifications.map((cert) => ({
      '@type': 'PropertyValue',
      name: 'Certification',
      value: cert,
    })),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Kleston' },
    },
  }

  return (
    <main className="min-h-screen bg-[#141414]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="bg-[#141414] pt-32 pb-16 md:pt-40 md:pb-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <Link
            href={`/${locale}/${isFr ? 'produits' : 'products'}`}
            className="inline-flex items-center gap-2 font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#B0B2B5] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            {isFr ? 'Tous les produits' : 'All products'}
          </Link>

          <h1 className="font-condensed font-black text-[clamp(48px,7vw,80px)] text-white uppercase leading-[0.88] tracking-tight mb-6">
            {title}
          </h1>
          <p className="font-body text-[#B0B2B5] text-lg max-w-2xl leading-relaxed">
            {description}
          </p>

          {/* Certifications */}
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

      {/* Image placeholder */}
      <div className="bg-[#1E1E1E] aspect-[21/6] w-full flex items-center justify-center border-b border-white/[0.06]">
        <span className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-[#4A4A4A]">
          {isFr ? 'Photo produit à venir' : 'Product photo coming soon'}
        </span>
      </div>

      {/* Content grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* MDX content */}
        <div className="lg:col-span-2">
          <MDXRemote source={produit.content} components={mdxComponents} />
        </div>

        {/* Sidebar */}
        <div className="space-y-1">
          {/* Materials */}
          <div className="bg-[#1E1E1E] border border-white/[0.08] p-8">
            <h3 className="font-condensed font-black text-lg uppercase tracking-tight text-white mb-5">
              {isFr ? 'Matériaux' : 'Materials'}
            </h3>
            <ul className="space-y-3">
              {produit.materials.map((mat) => (
                <li key={mat} className="flex items-start gap-2 font-body text-sm text-[#B0B2B5]">
                  <CheckCircle2 size={14} className="text-[#FF5C00] mt-0.5 shrink-0" />
                  {mat}
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div className="bg-[#1E1E1E] border border-white/[0.08] p-8">
            <h3 className="font-condensed font-black text-lg uppercase tracking-tight text-white mb-5">
              {isFr ? 'Applications' : 'Applications'}
            </h3>
            <ul className="space-y-3">
              {applications.map((app) => (
                <li key={app} className="flex items-start gap-2 font-body text-sm text-[#B0B2B5]">
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
            <p className="font-body text-white/90 text-sm mb-6">
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
