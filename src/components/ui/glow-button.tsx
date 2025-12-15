import React, { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
  label?: string;
  onClick?(): void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ label, onClick, className, disabled = false, type = 'button', children }, ref) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      if (disabled) return;
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
      onClick?.();
    };

    return (
      <button
        ref={ref}
        type={type}
        aria-label={label}
        className={cn("glow-btn", className)}
        onClick={handleClick}
        disabled={disabled}
        data-state={isClicked ? "clicked" : undefined}
      >
        {children || label}
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
