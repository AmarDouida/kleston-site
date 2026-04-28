import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import {
  produits,
  getCategorieById,
  getProduitById,
} from '@/data/produits'

export async function generateStaticParams() {
  return ['fr', 'en'].flatMap((locale) =>
    produits.map((p) => ({ locale, categorie: p.categorie, produit: p.id })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; categorie: string; produit: string }>
}): Promise<Metadata> {
  const { locale, categorie, produit } = await params
  const p = getProduitById(produit)
  if (!p) return {}
  const isFr = locale === 'fr'
  const nom = isFr ? p.nom.fr : p.nom.en
  const desc = isFr ? p.description.fr : p.description.en
  return {
    title: `${nom} | Kleston`,
    description: desc.slice(0, 160),
    alternates: {
      canonical: `https://kleston.ca/${locale}/${isFr ? 'produits' : 'products'}/${categorie}/${produit}`,
      languages: {
        'fr-CA': `https://kleston.ca/fr/produits/${categorie}/${produit}`,
        'en-CA': `https://kleston.ca/en/products/${categorie}/${produit}`,
      },
    },
    openGraph: {
      title: `${nom} — Kleston`,
      description: desc.slice(0, 160),
      url: `https://kleston.ca/${locale}/${isFr ? 'produits' : 'products'}/${categorie}/${produit}`,
      images: [{ url: p.image, width: 800, height: 600 }],
    },
  }
}

