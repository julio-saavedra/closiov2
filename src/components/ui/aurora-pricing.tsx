import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type BillingCycle = "monthly" | "yearly";

const plans = [
  {
    name: "Agent",
    price: { monthly: 19, yearly: 190 },
    description: "Individual Agent",
    features: [
      "Personal pipeline management",
      "Basic automation workflows",
      "Commission tracking",
      "Mobile app access",
      "Email support"
    ],
    isFeatured: false,
  },
  {
    name: "Team",
    price: { monthly: 49, yearly: 490 },
    description: "Small Teams (5-20)",
    features: [
      "Everything in Agent",
      "Team performance dashboards",
      "Advanced automations",
      "Lead distribution",
      "Phone support"
    ],
    isFeatured: true,
  },
  {
    name: "Agency",
    price: { monthly: 99, yearly: 990 },
    description: "Full Agency",
    features: [
      "Everything in Team",
      "Agency-wide analytics",
      "Custom integrations",
      "White-label options",
      "Dedicated support"
    ],
    isFeatured: false,
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12 + 0.2, duration: 0.55, ease: "easeInOut" },
  }),
};

export default function AuroraPricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20 hidden md:block">
        <div className="absolute inset-0 blur-[110px]">
          <div className="absolute left-[8%] top-[8%] h-[520px] w-[520px] rounded-full bg-[rgba(0,128,255,0.45)] animate-[aur1_18s_ease-in-out_infinite_alternate]" />
          <div className="absolute right-[10%] bottom-[10%] h-[440px] w-[440px] rounded-full bg-[rgba(128,0,255,0.45)] animate-[aur2_22s_ease-in-out_infinite_alternate]" />
        </div>
      </div>

      <style>{`
        @keyframes aur1 { from { transform: translate(0,0) rotate(0deg); } to { transform: translate(90px, 45px) rotate(160deg); } }
        @keyframes aur2 { from { transform: translate(0,0) rotate(0deg); } to { transform: translate(-90px,-45px) rotate(-160deg); } }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
          className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white px-4"
        >
          Find the Perfect Plan
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className="mx-auto mb-8 sm:mb-10 md:mb-12 flex items-center justify-center gap-2 sm:gap-3"
        >
          <button
            type="button"
            aria-pressed={billingCycle === "monthly"}
            onClick={() => setBillingCycle("monthly")}
            className={cn(
              "text-base sm:text-lg transition-colors",
              billingCycle === "monthly" ? "text-white" : "text-gray-500"
            )}
          >
            Monthly
          </button>

          <div
            role="switch"
            aria-checked={billingCycle === "yearly"}
            aria-label="Toggle billing cycle"
            className="flex h-7 w-12 sm:h-8 sm:w-14 cursor-pointer items-center rounded-full bg-gray-700 p-1"
            onClick={() =>
              setBillingCycle((c) => (c === "monthly" ? "yearly" : "monthly"))
            }
          >
            <motion.div
              className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#2C66FF]"
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              style={{ marginLeft: billingCycle === "yearly" ? "auto" : "0" }}
            />
          </div>

          <button
            type="button"
            aria-pressed={billingCycle === "yearly"}
            onClick={() => setBillingCycle("yearly")}
            className={cn(
              "text-base sm:text-lg transition-colors",
              billingCycle === "yearly" ? "text-white" : "text-gray-500"
            )}
          >
            Yearly
          </button>
          <span className="text-xs sm:text-sm font-semibold text-[#2C66FF]">(Save 20%)</span>
        </motion.div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "pricing-glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8 w-full max-w-md mx-auto md:max-w-none",
                plan.isFeatured ? "pricing-glass-card--featured" : "pricing-glass-card--default"
              )}
            >
              <div
                aria-hidden
                className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500",
                  plan.isFeatured ? "card-aurora-featured" : "card-aurora"
                )}
              />
              {plan.isFeatured && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-[#2C66FF] px-3 py-1.5 text-xs font-bold text-white">
                  MOST POPULAR
                </div>
              )}

              <div className="relative z-10 flex h-full flex-col">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-400">{plan.description}</p>

                <div className="mt-6 sm:mt-8 flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={billingCycle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        ${plan.price[billingCycle]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <span className="ml-2 text-sm sm:text-base text-gray-400">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </div>

                <ul className="mt-6 sm:mt-8 mb-8 sm:mb-10 space-y-3 sm:space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm sm:text-base text-gray-300">
                      <span className="mr-3 text-[#2C66FF]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={cn(
                    "glass-btn mt-auto",
                    plan.isFeatured ? "glass-btn--featured" : "glass-btn--default"
                  )}
                >
                  <span className="glass-btn__border" aria-hidden="true" />
                  <span className="glass-btn__inner" aria-hidden="true" />
                  <span className="glass-btn__sheen" aria-hidden="true" />
                  <span className="glass-btn__label">Choose Plan</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <style>{`
          .card-aurora, .card-aurora-featured {
            background-size: 300% 300%;
            animation: gradient-animation 10s ease infinite;
            filter: blur(50px);
          }
          .card-aurora {
            background-image: linear-gradient(45deg, #0077ff, #00ff77);
          }
          .card-aurora-featured {
            background-image: linear-gradient(45deg, #2C66FF, #2B4FB3);
          }
          [class*="card-aurora"] { transition: opacity 0.5s ease; }
          div:hover > .card-aurora,
          div:hover > .card-aurora-featured {
            opacity: 0.25;
          }
        `}</style>
      </div>
    </section>
  );
}
