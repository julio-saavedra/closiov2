import React, { useState } from 'react';

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How is pricing structured?',
      answer: 'Closio uses a simple per-seat pricing model. We offer three tiers: Agent (individual), Team (5-20 users), and Agency (unlimited). Pricing is transparent with no hidden fees, and we offer volume discounts for agencies with 20+ seats. Contact us for a custom quote based on your specific needs.'
    },
    {
      question: 'What security measures are in place?',
      answer: 'Security is our top priority. We use AES-256 encryption for data at rest and in transit, implement role-based access controls, maintain audit logs, perform daily backups, and are working toward SOC 2 compliance. All data is stored in secure US-based data centers with 99.9% uptime guarantees.'
    },
    {
      question: 'Are automations really built-in?',
      answer: 'Yes! Unlike other CRMs that require third-party integrations, all our automation tools are native to the platform. This includes task automation, workflow triggers, reminders, and policy tracking. No additional subscriptions, no external APIs to manage, and no integration headaches.'
    },
    {
      question: 'How quickly can we get onboarded?',
      answer: 'Most agencies are up and running within 1-2 weeks. Our onboarding process includes data migration, team training, workflow setup, and optimization. We provide dedicated onboarding specialists and comprehensive training materials to ensure your team is productive from day one.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer multiple support channels including email, phone, and chat support. Agent tier includes email support, Team tier adds phone support, and Agency tier includes dedicated account management. We also provide comprehensive documentation, video tutorials, and regular training webinars.'
    },
    {
      question: 'Who owns the data?',
      answer: 'You do. Your data belongs to you, and you can export it at any time in standard formats. We never sell or share your data with third parties. If you decide to leave Closio, we provide full data export assistance to ensure a smooth transition.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-[calc(100vw-12rem)] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3]">Answers</span>
          </h2>
          <p className="text-xl text-[#A8B3C7] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Closio, answered by our team
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="info-card info-card--outline info-card--hover overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-base font-semibold pr-4">{faq.question}</h3>
                <div className="flex-shrink-0 text-[#2C66FF] text-lg">
                  {openIndex === index ? '−' : '+'}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-4">
                  <div className="border-t border-white/12 pt-4">
                    <p className="text-[#A8B3C7] leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#A8B3C7] mb-4">Still have questions?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#2C66FF] hover:text-[#2B4FB3] font-semibold underline hover:no-underline"
          >
            Get in touch with our team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;