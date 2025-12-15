import React from 'react';

const KPIWall: React.FC = () => {
  return (
    <section
      id="financial-tracker"
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-transparent"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Built-in Financial Tracker
            </h2>
            <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-slate-300">
              Keep track of all of your lead spend, everyday bills, and more with Closio&apos;s built-in finance tracker.&nbsp;
              <span className="text-[#2C66FF] font-semibold">Powered by Orovian.</span>
            </p>
          </div>

          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start space-x-3 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#A8B3C7] text-xs sm:text-sm text-left">Tracks monthly &amp; yearly lead spend</p>
            </li>
            <li className="flex items-start space-x-3 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#A8B3C7] text-xs sm:text-sm text-left">Stay on top of monthly bills and debts</p>
            </li>
            <li className="flex items-start space-x-3 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#A8B3C7] text-xs sm:text-sm text-left">Keep up with your favorite stocks and cryptocurrencies</p>
            </li>
            <li className="flex items-start space-x-3 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-[#2C66FF] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[#A8B3C7] text-xs sm:text-sm text-left">No more confusion and stress</p>
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN: VIDEO PREVIEW BOX */}
        <div className="w-full lg:w-1/2">
          <div
            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/60
                       shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl glow-hover"
          >
            {/* Soft gradient in the background for depth */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.35),transparent_60%)] opacity-70" />

            {/* VIDEO PLACEHOLDER */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-slate-200 border border-white/10">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Financial Tracker · Preview</span>
              </div>
              <button
                type="button"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg shadow-black/50 hover:bg-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="px-4 sm:px-6 text-center text-xs sm:text-sm text-slate-300/80">
                Drop in a short product video or screen recording of Closio&apos;s finance tracker here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KPIWall;
