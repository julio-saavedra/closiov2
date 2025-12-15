"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <div
      className={cn(
        "rounded-3xl overflow-hidden",
        "bg-gradient-to-br from-black via-[#0A0F1A] to-[#1A2428]",
        className
      )}
    >
      {children}
    </div>
  );
}
