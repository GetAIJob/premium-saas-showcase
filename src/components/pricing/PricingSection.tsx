import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { pricing, type Tier } from "../../lib/content";

type Billing = "monthly" | "yearly";

function priceLabel(tier: Tier, billing: Billing) {
  const v = billing === "monthly" ? tier.monthly : tier.yearly;
  if (v === "custom") return "Custom";
  return `$${v}`;
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4 text-cyan-300 flex-none mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10l4 4 8-8" />
    </svg>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <section id="pricing" className="section relative">
      <div className="container-page">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14 reveal">
          <span className="eyebrow">
            <span className="w-1 h-1 rounded-full bg-cyan-300"></span>
            Pricing
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-[-0.022em] leading-[1.05]">
            Simple pricing.
            <br />
            <span className="text-gradient">Built to scale with you.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-300 max-w-xl mx-auto">
            Start free for 14 days. Cancel anytime. Upgrade when you outgrow your tier — never before.
          </p>
        </div>

        {/* Toggle */}
        <LayoutGroup>
          <div className="reveal flex justify-center mb-10">
            <div className="relative inline-flex p-1 rounded-full glass border-white/[0.08]">
              {(["monthly", "yearly"] as Billing[]).map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBilling(b)}
                  className="relative px-5 py-2 text-sm font-medium z-10 rounded-full transition-colors"
                  aria-pressed={billing === b}
                >
                  {billing === b && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 rounded-full bg-white text-[#050816]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative ${billing === b ? "text-[#050816]" : "text-slate-300"}`}>
                    {b === "monthly" ? "Monthly" : "Yearly"}
                  </span>
                  {b === "yearly" && (
                    <span className={`relative ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${billing === b ? "bg-[#050816] text-cyan-300" : "bg-cyan-400/10 text-cyan-300"}`}>
                      −20%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </LayoutGroup>

        {/* Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {pricing.map((tier, i) => (
            <article
              key={tier.name}
              className={`reveal relative rounded-2xl p-7 md:p-8 transition-all duration-500 ${
                tier.highlight
                  ? "bg-white/[0.04] border border-transparent hover:-translate-y-1"
                  : "glass hover:border-white/[0.16] hover:-translate-y-1"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Highlighted gradient border */}
              {tier.highlight && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-indigo-400/60 via-blue-400/40 to-cyan-300/60"
                  style={{
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              )}

              <div className="relative">
                {tier.highlight && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-4 rounded-full text-[11px] font-semibold tracking-wide bg-gradient-brand text-[#050816]">
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="currentColor"><path d="M6 0l1.6 4.2L12 4.6 8.6 7.4 9.8 12 6 9.6 2.2 12l1.2-4.6L0 4.6l4.4-.4z"/></svg>
                    Most popular
                  </div>
                )}

                <h3 className="text-xl font-display font-semibold tracking-tight">{tier.name}</h3>
                <p className="mt-1.5 text-sm text-slate-400 min-h-[2.6rem]">{tier.description}</p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={billing + tier.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="text-5xl font-display font-semibold tracking-[-0.03em]"
                    >
                      {priceLabel(tier, billing)}
                    </motion.span>
                  </AnimatePresence>
                  {typeof (billing === "monthly" ? tier.monthly : tier.yearly) === "number" && (
                    <span className="text-sm text-slate-500">/ user / mo</span>
                  )}
                </div>
                {billing === "yearly" && typeof tier.yearly === "number" && (
                  <div className="mt-1 text-xs text-slate-500">billed annually</div>
                )}

                <a
                  href="#"
                  className={`mt-6 block text-center ${tier.highlight ? "btn-primary" : "btn-ghost"}`}
                >
                  {tier.cta}
                </a>

                <ul className="mt-7 space-y-3 text-sm text-slate-300">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal text-center text-sm text-slate-500 mt-10">
          All plans include unlimited team members, GitHub login, and email support.
        </p>
      </div>
    </section>
  );
}
