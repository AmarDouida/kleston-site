'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  locale: string
}

export function Header({ locale }: HeaderProps) {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isFr = locale === 'fr'
  const otherLocale = isFr ? 'en' : 'fr'

  // Derive alternate locale path: swap /fr/ ↔ /en/
  const alternatePath = pathname.replace(`/${locale}`, `/${otherLocale}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { href: `/${locale}/${isFr ? 'produits' : 'products'}`, label: t('produits') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/${isFr ? 'a-propos' : 'about'}`, label: t('about') },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#141414] border-b border-white/[0.08]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="font-condensed font-black text-2xl tracking-tight text-white uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Kleston
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-condensed font-bold text-sm tracking-[0.12em] uppercase text-[#B0B2B5] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href={alternatePath}
              className="font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#B0B2B5] hover:text-white transition-colors"
            >
              {t('langue')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center font-condensed font-bold text-sm tracking-[0.12em] uppercase bg-[#FF5C00] hover:bg-[#E05200] text-white px-6 py-2.5 transition-colors"
            >
              {t('devis')}
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-4">
            <Link
              href={alternatePath}
              className="font-condensed font-bold text-xs tracking-[0.15em] uppercase text-[#B0B2B5]"
            >
              {t('langue')}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="text-white p-1"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#141414] flex flex-col justify-center px-8 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-2 mt-16">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-condensed font-black text-5xl uppercase tracking-tight text-white hover:text-[#FF5C00] transition-colors py-2 border-b border-white/[0.06]"
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            onClick={() => setMenuOpen(false)}
            className="font-condensed font-black text-5xl uppercase tracking-tight text-[#FF5C00] hover:text-white transition-colors py-2 border-b border-white/[0.06]"
            style={{ transitionDelay: menuOpen ? `${navLinks.length * 50}ms` : '0ms' }}
          >
            {t('contact')}
          </Link>
        </nav>

        <div className="mt-12">
          <Link
            href={`/${locale}/contact`}
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center font-condensed font-bold text-sm tracking-[0.15em] uppercase bg-[#FF5C00] hover:bg-[#E05200] text-white px-8 py-4 transition-colors"
          >
            {t('devis')}
          </Link>
        </div>
      </div>
    </>
  )
}
