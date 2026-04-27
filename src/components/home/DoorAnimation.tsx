'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { EASE_IN_OUT } from '@/lib/easings'

type Phase = 'initial' | 'doors' | 'opening' | 'done'

export function DoorAnimation({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>('initial')

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('kleston-doors-played')
    if (hasPlayed) {
      setPhase('done')
      return
    }

    setPhase('doors')
    const openTimer = setTimeout(() => {
      setPhase('opening')
      sessionStorage.setItem('kleston-doors-played', 'true')
    }, 400)

    return () => clearTimeout(openTimer)
  }, [])

  useEffect(() => {
    if (phase !== 'opening') return
    const doneTimer = setTimeout(() => setPhase('done'), 1900)
    return () => clearTimeout(doneTimer)
  }, [phase])

  const showDoors = phase === 'doors' || phase === 'opening'
  const contentVisible = phase === 'done' || phase === 'initial'

  return (
    <div>
      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: phase === 'done' ? 'opacity 0.4s ease' : 'none',
        }}
      >
        {children}
      </div>

      <AnimatePresence>
        {showDoors && (
          <div
            className="fixed inset-0 z-[9999] flex pointer-events-none"
            key="doors"
          >
            {/* Porte gauche */}
            <motion.div
              className="w-1/2 h-full bg-[#1E1E1E] flex items-center justify-end pr-8"
              initial={{ x: 0 }}
              animate={{ x: phase === 'opening' ? '-100%' : 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1.2, ease: EASE_IN_OUT, delay: 0.1 }}
            >
              <div className="flex flex-col gap-3 opacity-20">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-1 h-8 bg-[#FF5C00]" />
                ))}
              </div>
            </motion.div>

            {/* Porte droite */}
            <motion.div
              className="w-1/2 h-full bg-[#1E1E1E] flex items-center justify-start pl-8"
              initial={{ x: 0 }}
              animate={{ x: phase === 'opening' ? '100%' : 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 1.2, ease: EASE_IN_OUT, delay: 0.1 }}
            >
              <div className="flex flex-col gap-3 opacity-20">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-1 h-8 bg-[#FF5C00]" />
                ))}
              </div>
            </motion.div>

            {/* Logo centré */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: phase === 'opening' ? 0 : 1 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <svg viewBox="0 0 992 896" className="w-24 h-24">
                <polygon
                  points="463 507 735 507 735 651 378 651 213 486 153 546 153 743 0 896 0 0 153 0 153 319 472 0 992 0 992 153 556 153 332.5 376.5 463 507"
                  fill="#FF5C00"
                />
                <path
                  d="M992,743l-153,153l-713,0l153,-153l560,0l0,-336l-560,0l153,-153l560,0l0,489Z"
                  fill="#B0B2B5"
                />
              </svg>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
