import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NeuralNetworkHero from './components/ui/neural-network-hero';
import CompanyLogos from './components/CompanyLogos';
import ValueProps from './components/ValueProps';
import { InteractiveImageAccordion } from './components/ui/interactive-image-accordion';
import RoleTabs from './components/RoleTabs';
import KPIWall from './components/KPIWall';
import SecurityTiles from './components/SecurityTiles';
import ComparisonTable from './components/ComparisonTable';
import AuroraPricing from './components/ui/aurora-pricing';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import RoadmapTimeline from './components/RoadmapTimeline';
import FAQAccordion from './components/FAQAccordion';
import ContactSplit from './components/ContactSplit';
import HoverFooter from './components/ui/hover-footer-demo';
import FloatingSupportBadge from './components/FloatingSupportBadge';
import ClosioPurchaseToasts from './components/ui/closio-purchase-toasts';
import { SectionWrapper } from './components/ui/section-wrapper';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['hero', 'product', 'analytics', 'agencies', 'security', 'pricing', 'testimonials', 'roadmap', 'faq', 'contact'];
          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-[#E8EEF5] overflow-x-hidden w-full min-h-screen">
      <Navbar activeSection={activeSection} />

      <NeuralNetworkHero
        title="Close More. Close Smarter."
        description="The proprietary CRM built exclusively for the life-insurance industry - taking you from lead to issue paid with unprecedented clarity and control."
        badgeText="Life Insurance CRM"
        badgeLabel="New"
        ctaButtons={[
          { text: "Get Started", href: "#contact", primary: true },
          { text: "See Features", href: "#product" }
        ]}
        microDetails={["Built for Insurance", "Commission Tracking", "Agent Management"]}
      />

      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <CompanyLogos />

      <SectionWrapper>
        <ValueProps />
      </SectionWrapper>

      <SectionWrapper>
        <InteractiveImageAccordion />
      </SectionWrapper>

      <SectionWrapper>
        <RoleTabs />
      </SectionWrapper>

      <SectionWrapper>
        <KPIWall />
      </SectionWrapper>

      <SectionWrapper>
        <SecurityTiles />
      </SectionWrapper>

      <SectionWrapper>
        <ComparisonTable />
      </SectionWrapper>

      <SectionWrapper>
        <AuroraPricing />
      </SectionWrapper>

      <SectionWrapper>
        <TestimonialsCarousel />
      </SectionWrapper>

      <SectionWrapper>
        <RoadmapTimeline />
      </SectionWrapper>

      <SectionWrapper>
        <FAQAccordion />
      </SectionWrapper>

      <SectionWrapper>
        <ContactSplit />
      </SectionWrapper>

      <HoverFooter />

      <FloatingSupportBadge />
      <ClosioPurchaseToasts />
    </div>
  );
}

export default App;