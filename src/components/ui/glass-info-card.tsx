"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassInfoCardProps {
  className?: string;
  children: ReactNode;
}

export function GlassInfoCard({ className, children }: GlassInfoCardProps) {
  return (
    <div
      className={cn(
        "glass-info-card relative overflow-hidden",
        className
      )}
    >
      <span className="glass-info-card__border" aria-hidden="true"></span>
      <span className="glass-info-card__inner" aria-hidden="true"></span>
      <span className="glass-info-card__sheen" aria-hidden="true"></span>

      {children}
    </div>
  );
}
