'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import type { Produit, Categorie } from '@/data/produits'

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
  const isFr = locale === 'fr'

  const filteredProduits =
    active === 'tous' ? produits : produits.filter((p) => p.categorie === active)

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

  return (
    <section className="bg-[#F5F1EA] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-[#E0DBD0]">
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

        {/* Active label */}
        <div className="mb-8">
          <p className="font-condensed font-bold text-xs tracking-[0.25em] uppercase text-[#FF5C00] mb-2">
            {filterLabel(active)}
          </p>
          <p className="font-body text-sm text-[#7A7A7A]">
            {filteredProduits.length} {isFr ? 'produit(s)' : 'product(s)'}
          </p>
        </div>

        {/* Product grid */}
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
      </div>
    </section>
  )
}

function ProductCard({ produit, locale }: { produit: Produit; locale: string }) {
  const isFr = locale === 'fr'
  const href = `/${locale}/${isFr ? 'produits' : 'products'}/${produit.categorie}/${produit.id}`

  return (
    <Link
      href={href}
      className="group block bg-white border border-[#E0DBD0] hover:border-[#FF5C00] hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
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
