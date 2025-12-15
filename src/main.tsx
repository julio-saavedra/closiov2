import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Apply glass button styles to all buttons except pricing section
function applyGlassButtonStyles() {
  const candidates = document.querySelectorAll(
    'button:not(.glass-btn-lite):not(.glass-btn):not([class*="glass-btn"])'
  );

  candidates.forEach(el => {
    // Skip anything inside the pricing section
    if (el.closest('#pricing') || el.closest('.pricing-section')) return;

    // Skip if already has glass classes
    if (el.classList.contains('glass-btn-lite') || el.classList.contains('glass-btn')) return;

    // Skip navigation buttons in sidebar/navbar that already have specific styling
    if (el.closest('nav')) return;

    // Apply glass button styling
    const name = (el.className || '').toLowerCase();
    const hasGradient = name.includes('gradient') || name.includes('from-[#2c66ff]');

    if (hasGradient || name.includes('primary') || name.includes('cta')) {
      // Already has primary styling, don't override
      return;
    }
  });
}

// Run after DOM is ready
setTimeout(() => {
  applyGlassButtonStyles();
}, 100);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
