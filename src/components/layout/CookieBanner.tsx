'use client'
import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function CookieBanner() {
  const t = useTranslations('cookie')
  const locale = useLocale()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('kleston-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('kleston-cookie-consent', 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('kleston-cookie-consent', 'declined')
    setVisible(false)
  }

  const privacyPath =
    locale === 'fr' ? '/fr/politique-confidentialite' : '/en/privacy-policy'

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#1E1E1E] border-t border-white/10 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <p className="font-body text-sm text-white/70 max-w-2xl">
              {t('text')}{' '}
              <Link
                href={privacyPath}
                className="text-[#FF5C00] hover:underline"
              >
                {t('learn_more')}
              </Link>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="font-condensed font-bold text-xs tracking-widest uppercase text-white/50 hover:text-white border border-white/20 hover:border-white/50 px-4 py-2 transition-all"
              >
                {t('decline')}
              </button>
              <button
                onClick={handleAccept}
                className="font-condensed font-bold text-xs tracking-widest uppercase bg-[#FF5C00] hover:bg-[#E05200] text-white px-6 py-2 transition-colors"
              >
                {t('accept')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
