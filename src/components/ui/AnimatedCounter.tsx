'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  target: string
  duration?: number
}

export function AnimatedCounter({ target, duration = 1800 }: AnimatedCounterProps) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  // Parse numeric prefix and suffix (e.g. "500+" → 500, "+"; "100%" → 100, "%"; "QC" → NaN, "QC")
  const match = target.match(/^(\d+)(.*)$/)
  const numericTarget = match ? parseInt(match[1], 10) : NaN
  const suffix = match ? match[2] : ''
  const isNumeric = !isNaN(numericTarget)

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * numericTarget)
            setDisplay(`${current}${suffix}`)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericTarget, suffix, duration, isNumeric])

  return <span ref={ref}>{display}</span>
}
