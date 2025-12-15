import React, { useEffect, useRef, forwardRef } from "react";

type BioItemProps = React.PropsWithChildren<{
  className?: string;
}>;

type BioGridProps = React.PropsWithChildren<{
  className?: string;
}>;

const BioluminescentGridItem = forwardRef<HTMLDivElement, BioItemProps>(
  ({ className, children }, _ref) => {
    const itemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const item = itemRef.current;
      if (!item) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        item.style.setProperty("--mouse-x", `${x}px`);
        item.style.setProperty("--mouse-y", `${y}px`);
      };

      item.addEventListener("mousemove", handleMouseMove);

      return () => {
        item.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return (
      <div ref={itemRef} className={`bio-item ${className || ""}`.trim()}>
        <div className="bio-item-content">{children}</div>
      </div>
    );
  }
);
BioluminescentGridItem.displayName = "BioluminescentGridItem";

export const BioluminescentGrid = forwardRef<HTMLDivElement, BioGridProps>(
  ({ className, children }, ref) => {
    return (
      <div ref={ref} className={`bio-grid ${className || ""}`.trim()}>
        {children}
      </div>
    );
  }
);
BioluminescentGrid.displayName = "BioluminescentGrid";

export { BioluminescentGridItem };
