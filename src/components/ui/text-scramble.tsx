"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  text: string
  intervalMs?: number
  durationMs?: number
  fps?: number
  className?: string
}

const CHARS = "!<>-_:/\\[]{}—=+*^?#________0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function TextScramble({
  text,
  intervalMs = 3500,
  durationMs = 800,
  fps = 40,
  className,
}: Props) {
  const [display, setDisplay] = useState(text)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)
  const raf = useRef<number | null>(null)
  const timer = useRef<number | null>(null)
  const running = useRef(false)

  const run = () => {
    if (running.current) return
    running.current = true
    const start = performance.now()
    const step = () => {
      const now = performance.now()
      const t = Math.min(1, (now - start) / durationMs)
      const out = text
        .split("")
        .map((ch, i) => {
          const p = Math.min(1, Math.max(0, t - i * 0.02))
          const reveal = p > 0.85
          if (reveal) return ch
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join("")
      setDisplay(out)
      if (t < 1) {
        raf.current = window.setTimeout(step, 1000 / fps) as unknown as number
      } else {
        setDisplay(text)
        running.current = false
      }
    }
    step()
  }

  useEffect(() => {
    if (!elementRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) {
      setDisplay(text)
      return
    }

    if (!isVisible) {
      if (timer.current) window.clearInterval(timer.current)
      if (raf.current) window.clearTimeout(raf.current)
      timer.current = null
      return
    }

    const first = window.setTimeout(run, 600) as unknown as number
    timer.current = window.setInterval(run, intervalMs) as unknown as number
    return () => {
      window.clearTimeout(first)
      if (timer.current) window.clearInterval(timer.current)
      if (raf.current) window.clearTimeout(raf.current)
    }
  }, [text, intervalMs, durationMs, fps, isVisible])

  return <span ref={elementRef} className={className} aria-label={text}>{display}</span>
}
