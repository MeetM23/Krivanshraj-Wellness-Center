"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteData";
import { Logo } from "@/components/brand/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { toggleLanguage, isGujarati } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["hero", "approach", "archive", "testimonials", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-xs border-b border-charcoal-border/50 py-2.5 sm:py-3"
            : "bg-transparent py-3 sm:py-4 md:py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Official Supplied Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="focus:outline-none shrink-0"
              aria-label="Krivanshraj Wellness Center Home"
            >
              <Logo size="sm" variant="default" />
            </a>

            {/* Clean Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {siteConfig.navLinks.map((link) => {
                const linkId = link.href.replace("#", "");
                const isActive = activeSection === linkId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-[15px] font-sans transition-colors relative py-1 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-charcoal-muted hover:text-charcoal font-medium"
                    }`}
                  >
                    {isGujarati ? link.gujaratiName : link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Header Action: Language Pill & Prominent Consultation CTA (Desktop lg+) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={toggleLanguage}
                aria-label="Toggle Gujarati and English language"
                className="flex items-center gap-1.5 px-3 py-1.5 min-h-[40px] rounded-full border border-charcoal-border/80 text-xs font-sans font-medium text-charcoal hover:border-primary hover:text-primary transition-colors bg-white shadow-xs"
              >
                <Globe className="w-3.5 h-3.5 text-sage-dark" />
                <span>{isGujarati ? "English" : "ગુજરાતી"}</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn-primary !py-2.5 !px-5 text-sm font-semibold uppercase tracking-wider min-h-[42px]"
              >
                <span>{isGujarati ? "કન્સલ્ટેશન બુક કરો" : "Book Consultation"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Mobile Menu & Language Switch - Minimum 44px Touch Targets */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <button
                onClick={toggleLanguage}
                aria-label="Toggle Language"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-xs font-sans font-semibold rounded-full border border-charcoal-border bg-white text-charcoal shadow-xs active:bg-black/5"
              >
                {isGujarati ? "EN" : "ગુજ"}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-charcoal hover:bg-black/5 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop blur with tap-to-close */}
          <div
            className="fixed inset-0 bg-charcoal/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-ivory shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-200 border-l border-charcoal-border/50">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-charcoal-border/40">
                <Logo size="sm" variant="default" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-black/5 text-charcoal transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links with large 48px touch targets */}
              <div className="flex flex-col space-y-1 pt-4">
                {siteConfig.navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="min-h-[48px] flex items-center text-base font-poppins font-medium text-charcoal hover:text-primary active:bg-sage-soft/50 rounded-xl px-3 transition-colors"
                  >
                    {isGujarati ? link.gujaratiName : link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 border-t border-charcoal-border/40 space-y-3">
              <button
                onClick={toggleLanguage}
                className="w-full min-h-[46px] rounded-xl border border-charcoal-border flex items-center justify-center gap-2 text-sm font-medium text-charcoal bg-white shadow-xs"
              >
                <Globe className="w-4 h-4 text-sage-dark" />
                <span>{isGujarati ? "Switch to English" : "ગુજરાતી ભાષા પસંદ કરો"}</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full btn-primary min-h-[50px] text-xs uppercase tracking-wider justify-center"
              >
                <span>{isGujarati ? "કન્સલ્ટેશન બુક કરો" : "Book a Consultation"}</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </a>

              <div className="text-center pt-2">
                <span className="text-[11px] text-charcoal-subtle font-light">
                  Aakhlol Jakatnaka, Bhavnagar • +91 76238 13787
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
