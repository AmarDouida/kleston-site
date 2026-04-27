'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: `/${locale}/produits`, label: t('produits') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/blog`, label: t('blog') },
    {
      href: `/${locale}/${locale === 'fr' ? 'a-propos' : 'about'}`,
      label: t('about'),
    },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  const headerBg = isHome
    ? scrolled
      ? 'bg-[#1E1E1E]/95 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
    : 'bg-[#1E1E1E]'

  const altLocale = locale === 'fr' ? 'en' : 'fr'
  const altPath = pathname.replace(`/${locale}`, `/${altLocale}`)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <svg viewBox="0 0 992 896" className="w-8 h-7 shrink-0">
              <polygon
                points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507"
                fill="#FF5C00"
              />
              <path
                d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z"
                fill="#B0B2B5"
              />
            </svg>
            <span className="font-condensed font-black text-xl tracking-[0.1em] text-white uppercase">
              KLESTON
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-condensed font-semibold text-sm tracking-[0.1em] uppercase text-white/70 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF5C00] group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={altPath}
              className="font-condensed font-semibold text-xs tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-200 border border-white/20 hover:border-white/50 px-3 py-1.5"
            >
              {t('langue')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="font-condensed font-bold text-xs tracking-[0.15em] uppercase bg-[#FF5C00] hover:bg-[#E05200] text-white px-5 py-2.5 transition-colors duration-200"
            >
              {t('devis')}
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1E1E1E] border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-condensed font-bold text-lg uppercase tracking-widest text-white hover:text-[#FF5C00] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setMenuOpen(false)}
                  className="text-center font-condensed font-bold text-sm tracking-widest uppercase bg-[#FF5C00] text-white px-6 py-3"
                >
                  {t('devis')}
                </Link>
                <a
                  href="tel:5145508823"
                  className="flex items-center justify-center gap-2 text-white/60 font-body text-sm"
                >
                  <Phone size={14} />
                  514 550 8823
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
