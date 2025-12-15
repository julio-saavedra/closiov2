import React from 'react';

const CompanyLogos = React.memo(() => {
  const placeholderCount = 8;

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm sm:text-base font-semibold text-gray-400 uppercase tracking-wider mb-8 sm:mb-10 md:mb-12">
          Agencies We Work With
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              key={index}
              className="h-12 w-32 sm:h-14 sm:w-36 md:h-16 md:w-40 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-neutral-400 text-xs sm:text-sm transition-all duration-200 hover:bg-white/8 hover:border-white/20"
            >
              Placeholder
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

CompanyLogos.displayName = 'CompanyLogos';

export default CompanyLogos;
