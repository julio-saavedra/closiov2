import React from 'react';

const ComparisonTable: React.FC = () => {
  const features = [
    {
      feature: 'Built for Life Insurance',
      closio: true,
      generic: false,
      description: 'Industry-specific workflows and terminology'
    },
    {
      feature: 'Commission Tracking',
      closio: true,
      generic: false,
      description: 'Automated commission calculations and splits'
    },
    {
      feature: 'Agent Hierarchy Management',
      closio: true,
      generic: 'Limited',
      description: 'Multi-level agent organization and permissions'
    },
    {
      feature: 'Issue Paid Tracking',
      closio: true,
      generic: false,
      description: 'Life insurance specific pipeline stages'
    },
    {
      feature: 'Carrier Integration Ready',
      closio: true,
      generic: false,
      description: 'Pre-built for life insurance carriers'
    },
    {
      feature: 'Persistency Analytics',
      closio: true,
      generic: false,
      description: 'Policy retention and lapse tracking'
    }
  ];

  const renderFeatureStatus = (status: boolean | string) => {
    if (status === true) {
      return (
        <span className="inline-flex items-center justify-center text-green-400 text-lg font-semibold drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">
          ✓
        </span>
      );
    } else if (status === false) {
      return (
        <span className="inline-flex items-center justify-center text-red-400 text-lg font-semibold drop-shadow-[0_0_8px_rgba(248,113,113,0.4)]">
          ✕
        </span>
      );
    } else {
      return <span className="text-[#A8B3C7] text-sm font-normal">{status}</span>;
    }
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-transparent">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5">
            Closio vs <span className="text-[#A8B3C7]">Generic CRMs</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            See why purpose-built beats one-size-fits-all every time
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-slate-900/60 shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.15),transparent_55%)] opacity-60" />

          <div className="relative">
            <div className="hidden md:block">
              <div className="grid grid-cols-[2fr_1fr_1fr_2fr] gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
                <div className="text-sm font-medium text-white/90">Feature</div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3]">
                    Closio
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-[#A8B3C7]">
                    Generic CRMs
                  </div>
                </div>
                <div className="text-sm font-medium text-white/90">Why It Matters</div>
              </div>

              {features.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-[2fr_1fr_1fr_2fr] gap-3 px-5 py-3.5 hover:bg-white/5 transition-colors ${
                    index !== features.length - 1 ? 'border-b border-white/6' : ''
                  }`}
                >
                  <div className="text-sm font-normal text-white/95 flex items-center">{item.feature}</div>
                  <div className="flex justify-center items-center">
                    {renderFeatureStatus(item.closio)}
                  </div>
                  <div className="flex justify-center items-center">
                    {renderFeatureStatus(item.generic)}
                  </div>
                  <div className="text-sm text-slate-300 flex items-center">{item.description}</div>
                </div>
              ))}
            </div>

            <div className="md:hidden space-y-3 p-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/8 bg-white/5 p-4 space-y-3"
                >
                  <div className="font-medium text-white text-sm">{item.feature}</div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#A8B3C7]">Closio:</span>
                      {renderFeatureStatus(item.closio)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#A8B3C7]">Others:</span>
                      {renderFeatureStatus(item.generic)}
                    </div>
                  </div>
                  <div className="text-xs text-slate-300 pt-2 border-t border-white/6">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3] p-6 sm:p-8 shadow-[0_12px_40px_rgba(44,102,255,0.3)]">
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">The Bottom Line</h3>
              <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 text-white/90 max-w-2xl mx-auto">
                Stop wrestling with generic tools. Get a CRM that actually understands life insurance.
              </p>
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#2C66FF] rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg text-sm sm:text-base">
                See Closio in Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;