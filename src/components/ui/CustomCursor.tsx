'use client'

import { useEffect, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const dotRef = useRef<HTMLDivElement>(null)
  const isHovering = useRef(false)

  useEffect(() => {
    const isTouchDevice = () =>
      window.matchMedia('(hover: none) and (pointer: coarse)').matches

    if (isTouchDevice()) return

    document.documentElement.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const onEnter = () => {
      isHovering.current = true
      dotRef.current?.setAttribute('data-hover', 'true')
    }
    const onLeave = () => {
      isHovering.current = false
      dotRef.current?.removeAttribute('data-hover')
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
    }
  }, [x, y])

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="bg-white"
          animate={{ width: isHovering.current ? 32 : 8, height: isHovering.current ? 32 : 8 }}
          transition={{ duration: 0.2 }}
          style={{ borderRadius: 0 }}
        />
      </motion.div>
    </>
  )
}
