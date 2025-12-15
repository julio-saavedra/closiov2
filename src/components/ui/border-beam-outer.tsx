"use client"

import React, { CSSProperties, useEffect, useRef } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface BorderBeamOuterProps {
  lightWidth?: number
  duration?: number
  lightColor?: string
  borderWidth?: number
  className?: string
  [key: string]: unknown
}

/**
 * Outer perimeter BorderBeam
 * - Uses full inset-0 so the stroke sits ON the outer rounded edge.
 * - Removes the inner 'after:inset-[var(--border-width)]' and the static 'before:' inner border.
 * - Masks only to the border stroke area at the OUTER edge.
 */
export function BorderBeamOuter({
  lightWidth = 300,
  duration = 10,
  lightColor = "rgba(99,102,241,0.9)",
  borderWidth = 1,
  className,
  ...props
}: BorderBeamOuterProps) {
  const pathRef = useRef<HTMLDivElement>(null)

  const updatePath = () => {
    if (!pathRef.current) return
    const el = pathRef.current
    el.style.setProperty(
      "--path",
      `path("M 0 0 H ${el.offsetWidth} V ${el.offsetHeight} H 0 V 0")`
    )
  }

  useEffect(() => {
    updatePath()
    window.addEventListener("resize", updatePath)
    return () => window.removeEventListener("resize", updatePath)
  }, [])

  return (
    <div
      ref={pathRef}
      style={
        {
          "--duration": duration,
          "--border-width": `${borderWidth}px`,
          "--light-width": `${lightWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "absolute inset-0 z-0 rounded-[inherit]",
        "border-[length:var(--border-width)]",
        "![mask-clip:border-box] [mask:linear-gradient(#000,#000)]",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 aspect-square bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)]"
        style={
          {
            "--light-color": lightColor,
            width: "var(--light-width)",
            offsetPath: "var(--path)",
          } as CSSProperties
        }
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

export default BorderBeamOuter
