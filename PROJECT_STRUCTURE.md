# KRIVANSHRAJ Wellness Center – Architecture & Structural Documentation

A complete, production-quality, responsive web application engineered for **Krivanshraj Wellness Center** by Coach Gohil Pritiba Siddhraj Sinh in Bhavnagar, Gujarat.

---

## 1. Brand Identity System
- **Brand Name**: KRIVANSHRAJ Wellness Center (ક્રિવાંશરાજ વેલનેસ સેન્ટર)
- **Founder & Coach**: Gohil Pritiba Siddhraj Sinh (ગોહિલ પ્રીતિબા સિદ્ધરાજ સિંહ)
- **Wordmark**: Custom editorial typography with proportional letter-spacing (`Poppins`).
- **Vitality Emblem**: Concentric balance circle with upward vitality droplet, botanical sprout, and terracotta vitality core.
- **Palette**:
  - `Primary`: Deep Forest Green (`#234B3A`) — evokes natural health, renewal, and calm authority.
  - `Secondary / Foliage`: Sage Green (`#A7B9A1`) — balances structure with soft natural tone.
  - `Background`: Warm Ivory (`#F8F7F1`) — soothing editorial canvas avoiding harsh digital whites.
  - `Accent`: Muted Terracotta (`#C68C72`) — warm human touch for energy points & call-to-actions.
  - `Text`: Deep Charcoal (`#252A26`) — high-contrast readability without black fatigue.

---

## 2. Directory Structure & Organization

```
Krivanshraj Wellness Center/
├── app/                              # Next.js 14 App Router
│   ├── layout.tsx                    # Root layout, fonts, metadata, language provider
│   ├── page.tsx                      # Primary home landing experience
│   ├── globals.css                   # Custom styles, theme tokens, slider UI
│   ├── not-found.tsx                 # Custom 404 page
│   ├── robots.ts                     # SEO robots configuration
│   ├── sitemap.ts                    # Dynamic sitemap configuration
│   ├── about/
│   │   └── page.tsx                  # Dedicated Founder & Philosophy route
│   ├── transformations/
│   │   └── page.tsx                  # Dedicated Transformation Showcase route
│   ├── gallery/
│   │   └── page.tsx                  # Filterable Media Gallery route
│   └── contact/
│       └── page.tsx                  # Contact & In-person / Online Consultation route
├── components/
│   ├── brand/
│   │   └── Logo.tsx                  # Responsive wordmark + emblem (light & dark modes)
│   ├── layout/
│   │   ├── Navbar.tsx                # Sticky header, bilingual switcher, mobile drawer
│   │   └── Footer.tsx                # Brand signature, hours, address, disclaimer, links
│   ├── sections/
│   │   ├── Hero.tsx                  # Editorial hero with trust badges & CTAs
│   │   ├── AboutFounder.tsx          # Coach Gohil Pritiba profile & personal transformation modal
│   │   ├── WellnessApproach.tsx      # 4-step framework & 4 core pillars of sustainable health
│   │   ├── BeforeAfterSlider.tsx     # Interactive drag-to-compare transformation studio
│   │   ├── TransformationShowcase.tsx# 8 categorized journeys + lightbox + medical disclaimer
│   │   ├── Testimonials.tsx          # Grounded, genuine client feedback
│   │   ├── FAQSection.tsx            # Clear answers on routines, online coaching & personalization
│   │   └── ContactSection.tsx        # Phone (+91 76238 13787), WhatsApp integration, Bhavnagar address
│   └── ui/
│       └── WhatsAppFloatingButton.tsx# Interactive floating WhatsApp contact button
├── context/
│   └── LanguageContext.tsx           # Bilingual state provider (English ↔ ગુજરાતી)
├── data/
│   ├── siteData.ts                   # Centralized configuration & contact records
│   ├── transformations.ts            # 8 verified client journeys, stats, quotes & categories
│   ├── founderNotes.ts               # Founder personal journey, statements & translations
│   ├── testimonials.ts               # Verified client feedback
│   └── faq.ts                        # Frequently asked questions
├── public/
│   ├── favicon.svg                   # Brand favicon (SVG)
│   ├── favicon.png                   # Brand favicon (PNG)
│   └── images/
│       ├── brand/                    # Brand assets & Coach Pritiba portrait/proof
│       ├── notes/                    # Founder documentation
│       └── transformations/          # 8 verified client transformation photographs
├── start-dev.bat                     # 1-click double-clickable Dev server launcher
├── start-prod.bat                    # 1-click double-clickable Production server launcher
├── preview.html                      # Zero-dependency, standalone instant browser preview
├── package.json                      # Next.js 14, React 18, Tailwind, Lucide React
├── tailwind.config.ts                # Brand tokens & theme extensions
├── tsconfig.json                     # TypeScript compiler configuration
└── next.config.js                    # Next.js configuration
```