export default async function ProduitPage({
  params,
}: {
  params: Promise<{ locale: string; categorie: string; produit: string }>
}) {
  const { locale, categorie, produit } = await params
  const p = getProduitById(produit)
  const cat = getCategorieById(categorie)
  if (!p || !cat) notFound()

  const isFr = locale === 'fr'
  const basePath = `/${locale}/${isFr ? 'produits' : 'products'}`
  const categoryPath = `${basePath}/${categorie}`

  const nom = isFr ? p.nom.fr : p.nom.en
  const desc = isFr ? p.description.fr : p.description.en
  const catNom = isFr ? cat.nom.fr : cat.nom.en

  const dimRows = p.dimensions.split(' · ').map((part) => {
    const colonIdx = part.indexOf(':')
    if (colonIdx === -1) return { key: part, value: '' }
    return { key: part.slice(0, colonIdx).trim(), value: part.slice(colonIdx + 1).trim() }
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: nom,
    description: desc,
    sku: p.ref,
    brand: { '@type': 'Brand', name: 'Kleston' },
    image: p.image,
    url: `https://kleston.ca/${locale}/${isFr ? 'produits' : 'products'}/${categorie}/${produit}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Kleston' },
    },
  }

  return (
    <main className="min-h-screen bg-[#F5F1EA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E0DBD0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-3 flex items-center gap-2 font-body text-xs text-[#4A4A4A]">
          <Link href={basePath} className="hover:text-[#FF5C00] transition-colors">
            {isFr ? 'Produits' : 'Products'}
          </Link>
          <span>/</span>
          <Link href={categoryPath} className="hover:text-[#FF5C00] transition-colors">
            {catNom}
          </Link>
          <span>/</span>
          <span className="text-[#1A1A1A] truncate max-w-[200px]">{nom}</span>
        </div>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT — image + cert badges + colors */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#E0DBD0]">
              <Image
                src={p.image}
                alt={nom}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.certifications.map((cert) => (
                <span
                  key={cert}
                  className="font-condensed font-bold text-[11px] tracking-wider uppercase text-[#FF5C00] bg-[#FF5C00]/10 px-3 py-1"
                >
                  {cert}
                </span>
              ))}
            </div>

            <p className="mt-4 font-body text-[13px] text-[#7A7A7A]">
              <span className="font-bold text-[#4A4A4A]">{isFr ? 'Coloris :' : 'Colors:'}</span>{' '}
              {p.couleurs}
            </p>
          </div>

          {/* RIGHT — details */}
          <div>
            {/* Back to category */}
            <Link
              href={categoryPath}
              className="inline-flex items-center gap-1.5 font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#7A7A7A] hover:text-[#FF5C00] transition-colors mb-6"
            >
              <ArrowLeft size={12} />
              {catNom}
            </Link>

            {/* REF */}
            <p className="font-condensed font-normal text-[11px] tracking-[0.2em] uppercase text-[#7A7A7A] mb-2">
              REF: {p.ref}
            </p>

            {/* Title */}
            <h1 className="font-condensed font-bold text-[clamp(32px,4vw,48px)] uppercase tracking-[0em] text-[#1A1A1A] leading-[1] mb-6">
              {nom}
            </h1>

            {/* Orange separator */}
            <div className="w-12 h-0.5 bg-[#FF5C00] mb-6" />

            {/* Description */}
            <p className="font-body text-[17px] text-[#4A4A4A] leading-relaxed mb-10">
              {desc}
            </p>

            {/* Dimensions table */}
            <div className="mb-8">
              <h3 className="font-condensed font-bold text-[13px] tracking-[0.15em] uppercase text-[#1A1A1A] mb-3">
                {isFr ? 'Dimensions' : 'Dimensions'}
              </h3>
              <div className="border border-[#E0DBD0]">
                {dimRows.map((row, i) => (
                  <div
                    key={row.key}
                    className={`flex justify-between px-4 py-2.5 font-body text-sm ${
                      i % 2 === 0 ? 'bg-white' : 'bg-[#F5F1EA]'
                    }`}
                  >
                    <span className="text-[#7A7A7A]">{row.key}</span>
                    <span className="font-bold text-[#1A1A1A]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div className="mb-6">
              <h3 className="font-condensed font-bold text-[13px] tracking-[0.15em] uppercase text-[#1A1A1A] mb-3">
                {isFr ? 'Matériaux' : 'Materials'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {p.materiaux.map((mat) => (
                  <span
                    key={mat}
                    className="font-body text-[12px] text-[#4A4A4A] bg-[#E0DBD0] px-3 py-1"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Sectors */}
            <div className="mb-8">
              <h3 className="font-condensed font-bold text-[13px] tracking-[0.15em] uppercase text-[#1A1A1A] mb-3">
                {isFr ? 'Secteurs' : 'Sectors'}
              </h3>
              <ul className="space-y-1.5">
                {p.secteurs.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 font-body text-[14px] text-[#4A4A4A]">
                    <CheckCircle2 size={14} className="text-[#FF5C00] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Accessories */}
            {p.accessoires && p.accessoires.length > 0 && (
              <div className="mb-10">
                <h3 className="font-condensed font-bold text-[13px] tracking-[0.15em] uppercase text-[#1A1A1A] mb-3">
                  {isFr ? 'Accessoires compatibles' : 'Compatible accessories'}
                </h3>
                <ul className="space-y-1">
                  {p.accessoires.map((acc) => (
                    <li key={acc} className="flex items-center gap-2 font-body text-[13px] text-[#4A4A4A]">
                      <span className="w-1 h-1 bg-[#FF5C00] inline-block shrink-0" />
                      {acc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/${locale}/contact`}
                className="flex-1 flex items-center justify-center gap-2 bg-[#FF5C00] hover:bg-[#CC4A00] text-white font-condensed font-bold text-[13px] tracking-[0.15em] uppercase py-4 transition-colors duration-200"
              >
                {isFr ? 'Demander un devis' : 'Request a quote'}
                <ArrowRight size={13} />
              </Link>
              <Link
                href={categoryPath}
                className="flex-1 flex items-center justify-center gap-2 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-condensed font-bold text-[13px] tracking-[0.15em] uppercase py-4 transition-colors duration-200"
              >
                {isFr ? 'Voir la gamme' : 'View range'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
