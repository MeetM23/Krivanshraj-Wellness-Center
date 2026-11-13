export interface TransformationItem {
  id: string;
  title: string;
  gujaratiTitle: string;
  category: "weight-loss" | "weight-management" | "lifestyle" | "vitality";
  categoryLabel: string;
  gujaratiCategoryLabel: string;
  image: string; // Combined composite fallback
  beforeImage: string; // Clean sliced Before photo
  afterImage: string; // Clean sliced After photo
  startingMeasurement?: {
    labelEn: string;
    labelGu: string;
    valueEn: string;
    valueGu: string;
  };
  achievedMeasurement?: {
    labelEn: string;
    labelGu: string;
    valueEn: string;
    valueGu: string;
  };
  highlightResult: {
    en: string;
    gu: string;
  };
  featured: boolean;
  verifiedDuration?: string;
  stats: {
    label: string;
    value: string;
  }[];
  verifiedQuoteGujarati?: string;
  verifiedQuoteEnglish?: string;
  description: string;
  gujaratiDescription: string;
  approvedForPublicDisplay: boolean;
  disclaimer: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const transformations: TransformationItem[] = [
  {
    id: "journey-01-pritiba-fatloss-19kg",
    title: "19 kg Weight & Fat Loss: 84 kg to 65 kg",
    gujaratiTitle: "૮૪ કિલો થી ૬૫ કિલો – ૧૯ કિલો વજન અને ફેટ લોસ",
    category: "weight-loss",
    categoryLabel: "Weight Loss & Energy",
    gujaratiCategoryLabel: "વજન ઘટાડો અને ઊર્જા",
    image: "/images/transformations/transformation-1-pritiba-fatloss-19kg.jpg",
    beforeImage: "/images/transformations/split/transformation-1-pritiba-fatloss-19kg-before.jpg",
    afterImage: "/images/transformations/split/transformation-1-pritiba-fatloss-19kg-after.jpg",
    startingMeasurement: {
      labelEn: "Starting Weight",
      labelGu: "શરૂઆતનું વજન",
      valueEn: "84 kg",
      valueGu: "૮૪ કિલો"
    },
    achievedMeasurement: {
      labelEn: "Achieved Weight",
      labelGu: "મેળવેલ વજન",
      valueEn: "65 kg",
      valueGu: "૬૫ કિલો"
    },
    highlightResult: {
      en: "-19 kg Total Lost",
      gu: "-૧૯ કિલો ઘટાડો"
    },
    featured: true,
    verifiedDuration: "Guided Personal Program",
    stats: [
      { label: "Starting Weight", value: "84 kg" },
      { label: "Achieved Weight", value: "65 kg" },
      { label: "Total Reduction", value: "-19 kg" },
      { label: "Daily Energy", value: "All-Day Active" }
    ],
    verifiedQuoteGujarati: "૮૪ કિલોથી ૬૫ કિલો સુધી પહોંચીને ૧૯ કિલો વજન અને વધારાની ચરબી ઘટાડી. શરીરમાં સ્ફૂર્તિ, હળવાશ અને આત્મવિશ્વાસ પાછો આવ્યો.",
    verifiedQuoteEnglish: "Reduced 19 kg of excess weight and body fat, dropping from 84 kg to 65 kg with sustained energy, lightness, and daily confidence.",
    description: "An inspiring personal wellness journey demonstrating sustainable fat loss from 84 kg down to a healthy 65 kg. Achieved with clean dietary rhythm, balanced hydration, and consistent coaching without extreme starvation.",
    gujaratiDescription: "૮૪ કિલો થી ૬૫ કિલો સુધીનું પ્રેરક પરિવર્તન. યોગ્ય આહાર, પાણીનું સંતુલન અને નિયમિત માર્ગદર્શન દ્વારા ૧૯ કિલો વજન ઘટાડીને શરીર ફિટ અને ઊર્જાવાન બન્યું.",
    approvedForPublicDisplay: true,
    disclaimer: "Results may vary from person to person based on consistency and individual physiology.",
    beforeLabel: "Before: 84 kg",
    afterLabel: "After: 65 kg"
  },
  {
    id: "journey-02-weightloss-20kg",
    title: "20 kg Milestone: 78 kg to 58 kg Transformation",
    gujaratiTitle: "૭૮ કિલો થી ૫૮ કિલો – ૨૦ કિલો વજન ઘટાડાની સફર",
    category: "weight-loss",
    categoryLabel: "Weight Loss Journeys",
    gujaratiCategoryLabel: "વજન ઘટાડાની સફર",
    image: "/images/transformations/transformation-2-weightloss-20kg.jpg",
    beforeImage: "/images/transformations/split/transformation-2-weightloss-20kg-before.jpg",
    afterImage: "/images/transformations/split/transformation-2-weightloss-20kg-after.jpg",
    startingMeasurement: {
      labelEn: "Starting Weight",
      labelGu: "શરૂઆતનું વજન",
      valueEn: "78 kg",
      valueGu: "૭૮ કિલો"
    },
    achievedMeasurement: {
      labelEn: "Achieved Weight",
      labelGu: "મેળવેલ વજન",
      valueEn: "58 kg",
      valueGu: "૫૮ કિલો"
    },
    highlightResult: {
      en: "-20 kg Milestone",
      gu: "-૨૦ કિલો સફળતા"
    },
    featured: true,
    verifiedDuration: "Structured Nutrition Journey",
    stats: [
      { label: "Starting Weight", value: "78 kg" },
      { label: "Achieved Weight", value: "58 kg" },
      { label: "Total Reduction", value: "-20 kg" },
      { label: "Lifestyle Change", value: "Sustainable Routine" }
    ],
    verifiedQuoteEnglish: "Transforming 20 kg without restrictive starvation, building strength, lightness, and lasting daily confidence.",
    verifiedQuoteGujarati: "કોઈ કડક ભૂખમરા વગર યોગ્ય પોષણ સાથે ૨૦ કિલો વજન ઘટાડીને નવું આત્મવિશ્વાસભર્યું જીવન મેળવ્યું.",
    description: "An inspiring feminine transformation journey dropping from 78 kg down to a healthy 58 kg. Achieved with clean dietary rhythm, portion education, and coach accountability without skipping family meals.",
    gujaratiDescription: "૭૮ કિલોથી ૫૮ કિલો સુધીનું પરિવર્તન. યોગ્ય ખાનપાનની આદતો અને નિયમિત કોચિંગ દ્વારા ૨૦ કિલો વજન ઘટાડ્યું.",
    approvedForPublicDisplay: true,
    disclaimer: "IT MAY VARY FROM PERSON TO PERSON. વ્યક્તિદીઠ રિઝલ્ટ અલગ અલગ હોય છે.",
    beforeLabel: "Before: 78 kg",
    afterLabel: "After: 58 kg"
  },
  {
    id: "journey-03-mens-fatloss",
    title: "Abdominal & Visceral Fat Loss: Posture & Waistline",
    gujaratiTitle: "પેટની ચરબી અને કમર ઘટાડો – પુરુષો માટે ફિટનેસ પરિવર્તન",
    category: "weight-loss",
    categoryLabel: "Visceral Fat & Posture",
    gujaratiCategoryLabel: "હાનિકારક ફેટ અને કમર ઘટાડો",
    image: "/images/transformations/transformation-3-mens-fatloss.jpg",
    beforeImage: "/images/transformations/split/transformation-3-mens-fatloss-before.jpg",
    afterImage: "/images/transformations/split/transformation-3-mens-fatloss-after.jpg",
    startingMeasurement: {
      labelEn: "Starting Posture",
      labelGu: "શરૂઆતની સ્થિતિ",
      valueEn: "Visceral Bulk",
      valueGu: "પેટની ચરબી"
    },
    achievedMeasurement: {
      labelEn: "Current Waist",
      labelGu: "હાલની કમર",
      valueEn: "Inches Lost",
      valueGu: "ઈંચ ઘટાડો"
    },
    highlightResult: {
      en: "Posture & Fit Restored",
      gu: "સ્લીમ ફિટ અને સ્ફૂર્તિ"
    },
    featured: true,
    verifiedDuration: "Personalized Coaching",
    stats: [
      { label: "Abdominal Bulk", value: "Noticeably Reduced" },
      { label: "Waistline", value: "Inches Reduced" },
      { label: "Posture & Fit", value: "Slim & Confident" },
      { label: "Stamina", value: "All-Day Active" }
    ],
    verifiedQuoteEnglish: "Targeted visceral fat reduction, improved posture, and regained youthful physical stamina through disciplined daily guidance.",
    verifiedQuoteGujarati: "વ્યક્તિ દીઠ રિઝલ્ટ અલગ અલગ હોય શકે છે. પેટની ચરબી ઘટી, શરીર હળવું થયું અને રોજિંદા કામોમાં સ્ફૂર્તિ વધી.",
    description: "Targeted posture and abdominal contour improvement. By swapping unhealthy habits with structured nutrient timing, the client shed excess abdominal bulk and regained youthful vitality.",
    gujaratiDescription: "પેટની વધારાની ચરબી દૂર થઈ, શરીરના પોશ્ચરમાં સુધારો થયો અને આખો દિવસ ઊર્જાવાન રહેવાની નવી ટેવ પડી.",
    approvedForPublicDisplay: true,
    disclaimer: "વ્યક્તિ દીઠ રિઝલ્ટ અલગ અલગ હોય શકે છે. Results may vary from person to person.",
    beforeLabel: "Before Program",
    afterLabel: "After Guidance"
  },
  {
    id: "journey-04-recovery-gain",
    title: "Hospital Recovery to 55 kg: Healthy Weight Gain",
    gujaratiTitle: "હોસ્પિટલ રિકવરી થી ૫૫ કિલો – સ્વસ્થ વજન વધારો",
    category: "weight-management",
    categoryLabel: "Recovery & Healthy Gain",
    gujaratiCategoryLabel: "રિકવરી અને વજન વધારો",
    image: "/images/transformations/transformation-4-recovery-gain.jpg",
    beforeImage: "/images/transformations/split/transformation-4-recovery-gain-before.jpg",
    afterImage: "/images/transformations/split/transformation-4-recovery-gain-after.jpg",
    startingMeasurement: {
      labelEn: "Convalescent Weight",
      labelGu: "બીમારી બાદ વજન",
      valueEn: "45 kg",
      valueGu: "૪૫ કિલો"
    },
    achievedMeasurement: {
      labelEn: "Healthy Rebuilt Weight",
      labelGu: "સ્વસ્થ વજન",
      valueEn: "55 kg",
      valueGu: "૫૫ કિલો"
    },
    highlightResult: {
      en: "+10 kg Healthy Gain",
      gu: "+૧૦ કિલો સ્વસ્થ વધારો"
    },
    featured: true,
    verifiedDuration: "Recovery & Rebuilding",
    stats: [
      { label: "Starting (Recovery)", value: "45 kg" },
      { label: "Healthy Weight", value: "55 kg" },
      { label: "Healthy Gain", value: "+10 kg" },
      { label: "Vitality Stage", value: "Full Recovery" }
    ],
    verifiedQuoteGujarati: "વ્યક્તિદીઠ રિઝલ્ટ અલગ અલગ હોય છે. નબળાઈમાંથી બહાર આવીને ૪૫ કિલો થી ૫૫ કિલો તંદુરસ્ત વજન પ્રાપ્ત કર્યું.",
    verifiedQuoteEnglish: "Rebuilding strength and lean healthy weight after hospital convalescence, moving from 45 kg to a robust 55 kg.",
    description: "Wellness is not only about losing weight; it is equally about rebuilding undernourished bodies. This client progressed from post-illness hospital bed weakness (45 kg) to a strong, energized 55 kg.",
    gujaratiDescription: "સ્વાસ્થ્ય માત્ર વજન ઘટાડવા પૂરતું નથી. નબળાઈમાંથી સ્વસ્થ બનીને ૪૫ કિલોથી ૫૫ કિલો સુધી શરીરને પુનર્જીવિત કરવાની પ્રેરક સફર.",
    approvedForPublicDisplay: true,
    disclaimer: "It may vary from person to person. વ્યક્તિદીઠ રિઝલ્ટ અલગ અલગ હોય છે.",
    beforeLabel: "Before: 45 kg (Recovery)",
    afterLabel: "After: 55 kg (Healthy & Active)"
  },
  {
    id: "journey-05-hetalba-skin-allergy",
    title: "Chronic Skin Allergy Relief After 7+ Years",
    gujaratiTitle: "હેતલબા રાજપૂત: બાળપણની ચામડીની ગંભીર ખંજવાળમાંથી મુક્તિ",
    category: "lifestyle",
    categoryLabel: "Skin & Allergy Relief",
    gujaratiCategoryLabel: "સ્કીન અને એલર્જી મુક્તિ",
    image: "/images/transformations/transformation-5-hetalba-skin-allergy.jpg",
    beforeImage: "/images/transformations/split/transformation-5-hetalba-skin-allergy-before.jpg",
    afterImage: "/images/transformations/split/transformation-5-hetalba-skin-allergy-after.jpg",
    startingMeasurement: {
      labelEn: "Condition History",
      labelGu: "તકલીફનો સમય",
      valueEn: "Since Age 7",
      valueGu: "૭ વર્ષની ઉંમરથી"
    },
    achievedMeasurement: {
      labelEn: "Program Timeline",
      labelGu: "પ્રોગ્રામ સમય",
      valueEn: "4 Months",
      valueGu: "૪ મહિના"
    },
    highlightResult: {
      en: "Severe Itching Calmed",
      gu: "ગંભીર ખંજવાળ શાંત"
    },
    featured: true,
    verifiedDuration: "4 Months Guided Nutrition",
    stats: [
      { label: "Condition History", value: "Since Age 7" },
      { label: "Program Duration", value: "4 Months" },
      { label: "Severe Itching", value: "Completely Calmed" },
      { label: "Client Satisfaction", value: "Extremely Happy" }
    ],
    verifiedQuoteGujarati: "બાળપણ માં 7 વર્ષ ના હતા ત્યાર ની આખા શરીર માં ચામડી ની આવી તકલીફ હતી ઘણી દવા લીધી ફેર નતો પડતો 4 મહિના થી આ ન્યુટ્રીશન થી ઘણો ફરક પડ્યો છે... ખંજવાળ બહુજ આવતી કાનસ્કો લઈ ને બેસવું પડતું હાલ સાવ ફરક પડી ગયો છે ખંજવાળ માં .... ખુબ ખુશ છે...",
    verifiedQuoteEnglish: "Suffered from severe full-body skin itching since age 7. Despite various medications, lasting relief came through 4 months of balanced cellular nutrition. The itching is completely calmed.",
    description: "Documenting remarkable relief from chronic dermatological itching and skin discomfort endured since age 7. Balanced micro-nutrients and cellular nourishment restored skin comfort within 4 months.",
    gujaratiDescription: "૭ વર્ષની ઉંમરથી આખા શરીરમાં ચામડીની ગંભીર ખંજવાળ અને તકલીફ હતી. ૪ મહિના યોગ્ય ન્યુટ્રીશન લેવાથી ખંજવાળમાં સંપૂર્ણ રાહત મળી અને જીવન શાંત બન્યું.",
    approvedForPublicDisplay: true,
    disclaimer: "વ્યક્તિદીઠ રિઝલ્ટ અલગ અલગ હોય છે.. Results may vary from person to person.",
    beforeLabel: "Chronic Distress (Age 7)",
    afterLabel: "After 4 Months Nutrition"
  },
  {
    id: "journey-06-child-skin-wellness",
    title: "Pediatric Wellness: Skin, Dust Allergy & Urination Relief",
    gujaratiTitle: "બાળ સ્વાસ્થ્ય: સ્કીન પ્રોબ્લેમ, ધૂળ એલર્જી અને યુરિન સમસ્યામાં સુધારો",
    category: "lifestyle",
    categoryLabel: "Pediatric & Cellular Wellness",
    gujaratiCategoryLabel: "બાળ સ્વાસ્થ્ય & પોષણ",
    image: "/images/transformations/transformation-6-child-skin-wellness.jpg",
    beforeImage: "/images/transformations/split/transformation-6-child-skin-wellness-before.jpg",
    afterImage: "/images/transformations/split/transformation-6-child-skin-wellness-after.jpg",
    startingMeasurement: {
      labelEn: "Initial Symptoms",
      labelGu: "પ્રારંભિક લક્ષણો",
      valueEn: "Allergy & Urine",
      valueGu: "એલર્જી અને યુરિન"
    },
    achievedMeasurement: {
      labelEn: "Current State",
      labelGu: "હાલની સ્થિતિ",
      valueEn: "Fully Normalized",
      valueGu: "સંપૂર્ણ સામાન્ય"
    },
    highlightResult: {
      en: "Relief & Vitality",
      gu: "રાહત અને બાળ સ્ફૂર્તિ"
    },
    featured: false,
    verifiedDuration: "Cellular Nutrition Plan",
    stats: [
      { label: "Skin Irritation", value: "Greatly Improved" },
      { label: "Dust Allergy", value: "Significantly Relieved" },
      { label: "Urination Issues", value: "Restored to Normal" },
      { label: "Child Vitality", value: "Playful & Happy" }
    ],
    verifiedQuoteGujarati: "અદ્ભુત રિઝલ્ટ! સ્કીન પ્રોબ્લેમ, ખંજવાળ, ધૂળની એલર્જી અને વધુ યુરિનની સમસ્યામાં શાનદાર સુધારો.",
    verifiedQuoteEnglish: "Wonderful outcome! Significant improvement in childhood skin distress, itching, dust allergies, and frequent urination issues.",
    description: "Proper micro-nutrient support and hydration helped calm childhood skin sensitivity, reduce airborne allergy reactions, and regulate urine frequency naturally.",
    gujaratiDescription: "બાળકની ચામડીની સમસ્યા, ખંજવાળ, ધૂળની એલર્જી અને વારંવાર પેશાબ જવાની તકલીફમાં યોગ્ય આહાર અને પોષણ દ્વારા ઉત્તમ સુધારો જોવા મળ્યો.",
    approvedForPublicDisplay: true,
    disclaimer: "Results depend on individual constitution and consistent parental care.",
    beforeLabel: "Before Care",
    afterLabel: "After Guidance"
  },
  {
    id: "journey-07-vitiligo-pigmentation",
    title: "Cellular Nutrition for Skin Pigmentation Wellness",
    gujaratiTitle: "આંતરિક પોષણ દ્વારા ત્વચાના ડાઘ અને પિગમેન્ટેશનમાં સકારાત્મક સુધારો",
    category: "lifestyle",
    categoryLabel: "Skin & Cellular Health",
    gujaratiCategoryLabel: "ત્વચા & આંતરિક પોષણ",
    image: "/images/transformations/transformation-7-vitiligo-pigmentation.jpg",
    beforeImage: "/images/transformations/split/transformation-7-vitiligo-pigmentation-before.jpg",
    afterImage: "/images/transformations/split/transformation-7-vitiligo-pigmentation-after.jpg",
    startingMeasurement: {
      labelEn: "Skin Barrier",
      labelGu: "ત્વચાની સ્થિતિ",
      valueEn: "Pigmentation Distress",
      valueGu: "ડાઘ અને પિગમેન્ટેશન"
    },
    achievedMeasurement: {
      labelEn: "Current Tone",
      labelGu: "હાલની ત્વચા",
      valueEn: "Even & Balanced",
      valueGu: "સંતુલિત કુદરતી રંગ"
    },
    highlightResult: {
      en: "Visible Barrier Repair",
      gu: "ત્વચામાં કુદરતી સુધારો"
    },
    featured: false,
    verifiedDuration: "Cellular Nutrition Protocol",
    stats: [
      { label: "Pigmentation Tone", value: "Evening Out" },
      { label: "Skin Barrier", value: "Nourished & Calm" },
      { label: "Internal Method", value: "Cellular Nutrition" },
      { label: "Bodily Balance", value: "Restored" }
    ],
    verifiedQuoteGujarati: "આંતરિક શુદ્ધિકરણ અને પોષક તત્વોના સંતુલનથી ત્વચાના કુદરતી રંગ અને ચમકમાં ઉત્સાહજનક સુધારો થયો.",
    verifiedQuoteEnglish: "Internal cleansing and micronutrient balance supported skin melanin balance and texture evening out.",
    description: "Illustrating how supporting the immune and metabolic pathways with optimal cellular nutrition aids skin tone and barrier health from the inside out.",
    gujaratiDescription: "શરીરના આંતરિક પોષણ દ્વારા ત્વચાની પિગમેન્ટેશનની સમસ્યામાં નોંધપાત્ર સુધારો થયો અને ત્વચા સ્વસ્થ બની.",
    approvedForPublicDisplay: true,
    disclaimer: "Dietary adjustments support overall bodily health and may reflect on skin clarity differently for each person.",
    beforeLabel: "Sebelumnya (Before)",
    afterLabel: "Setelah (After)"
  },
  {
    id: "journey-08-eye-facial-vitality",
    title: "Eye & Facial Cellular Vitality: Rejuvenated & Fresh",
    gujaratiTitle: "આંખ અને ચહેરાનું અદ્ભુત પરિણામ – કુદરતી તેજ અને તાજગી",
    category: "vitality",
    categoryLabel: "Facial & Eye Vitality",
    gujaratiCategoryLabel: "ચહેરાનું કુદરતી તેજ",
    image: "/images/transformations/transformation-8-eye-facial-vitality.jpg",
    beforeImage: "/images/transformations/split/transformation-8-eye-facial-vitality-before.jpg",
    afterImage: "/images/transformations/split/transformation-8-eye-facial-vitality-after.jpg",
    startingMeasurement: {
      labelEn: "Eye Complexion",
      labelGu: "આંખોની થાક",
      valueEn: "Tired & Dull",
      valueGu: "થાક અને નિસ્તેજ"
    },
    achievedMeasurement: {
      labelEn: "Current Vitality",
      labelGu: "હાલનું તેજ",
      valueEn: "Bright & Radiant",
      valueGu: "કુદરતી ચમકદાર"
    },
    highlightResult: {
      en: "Radiance & Clarity",
      gu: "કુદરતી તેજ અને તાજગી"
    },
    featured: false,
    verifiedDuration: "Daily Nutrition & Hydration",
    stats: [
      { label: "Eye Freshness", value: "Bright & Clear" },
      { label: "Facial Complexion", value: "Radiant & Nourished" },
      { label: "Fatigue Relieved", value: "Noticeable" },
      { label: "Natural Glow", value: "Restored" }
    ],
    verifiedQuoteGujarati: "આંખનું અમેઝિંગ જોરદાર રિઝલ્ટ! ચહેરા પર કુદરતી ચમક આવી અને આંખોની થાક દૂર થઈ.",
    verifiedQuoteEnglish: "Amazing eye and facial results! Restored natural glow and relieved chronic visual and facial fatigue through internal nourishment.",
    description: "Demonstrating how proper hydration, antioxidant intake, and rest timing revitalize the eyes and facial complexion naturally.",
    gujaratiDescription: "યોગ્ય પોષક તત્વો, પાણી અને આરામની આદતોથી આંખો અને ચહેરા પર અદ્ભુત કુદરતી તેજ અને ચમક પ્રાપ્ત થઈ.",
    approvedForPublicDisplay: true,
    disclaimer: "Outcomes vary according to personal metabolism and sleep-nutrition balance.",
    beforeLabel: "Before",
    afterLabel: "After"
  }
];

export const galleryCategories = [
  { id: "all", label: "All Results", gujaratiLabel: "બધા પરિણામો" },
  { id: "weight-loss", label: "Weight Loss", gujaratiLabel: "વજન ઘટાડો" },
  { id: "weight-management", label: "Healthy Gain", gujaratiLabel: "સ્વસ્થ વજન વધારો" },
  { id: "lifestyle", label: "Skin & Allergy Relief", gujaratiLabel: "સ્કીન & એલર્જી મુક્તિ" },
  { id: "vitality", label: "Energy & Vitality", gujaratiLabel: "ઊર્જા & તેજ" }
];