---

## 3. Verified Coach Information & Bhavnagar Center Truth

1. **Coach / Founder**: Gohil Pritiba Siddhraj Sinh (ગોહિલ પ્રીતિબા સિદ્ધરાજ સિંહ)
2. **Title / Role**: Certified Wellness Coach & Lifestyle Mentor (વેલનેસ કોચ | આરોગ્ય અને જીવનશૈલી માર્ગદર્શક)
3. **Primary Contact / WhatsApp**: `+91 76238 13787`
4. **Physical Location**: Aakhlol Jakatnaka, Opposite 369 Hotel, Darbargadh, Bhavnagar - 364002, Gujarat.
   - Gujarati: આખલોલ જકાતનાકા, ૩૬૯ હોટલની સામે, દરબારગઢ, ભાવનગર - ૩૬૪૦૦૨
5. **Services Provided**:
   - Online Health Coaching (ઓનલાઇન હેલ્થ કોચિંગ)
   - In-Center 1-on-1 Consultations in Bhavnagar
   - Personalized Nutrition & Habit Architecture
   - Visceral Fat Loss & Inch Reduction
   - Convalescent Health & Weight Gain
   - Pediatric Wellness & Allergy Nutrition
6. **Core Statements**:
   - *"સારું સ્વાસ્થ્ય સુખી જીવનનો પાયો છે."* (Good health is the foundation of a happy life.)
   - *"સ્વાસ્થ્ય એ જ સાચી સંપત્તિ છે."* (Health is true wealth.)
   - *"સ્વસ્થ વ્યક્તિ, સુખી પરિવાર અને તંદુરસ્ત જીવનનું નિર્માણ."* (Building healthy individuals, happy families, and vibrant lives.)

---

## 4. 8 Verified Client Transformation Case Files

1. **Journey 1: Coach Gohil Pritiba Personal Milestone (-19 kg)**
   - *Result*: 84 kg → 65 kg (-19 kg reduction). Body aches relieved, energy restored.
2. **Journey 2: 20 kg Weight Loss Milestone (78 kg → 58 kg)**
   - *Result*: 20 kg reduction achieved without starvation diets, retaining lean energy and tone.
3. **Journey 3: Men's Abdominal & Visceral Fat Loss**
   - *Result*: Noticeable abdominal bulk reduction, corrected posture, youthful stamina.
4. **Journey 4: Hospital Recovery to 55 kg (+10 kg Healthy Gain)**
   - *Result*: Underweight convalescent state (45 kg) rebuilt to a robust, energized 55 kg.
5. **Journey 5: Hetalba Rajput Chronic Skin Allergy Relief**
   - *Result*: Severe full-body itching since age 7 relieved within 4 months of cellular nutrition.
6. **Journey 6: Pediatric Wellness & Allergy Relief**
   - *Result*: Childhood skin itching, dust allergy, and frequent urination normalized.
7. **Journey 7: Cellular Nutrition for Skin Pigmentation & Vitiligo**
   - *Result*: Skin tone evening out and cellular health improvement.
8. **Journey 8: Eye & Facial Cellular Vitality**
   - *Result*: Eye freshness and facial radiance restored through proper hydration and antioxidant nutrition.

---

## 5. How to Run

### Option A: Instant Standalone Preview
Double-click `preview.html` to inspect the full design, interactive slider, filterable gallery, and bilingual toggle directly in Chrome, Edge, or Safari without installing anything.

### Option B: Next.js Live Development Server
Double-click `start-dev.bat` or run:
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

