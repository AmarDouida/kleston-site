import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { PageHero } from '@/components/ui/PageHero'
import { ProductCatalog } from '@/components/produits/ProductCatalog'
import { produits, categories } from '@/data/produits'

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}): Promise<Metadata> {
  const { locale } = await params
  const { categorie: categorieId } = await searchParams
  const isFr = locale === 'fr'
  const categorie = typeof categorieId === 'string'
    ? categories.find((c) => c.id === categorieId)
    : undefined

  const title = categorie
    ? `${isFr ? categorie.nom.fr : categorie.nom.en} — Kleston`
    : isFr
      ? 'Tous nos produits — Kleston'
      : 'All our products — Kleston'

  const description = categorie
    ? isFr
      ? categorie.description.fr
      : categorie.description.en
    : isFr
      ? "Catalogue complet Kleston : mains courantes, protections murales et protections d'angle certifiées CE et ISO 9001 pour établissements de santé et institutionnels au Québec."
      : "Complete Kleston catalog: handrails, wall protection and corner protection, CE and ISO 9001 certified for healthcare and institutional facilities in Quebec."

  return {
    title,
    description,
    alternates: {
      canonical: `https://kleston.ca/${locale}/${isFr ? 'produits' : 'products'}`,
      languages: {
        'fr-CA': 'https://kleston.ca/fr/produits',
        'en-CA': 'https://kleston.ca/en/products',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://kleston.ca/${locale}/${isFr ? 'produits' : 'products'}`,
      images: [{ url: 'https://kleston.ca/images/og/kleston-og.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function ProduitsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { locale } = await params
  const { categorie } = await searchParams
  const t = await getTranslations('produits')

  const activeCategorie =
    typeof categorie === 'string' && categories.some((c) => c.id === categorie)
      ? categorie
      : 'tous'

  return (
    <main className="min-h-screen bg-[#F5F1EA]">
      <PageHero
        label={t('label')}
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <ProductCatalog
        produits={produits}
        categories={categories}
        activeCategorie={activeCategorie}
        locale={locale}
      />
    </main>
  )
}
