"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { faqs } from "@/data/faq";
import { ChevronDown } from "lucide-react";
import { MandalaCornerAccent } from "@/components/ui/BotanicalDecorations";

export const FAQSection: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-charcoal-border/40 relative overflow-hidden">
      {/* Subtle mandala background accent */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 text-primary pointer-events-none hidden lg:block" aria-hidden="true">
        <MandalaCornerAccent className="w-56 h-56 text-primary" opacity={0.05} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Global Typography System */}
        <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-label text-terracotta">
            {isGujarati ? "સામાન્ય પ્રશ્નો" : "Frequently Asked Questions"}
          </span>
          <h2 className="heading-section mt-1.5 sm:mt-2">
            {isGujarati ? (
              <>
                સ્વાસ્થ્ય યાત્રા અંગેના{" "}
                <span className="text-primary font-semibold">મહત્વના પ્રશ્નો</span>
              </>
            ) : (
              <>
                Clear Answers for Your{" "}
                <span className="text-primary font-semibold">Wellness Journey.</span>
              </>
            )}
          </h2>
          <p className="text-subtitle mt-2 sm:mt-3">
            {isGujarati
              ? "અમારા આહાર, ઓનલાઇન કન્સલ્ટેશન અને પર્સનલ કોચિંગ અંગે સામાન્ય રીતે પૂછાતા પ્રશ્નોના જવાબો."
              : "Everything you need to know about starting your personalized nutrition and lifestyle routine with Coach Pritiba."}
          </p>
        </div>

        {/* Minimal Accessible Accordion */}
        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-charcoal-border/70 overflow-hidden bg-ivory/50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-4 sm:px-5 py-4 min-h-[52px] text-left flex items-center justify-between gap-3 font-poppins text-xs sm:text-base font-medium text-charcoal hover:text-primary transition-colors focus:outline-none"
                >
                  <span className="leading-snug">{isGujarati ? faq.gujaratiQuestion : faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-charcoal-subtle transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light border-t border-charcoal-border/30 animate-in fade-in duration-150">
                    {isGujarati ? faq.gujaratiAnswer : faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
