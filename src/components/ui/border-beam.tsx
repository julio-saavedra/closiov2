"use client"

import React, { CSSProperties, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface BorderBeamProps {
  lightWidth?: number
  duration?: number
  lightColor?: string
  borderWidth?: number
  className?: string
  [key: string]: unknown
}

export function BorderBeam({
  lightWidth = 200,
  duration = 10,
  lightColor = "#FAFAFA",
  borderWidth = 1,
  className,
  ...props
}: BorderBeamProps) {
  const pathRef = useRef<HTMLDivElement>(null)

  const updatePath = () => {
    if (pathRef.current) {
      const div = pathRef.current
      div.style.setProperty(
        "--path",
        `path("M 0 0 H ${div.offsetWidth} V ${div.offsetHeight} H 0 V 0")`
      )
    }
  }

  useEffect(() => {
    updatePath()
    const handleResize = () => {
      window.requestAnimationFrame(updatePath)
    }
    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      style={
        {
          "--duration": `${duration}s`,
          "--border-width": `${borderWidth}px`,
          "--light-color": lightColor,
          "--light-width": `${lightWidth}px`,
        } as CSSProperties
      }
      ref={pathRef}
      className={cn(
        "absolute z-0 h-full w-full rounded-[inherit]",
        "after:absolute after:inset-[var(--border-width)] after:rounded-[inherit] after:content-['']",
        "border-[length:var(--border-width)] ![mask-clip:padding-box,border-box]",
        "![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(red,red)]",
        "before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:border-[length:var(--border-width)] before:border-black/10 dark:before:border-white/10",
        className
      )}
      {...props}
    >
      <div
        className="border-beam-light absolute inset-0 aspect-square bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)]"
        style={
          {
            width: "var(--light-width)",
            offsetPath: "var(--path)",
          } as CSSProperties
        }
      />
      <style>{`
        @keyframes border-beam {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        .border-beam-light {
          animation: border-beam var(--duration) linear infinite;
          will-change: offset-distance;
        }
      `}</style>
    </div>
  )
}
