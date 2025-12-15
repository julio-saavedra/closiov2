"use client";

import React from "react";

interface RoleVideoProps {
  src: string;
  title: string;
}

export function RoleVideo({ src, title }: RoleVideoProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#2C66FF]/20 to-[#2B4FB3]/20">
      <video
        className="h-full w-full object-cover rounded-lg"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
      {/* Fallback label if video fails */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm sm:text-base md:text-lg font-semibold text-white/60">
        {title}
      </div>
    </div>
  );
}
