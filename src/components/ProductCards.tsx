import React from 'react';

const ProductCards: React.FC = () => {
  const productFeatures = [
    {
      title: 'Unified Pipeline',
      description: 'Complete visibility from lead generation to issue paid',
      features: [
        'Lead → Appointment → Application → Issue Paid',
        'Real-time status tracking',
        'Automated stage progression',
        'Custom milestone alerts'
      ]
    },
    {
      title: 'Commission Clarity',
      description: 'Transparent commission tracking and splits management',
      features: [
        'Agent/Agency split calculations',
        'Release vs Backend commission tracking',
        'Automated payout schedules',
        'Historical commission reporting'
      ]
    },
    {
      title: 'Agent Onboarding',
      description: 'Streamlined role-based access and permissions',
      features: [
        'Super Admin, Admin, Supervising Agent, Agent roles',
        'Preset configurations for quick setup',
        'Training workflow automation',
        'Performance milestone tracking'
      ]
    }
  ];

  return (
    <section id="product" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-transparent to-[#1A1F2E]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Your Command Center
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#A8B3C7] max-w-3xl mx-auto leading-relaxed px-4">
            Everything you need to manage your life insurance business in one powerful, purpose-built platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#2C66FF]/50 to-transparent"></div>

          {productFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/6 backdrop-blur-xl border border-white/12 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/25 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2C66FF]/20 group relative"
            >
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2C66FF] rounded-full border-4 border-[#0B0F14] group-hover:scale-125 transition-transform"></div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">{feature.title}</h3>
              <p className="text-[#A8B3C7] text-sm sm:text-base text-center mb-4 sm:mb-6 leading-relaxed">{feature.description}</p>

              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#A8B3C7] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;