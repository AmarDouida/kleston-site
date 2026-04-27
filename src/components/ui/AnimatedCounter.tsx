'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  value: string
  duration?: number
}

export function AnimatedCounter({ value, duration = 1800 }: Props) {
  const numericValue = parseInt(value, 10)
  const isNumeric = !isNaN(numericValue)

  const [display, setDisplay] = useState(isNumeric ? '0' : value)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView || !isNumeric) return

    let start: number | null = null

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(String(Math.floor(eased * numericValue)))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [isInView, isNumeric, numericValue, duration])

  return <span ref={ref}>{display}</span>
}
