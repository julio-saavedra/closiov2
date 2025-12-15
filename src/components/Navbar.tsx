import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { GlowButton } from '@/components/ui/glow-button';

interface NavbarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'product', label: 'Product' },
  { id: 'automations', label: 'Automations' },
  { id: 'security', label: 'Security' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact', label: 'Contact' }
];

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = 500;
          const progress = Math.min(scrollY / maxScroll, 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getVisibleText = () => {
    const fullText = 'CLOSIO';
    const totalLetters = fullText.length;

    if (scrollProgress === 0) return fullText;
    if (scrollProgress >= 1) return 'C';

    const lettersToRemove = Math.floor(scrollProgress * (totalLetters - 1));
    const visibleLetters = totalLetters - lettersToRemove;

    return fullText.substring(0, visibleLetters);
  };

  const visibleText = getVisibleText();
  const isFullyScrolled = scrollProgress >= 1;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar-glass fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollProgress > 0.1 ? 'navbar-glass--scrolled' : ''
      } ${scrollProgress > 0.1 ? 'py-3' : 'py-6 mt-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="relative text-white hover:text-[#2C66FF] transition-all duration-700 font-bold tracking-wider overflow-visible min-w-[100px] text-left"
            >
              <span className={`inline-block transition-all duration-700 ease-in-out ${
                isFullyScrolled
                  ? 'text-4xl transform scale-125'
                  : 'text-2xl'
              }`}>
                {visibleText}
              </span>
            </button>

            {/* Desktop Nav Links - Center */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-[#2C66FF]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Buttons - Right */}
            <div className="hidden lg:flex items-center space-x-3">
              <GlowButton
                onClick={() => scrollToSection('contact')}
                label="Book a Demo"
                className="px-5 py-2 text-sm whitespace-nowrap"
              />
              <button
                onClick={() => scrollToSection('pricing')}
                className="glass-btn-lite glass-btn-lite--default px-5 py-2 text-sm whitespace-nowrap"
              >
                Get Early Access
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="mobile-menu-glass fixed top-24 left-0 right-0 mx-4 rounded-2xl shadow-2xl overflow-hidden">
            <div className="py-4 px-2 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#2C66FF]/20 text-[#2C66FF]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4 space-y-3 border-t border-white/10 mt-4">
                <GlowButton
                  onClick={() => scrollToSection('contact')}
                  label="Book a Demo"
                  className="w-full px-5 py-2.5 text-sm"
                />
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="glass-btn-lite glass-btn-lite--default w-full px-5 py-2.5 text-sm"
                >
                  Get Early Access
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
