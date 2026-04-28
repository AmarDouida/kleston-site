'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import type { Produit, Categorie } from '@/data/produits'

const categoryAccent: Record<string, string> = {
  'mains-courantes': '#FF5C00',
  'main-courante-protection-murale': '#CC4A00',
  'protection-murale-antichoc': '#141414',
  'protection-angle': '#B0B2B5',
}

export function ProductCatalog({
  produits,
  categories,
  activeCategorie: initialActive,
  locale,
}: {
  produits: Produit[]
  categories: Categorie[]
  activeCategorie: string
  locale: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [active, setActive] = useState(initialActive)
  const [search, setSearch] = useState('')
  const isFr = locale === 'fr'

  const filteredProduits = produits.filter((p) => {
    const matchCategorie = active === 'tous' || p.categorie === active
    const q = search.toLowerCase()
    const matchSearch =
      search === '' ||
      (isFr ? p.nom.fr : p.nom.en).toLowerCase().includes(q) ||
      p.ref.toLowerCase().includes(q) ||
      (isFr ? p.description.fr : p.description.en).toLowerCase().includes(q) ||
      p.materiaux.some((m) => m.toLowerCase().includes(q)) ||
      p.certifications.some((c) => c.toLowerCase().includes(q))
    return matchCategorie && matchSearch
  })

  const handleFilter = (categorieId: string) => {
    setActive(categorieId)
    const params = categorieId === 'tous' ? '' : `?categorie=${categorieId}`
    router.push(`${pathname}${params}`, { scroll: false })
  }

  const filterLabel = (id: string) => {
    if (id === 'tous') return isFr ? 'Tous les produits' : 'All products'
    const cat = categories.find((c) => c.id === id)
    return cat ? (isFr ? cat.nom.fr : cat.nom.en) : id
  }

  const allFilters = ['tous', ...categories.map((c) => c.id)]

  const resultsLabel = () => {
    const n = filteredProduits.length
    if (search !== '') {
      if (n === 0) return isFr ? `Aucun résultat pour "${search}"` : `No results for "${search}"`
      return isFr ? `${n} résultat(s) pour "${search}"` : `${n} result(s) for "${search}"`
    }
    if (active !== 'tous') {
      return isFr
        ? `${n} produit(s) dans ${filterLabel(active)}`
        : `${n} product(s) in ${filterLabel(active)}`
    }
    return isFr ? `${n} produits` : `${n} products`
  }

  return (
    <section className="bg-[#EDEAE3] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        {/* Search bar */}
        <div className="relative mb-4 w-full md:max-w-[480px]">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B0B2B5] pointer-events-none"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              isFr
                ? 'Rechercher un produit (référence, matériau, certification...)'
                : 'Search a product (reference, material, certification...)'
            }
            className="w-full bg-white border border-[#E0DBD0] focus:border-[#FF5C00] outline-none font-body text-[15px] text-[#1A1A1A] placeholder:text-[#B0B2B5] pl-11 pr-10 py-4 transition-colors"
          />
          {search !== '' && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B0B2B5] hover:text-[#4A4A4A] transition-colors"
              aria-label={isFr ? 'Effacer la recherche' : 'Clear search'}
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-[#D8D5CE]">
          {allFilters.map((id) => {
            const count =
              id === 'tous'
                ? produits.length
                : produits.filter((p) => p.categorie === id).length
            return (
              <button
                key={id}
                onClick={() => handleFilter(id)}
                className={`font-condensed font-bold text-xs tracking-[0.15em] uppercase px-5 py-3 border transition-all duration-200 ${
                  active === id
                    ? 'bg-[#141414] text-white border-[#141414]'
                    : 'bg-white text-[#4A4A4A] border-[#E0DBD0] hover:border-[#FF5C00] hover:text-[#FF5C00]'
                }`}
              >
                {filterLabel(id)}
                <span
                  className={`ml-2 text-[10px] ${
                    active === id ? 'text-[#FF5C00]' : 'text-[#B0B2B5]'
                  }`}
                >
                  ({count})
                </span>
              </button>
            )
          })}
        </div>

        {/* Results label */}
        <div className="mb-8">
          <p className="font-body text-sm text-[#7A7A7A]">{resultsLabel()}</p>
        </div>

        {/* Product grid or empty state */}
        {filteredProduits.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Search size={48} className="text-[#E0DBD0] mb-6" />
            <p className="font-condensed font-bold text-[24px] uppercase text-[#1A1A1A] mb-3">
              {isFr ? 'Aucun produit trouvé' : 'No product found'}
            </p>
            <p className="font-body text-[15px] text-[#7A7A7A] mb-8">
              {isFr
                ? "Essayez d'autres termes ou contactez-nous directement."
                : 'Try different terms or contact us directly.'}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[#FF5C00] hover:bg-[#CC4A00] text-white font-condensed font-bold text-[12px] tracking-[0.15em] uppercase px-8 py-4 transition-colors duration-200"
            >
              {isFr ? 'Nous contacter' : 'Contact us'}
            </Link>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProduits.map((produit) => (
                <motion.div
                  key={produit.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProductCard produit={produit} locale={locale} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function ProductCard({ produit, locale }: { produit: Produit; locale: string }) {
  const isFr = locale === 'fr'
  const href = `/${locale}/${isFr ? 'produits' : 'products'}/${produit.categorie}/${produit.id}`
  const accent = categoryAccent[produit.categorie] ?? '#FF5C00'

  return (
    <Link
      href={href}
      className="group block bg-white hover:-translate-y-1 transition-all duration-300"
      style={{
        boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
          `0 12px 32px -8px rgba(0,0,0,0.15), 0 0 0 1px ${accent}`
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
          '0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)'
      }}
    >
      {/* Category accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: accent }} />

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F0F0EE]">
        <Image
          src={produit.image}
          alt={isFr ? produit.nom.fr : produit.nom.en}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {produit.featured && (
          <div className="absolute top-3 left-3 bg-[#FF5C00] text-white font-condensed font-bold text-[10px] tracking-[0.15em] uppercase px-3 py-1">
            {isFr ? 'Populaire' : 'Popular'}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-condensed text-[10px] tracking-[0.2em] uppercase text-[#B0B2B5] mb-2">
          {isFr ? 'Réf.' : 'Ref.'} {produit.ref}
        </p>

        <h3 className="font-condensed font-bold text-[18px] text-[#0F0F0F] leading-tight mb-3 group-hover:text-[#FF5C00] transition-colors duration-200">
          {isFr ? produit.nom.fr : produit.nom.en}
        </h3>

        <p className="font-body text-[13px] text-[#7A7A7A] mb-4 line-clamp-1">
          {produit.dimensions}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {produit.certifications.slice(0, 3).map((cert) => (
            <span
              key={cert}
              className="bg-[#FF5C00]/10 text-[#FF5C00] font-condensed font-bold text-[10px] tracking-[0.1em] uppercase px-2 py-1"
            >
              {cert}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#E0DBD0]">
          <span className="font-condensed font-bold text-[11px] tracking-[0.15em] uppercase text-[#141414] group-hover:text-[#FF5C00] transition-colors">
            {isFr ? 'Voir la fiche technique' : 'View technical sheet'}
          </span>
          <span className="text-[#FF5C00] group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}
