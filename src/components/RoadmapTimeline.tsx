import React from 'react';
import { BioluminescentGrid, BioluminescentGridItem } from '@/components/ui/bioluminescent-grid';

const RoadmapTimeline: React.FC = () => {
  const items = [
    {
      title: "Core Platform",
      description: "CRM foundation built specifically for life-insurance workflows.",
      meta: "Alpha - Q4 2024",
      className: "col-span-2 row-span-2",
    },
    {
      title: "Workflow Engine",
      description: "Smarter task routing, policy tracking, and follow-up structure.",
      meta: "Beta - Q1 2025",
      className: "",
    },
    {
      title: "General Availability",
      description: "Full platform launch with core dashboards and reporting.",
      meta: "Public Launch - Q2 2025",
      className: "",
    },
    {
      title: "Commission Ingestion",
      description: "Automated commission import + reconciliation.",
      meta: "Commission v1 - Q3 2025",
      className: "row-span-2",
    },
    {
      title: "Chargeback Engine",
      description: "Chargeback processing and agent notifications.",
      meta: "Chargeback v1 - Q4 2025",
      className: "col-span-2",
    },
    {
      title: "Team Ops Upgrades",
      description: "Better role-based visibility, coaching insights, and performance tracking.",
      meta: "In Planning",
      className: "",
    },
  ];

  return (
    <section id="roadmap" className="relative w-full closio-grid-bg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What's Shipping <span className="text-[#3ca2fa]">Next</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70">
            Our commitment to continuous innovation and industry-specific features
          </p>
        </div>

        <BioluminescentGrid className="mt-10">
          {items.map((it, idx) => (
            <BioluminescentGridItem key={idx} className={it.className}>
              <div className="flex flex-col h-full">
                <div className="text-white/60 text-sm mb-3">{it.meta}</div>
                <h3 className="text-white text-2xl font-semibold leading-tight">{it.title}</h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{it.description}</p>
              </div>
            </BioluminescentGridItem>
          ))}
        </BioluminescentGrid>

        <div className="mt-12 mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center glow-hover">
          <h3 className="text-white text-2xl font-semibold">Want to Shape Our Roadmap?</h3>
          <p className="mt-3 text-white/70">
            Join our beta program and get early access to upcoming features while helping us build the perfect life insurance CRM.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 rounded-xl bg-[#3ca2fa]/20 border border-[#3ca2fa]/30 text-white hover:bg-[#3ca2fa]/25 transition">
              Join Beta Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;
