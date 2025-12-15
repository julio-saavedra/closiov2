import React from 'react';

const PricingRow: React.FC = () => {
  const plans = [
    {
      title: 'Agent',
      subtitle: 'Individual Agent',
      features: [
        'Personal pipeline management',
        'Basic automation workflows',
        'Commission tracking',
        'Mobile app access',
        'Email support'
      ],
      cta: 'Start Free Trial'
    },
    {
      title: 'Team',
      subtitle: 'Small Teams (5-20)',
      features: [
        'Everything in Agent',
        'Team performance dashboards',
        'Advanced automations',
        'Lead distribution',
        'Phone support'
      ],
      cta: 'Book a Demo',
      popular: true
    },
    {
      title: 'Agency',
      subtitle: 'Full Agency',
      features: [
        'Everything in Team',
        'Agency-wide analytics',
        'Custom integrations',
        'White-label options',
        'Dedicated support'
      ],
      cta: 'Contact Sales'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-transparent to-[#1A1F2E]/30">
      <div className="max-w-[calc(100vw-12rem)] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple Seats. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3]">
              Powerful Features.
            </span>
          </h2>
          <p className="text-xl text-[#A8B3C7] max-w-3xl mx-auto leading-relaxed">
            Choose the plan that scales with your agency's growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/6 backdrop-blur-xl border rounded-2xl p-8 hover:bg-white/8 hover:scale-105 transition-all duration-300 ${
                plan.popular 
                  ? 'border-[#2C66FF] shadow-lg shadow-[#2C66FF]/20' 
                  : 'border-white/12 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-[#A8B3C7]">{plan.subtitle}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <span className="text-[#2C66FF] flex-shrink-0">✓</span>
                    <span className="text-[#A8B3C7] text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg font-semibold transition-all hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3] text-white shadow-lg hover:shadow-xl'
                    : 'border border-white/20 hover:border-[#2C66FF] text-[#A8B3C7] hover:text-white hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#A8B3C7] mb-4">
            Need 20+ seats? We offer volume pricing for larger agencies.
          </p>
          <button
            onClick={scrollToContact}
            className="text-[#2C66FF] hover:text-[#2B4FB3] font-semibold underline hover:no-underline"
          >
            Contact us for enterprise pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingRow;