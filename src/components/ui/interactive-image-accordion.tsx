import React, { useState } from 'react';
import { GlowButton } from '@/components/ui/glow-button';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Unified Pipeline Management',
    imageUrl: '/book-of-business.png',
    description: 'Complete visibility from lead generation to issue paid'
  },
  {
    id: 2,
    title: 'Commission Tracking',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
    description: 'Transparent commission calculations and splits management'
  },
  {
    id: 3,
    title: 'Agent Performance Analytics',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    description: 'Real-time performance metrics and coaching insights'
  },
  {
    id: 4,
    title: 'Automated Workflows',
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop',
    description: 'Built-in task automation and workflow tracking'
  },
  {
    id: 5,
    title: 'Client Communication Hub',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop',
    description: 'Centralized client interactions and follow-ups'
  },
  {
    id: 6,
    title: 'Compliance & Security',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    description: 'Enterprise-grade security and regulatory compliance'
  },
];

// --- Accordion Item Component ---
const AccordionItem = React.memo(({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[80px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-left"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Caption Text */}
      <div
        className={`
          absolute text-white transition-all duration-500 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-6 right-6 rotate-0' // Active state: horizontal, bottom
              : 'bottom-12 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap' // Inactive: vertical
          }
        `}
      >
        <h3 className={`font-bold ${isActive ? 'text-xl mb-2' : 'text-lg'}`}>
          {item.title}
        </h3>
        {isActive && (
          <p className="text-sm text-gray-200 opacity-90">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
});

AccordionItem.displayName = 'AccordionItem';

// --- Main Component ---
export function InteractiveImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(3);

  const handleItemHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="product" className="py-20">
      <div className="max-w-[calc(100vw-12rem)] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Your Command Center
            </h2>
            <p className="text-xl text-[#A8B3C7] mb-8 leading-relaxed">
              Everything you need to manage your life insurance business in one powerful, purpose-built platform
            </p>
            
            {/* Feature highlights */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#A8B3C7] text-sm">Built specifically for life insurance workflows</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#A8B3C7] text-sm">Built-in workflow tools with no external plugins</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#A8B3C7] text-sm">Real-time analytics and performance tracking</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#A8B3C7] text-sm">Enterprise-grade security and compliance</p>
              </div>
            </div>

            <GlowButton
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              label="Explore Features"
              className="px-8 py-4"
            />
          </div>

          {/* Right Side: Interactive Image Accordion */}
          <div className="w-full lg:w-3/5">
            <div className="flex items-center justify-center gap-3 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}