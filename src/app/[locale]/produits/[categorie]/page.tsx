import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import {
  categories,
  getCategorieById,
  getProduitsByCategorie,
} from '@/data/produits'

export async function generateStaticParams() {
  return ['fr', 'en'].flatMap((locale) =>
    categories.map((cat) => ({ locale, categorie: cat.id })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; categorie: string }>
}): Promise<Metadata> {
  const { locale, categorie } = await params
  const cat = getCategorieById(categorie)
  if (!cat) return {}
  const isFr = locale === 'fr'
  const nom = isFr ? cat.nom.fr : cat.nom.en
  const desc = isFr ? cat.description.fr : cat.description.en
  return {
    title: `${nom} | Kleston`,
    description: desc,
    alternates: {
      canonical: `https://kleston.ca/${locale}/${isFr ? 'produits' : 'products'}/${categorie}`,
      languages: {
        'fr-CA': `https://kleston.ca/fr/produits/${categorie}`,
        'en-CA': `https://kleston.ca/en/products/${categorie}`,
      },
    },
    openGraph: {
      title: `${nom} — Kleston`,
      description: desc,
      url: `https://kleston.ca/${locale}/${isFr ? 'produits' : 'products'}/${categorie}`,
      images: [{ url: cat.image, width: 1200, height: 630 }],
    },
  }
}

export default async function CategoriePage({
  params,
}: {
  params: Promise<{ locale: string; categorie: string }>
}) {
  const { locale, categorie } = await params
  const cat = getCategorieById(categorie)
  if (!cat) notFound()

  const isFr = locale === 'fr'
  const produits = getProduitsByCategorie(categorie)
  const basePath = `/${locale}/${isFr ? 'produits' : 'products'}`

  return (
    <main className="min-h-screen bg-[#F5F1EA]">
      <PageHero
        label={isFr ? 'Catalogue produits' : 'Product catalog'}
        title={isFr ? cat.nom.fr : cat.nom.en}
        subtitle={isFr ? cat.description.fr : cat.description.en}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E0DBD0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-3 flex items-center gap-2 font-body text-xs text-[#4A4A4A]">
          <Link href={basePath} className="hover:text-[#FF5C00] transition-colors">
            {isFr ? 'Produits' : 'Products'}
          </Link>
          <span>/</span>
          <span className="text-[#1A1A1A]">{isFr ? cat.nom.fr : cat.nom.en}</span>
          <span className="ml-auto text-[#B0B2B5]">
            {produits.length} {isFr ? 'produits' : 'products'}
          </span>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {produits.map((produit) => (
            <Link
              key={produit.id}
              href={`${basePath}/${categorie}/${produit.id}`}
              className="group bg-white border border-[#E0DBD0] flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)] hover:border-[#FF5C00] transition-all duration-300"
            >
              {/* Image 4:3 */}
              <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                <Image
                  src={produit.image}
                  alt={isFr ? produit.nom.fr : produit.nom.en}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Reference */}
                <p className="font-condensed font-normal text-[11px] tracking-[0.2em] uppercase text-[#7A7A7A] mb-2">
                  REF: {produit.ref}
                </p>

                {/* Name */}
                <h2 className="font-condensed font-bold text-[20px] uppercase tracking-tight text-[#1A1A1A] leading-[1.2] mb-2">
                  {isFr ? produit.nom.fr : produit.nom.en}
                </h2>

                {/* Dimensions */}
                <p className="font-body text-[13px] text-[#4A4A4A] leading-relaxed mb-4 line-clamp-1">
                  {produit.dimensions}
                </p>

                {/* Material badges — max 2 */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {produit.materiaux.slice(0, 2).map((mat) => (
                    <span
                      key={mat}
                      className="font-body text-[11px] text-[#4A4A4A] bg-[#E0DBD0] px-2 py-0.5"
                    >
                      {mat}
                    </span>
                  ))}
                </div>

                {/* Cert badges — max 3 */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {produit.certifications.slice(0, 3).map((cert) => (
                    <span
                      key={cert}
                      className="font-condensed font-bold text-[11px] tracking-wider uppercase text-[#FF5C00] bg-[#FF5C00]/10 px-2 py-0.5"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <span className="flex items-center justify-center gap-2 w-full bg-[#141414] group-hover:bg-[#FF5C00] text-white font-condensed font-bold text-[12px] tracking-[0.15em] uppercase py-3 transition-colors duration-300">
                    {isFr ? 'Voir la fiche technique' : 'View spec sheet'}
                    <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back to all products */}
      <div className="border-t border-[#E0DBD0] bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <Link
            href={basePath}
            className="inline-flex items-center gap-2 font-condensed font-bold text-sm tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#FF5C00] transition-colors"
          >
            ← {isFr ? 'Toutes les gammes' : 'All ranges'}
          </Link>
        </div>
      </div>
    </main>
  )
}
