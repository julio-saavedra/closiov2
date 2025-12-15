import React from 'react';
import { GlassInfoCard } from '@/components/ui/glass-info-card';
import TextScramble from '@/components/ui/text-scramble';

const Hero: React.FC = () => {
  const features = [
    {
      title: "Built for Life Insurance",
      description: "Purpose-built workflows and terminology for the industry.",
    },
    {
      title: "Workflow Tools",
      description: "Built-in task automation and process tracking.",
    },
    {
      title: "Commission Clarity",
      description: "Crystal-clear tracking from first-year to renewals.",
    },
    {
      title: "Agent Onboarding",
      description: "Get new agents productive in hours, not weeks.",
    },
    {
      title: "Performance Analytics",
      description: "Real-time insights and coaching opportunities.",
    },
    {
      title: "Pipeline Management",
      description: "Complete visibility from lead to issue paid.",
    },
  ];

  return (
    <section id="hero" className="min-h-screen w-full text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex-1 lg:flex-none"></div>
          <div className="space-y-4 sm:space-y-6 flex items-center justify-center flex-col text-center lg:text-right lg:items-end flex-1">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight max-w-4xl leading-[1.05] -tracking-[0.02em]">
              <TextScramble
                text="Close More."
                intervalMs={5000}
                durationMs={1200}
                fps={30}
                className="inline-block"
              />
              <br />
              <TextScramble
                text="Close Smarter."
                intervalMs={5000}
                durationMs={1200}
                fps={30}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3]"
              />
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed px-4 sm:px-0">
              The proprietary CRM built exclusively for the life-insurance industry—taking you from lead to issue paid with unprecedented clarity and control.
            </p>
          </div>
        </div>

        <div id="hero-cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto lg:mr-0 px-2 sm:px-0">
          {features.map((feature, idx) => (
            <GlassInfoCard
              key={idx}
              className="rounded-xl min-h-[160px] sm:h-40 md:h-48"
            >
              <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col justify-start items-start space-y-2 md:space-y-3 h-full">
                <h3 className="text-sm md:text-base font-semibold">{feature.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed">{feature.description}</p>
              </div>
            </GlassInfoCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;