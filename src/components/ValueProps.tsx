import React, { useMemo } from 'react';
import TextScramble from '@/components/ui/text-scramble';
import { GlassInfoCard } from '@/components/ui/glass-info-card';

const ValueCard = React.memo(({ title, description }: { title: string; description: string }) => (
  <GlassInfoCard className="text-center">
    <div className="relative z-10 p-6">
      <h3 className="card-title text-lg font-semibold mb-3">{title}</h3>
      <p className="card-text text-sm leading-relaxed">{description}</p>
    </div>
  </GlassInfoCard>
));

ValueCard.displayName = 'ValueCard';

const ValueProps: React.FC = () => {
  const valueProps = useMemo(() => [
    {
      title: 'Purpose-Built for Life Insurance',
      description: 'Closio reflects the real structure of a life-insurance business — leads, policies, renewals, commission tracking, and carrier requirements — all in one place.'
    },
    {
      title: 'Workflow Automation',
      description: 'Workflow tools are built directly into the platform. Closio supports common industry processes like renewal tracking, policy review reminders, draft-date alerts, and internal task routing without external tools.'
    },
    {
      title: 'Clear, Accurate Commission Tracking',
      description: 'Agents and managers can see advances, renewals, residuals, chargebacks, and splits with simple, accurate reporting — giving everyone visibility into their performance and earnings.'
    },
    {
      title: 'Fast Onboarding',
      description: 'Pre-configured templates and structured workflows help new agents get productive faster, while managers maintain clarity on activity, progress, and pipeline health.'
    }
  ], []);

  return (
    <section id="why-closio" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:gap-20 grid-cols-1 lg:grid-cols-12 items-center">

          {/* Cards Grid - Left on large screens */}
          <div className="wc-cards order-2 lg:order-1 lg:col-span-7 lg:pr-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {valueProps.map((prop, index) => (
                <ValueCard key={index} title={prop.title} description={prop.description} />
              ))}
            </div>
          </div>

          {/* Header Block - Right on large screens */}
          <div className="wc-header order-1 lg:order-2 lg:col-span-5 lg:pl-4 text-center lg:text-right px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-center lg:text-right">
              Why{" "}
              <TextScramble
                text="Closio"
                intervalMs={3500}
                durationMs={1400}
                fps={25}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3]"
              />
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6 text-center lg:text-right">
              A CRM built thoughtfully for the workflows, responsibilities, and operational demands of life-insurance teams.
            </p>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed text-center lg:text-right max-w-lg mx-auto lg:ml-auto lg:mr-0">
              Closio is designed around the way life-insurance agencies actually work. It brings organization, consistency, and visibility to every part of the sales process — from tracking policies and renewals to understanding performance, compliance, and communication.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProps;