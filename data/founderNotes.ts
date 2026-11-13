export interface FounderNoteItem {
  id: string;
  sourceType: "handwritten_diary" | "typed_statement" | "personal_journey";
  title: string;
  gujaratiTitle: string;
  originalGujarati: string;
  englishTranslation: string;
  imagePath: string;
  verifiedFields: {
    coachName: string;
    designation: string;
    services: string[];
    coreValues: string[];
    contactPhone: string;
    centerAddress: string;
  };
}

export const founderNotes: FounderNoteItem[] = [
  {
    id: "founder-personal-mission",
    sourceType: "personal_journey",
    title: "Founder Mission & Personal Transformation Record",
    gujaratiTitle: "ઓનલાઇન હેલ્થ કોચિંગ અને જીવનશૈલી માર્ગદર્શન",
    originalGujarati: `ઓનલાઇન હેલ્થ કોચિંગ અને વેલનેસ માર્ગદર્શન
ક્રિવાંશરાજ વેલનેસ સેન્ટર
મારા વિશે - ગોહિલ પ્રીતિબા સિદ્ધરાજ સિંહ
વેલનેસ કોચ | આરોગ્ય અને જીવનશૈલી માર્ગદર્શક

હું ગોહિલ પ્રીતિબા સિદ્ધરાજ સિંહ એક વેલનેસ કોચ તરીકે લોકોને સ્વસ્થ, સક્રિય અને તંદુરસ્ત જીવનશૈલી અપનાવવા માટે માર્ગદર્શન અને પ્રેરણા આપવાનું કાર્ય કરું છું.

- મેં પોતે ૮૪ કિલોથી ૬૫ કિલો સુધી પહોંચીને ૧૯ કિલો વજન અને ફેટ ઘટાડીને નવી ઊર્જા પ્રાપ્ત કરી છે.
- મારો મુખ્ય હેતુ લોકોને યોગ્ય પોષણ અને સ્વસ્થ આહારની આદતો અને જીવનશૈલીમાં સકારાત્મક પરિવર્તન દ્વારા તેમના ફિટનેસના લક્ષ્યો પ્રાપ્ત કરવામાં મદદ કરવાનો છે.
- સારું સ્વાસ્થ્ય સુખી જીવનનો પાયો છે.
- મારું મિશન - સ્વસ્થ વ્યક્તિ, સુખી પરિવાર અને તંદુરસ્ત જીવનનું નિર્માણ.`,
    englishTranslation: `Online Health Coaching & Wellness Guidance
Krivanshraj Wellness Center
About Me - Gohil Pritiba Siddhraj Sinh
Wellness Coach | Health & Lifestyle Guide

I, Gohil Pritiba Siddhraj Sinh, serve as a dedicated wellness coach inspiring individuals and families to embrace sustainable, vibrant health.

- Having personally transformed from 84 kg to 65 kg (-19 kg fat reduction), I understand the journey from personal experience and empathy.
- My primary objective is to guide people in reaching their optimal fitness and energy goals through wholesome daily nutrition, proper hydration timing, and lasting habit refinement.
- Good health is the fundamental cornerstone of a happy and prosperous life.
- My Mission: To cultivate healthy individuals, joyful families, and vibrant lifestyles across Bhavnagar and beyond.`,
    imagePath: "/images/brand/coach-pritiba-transformation.jpg",
    verifiedFields: {
      coachName: "Gohil Pritiba Siddhraj Sinh (ગોહિલ પ્રીતિબા સિદ્ધરાજ સિંહ)",
      designation: "Certified Wellness Coach & Lifestyle Mentor",
      services: [
        "Online Health Coaching (ઓનલાઇન હેલ્થ કોચિંગ)",
        "Nutritional Guidance & Habit Architecture",
        "Personalized Weight & Visceral Fat Guidance",
        "Pediatric & Family Nutritional Literacy"
      ],
      coreValues: [
        "Health is true wealth (સ્વાસ્થ્ય એ જ સાચી સંપત્તિ છે)",
        "Good health is the foundation of a happy life (સારું સ્વાસ્થ્ય સુખી જીવનનો પાયો છે)",
        "Lead by personal example (૮૪ કિલો થી ૬૫ કિલો સફળ પરિવર્તન)"
      ],
      contactPhone: "+91 76238 13787",
      centerAddress: "Aakhlol Jakatnaka, Opposite 369 Hotel, Darbargadh, Bhavnagar - 364002"
    }
  },
  {
    id: "center-details-bhavnagar",
    sourceType: "typed_statement",
    title: "Center Registration & Physical Verification Record",
    gujaratiTitle: "કેન્દ્ર નોંધણી અને સંપર્ક વિગત",
    originalGujarati: `ક્રિવાંશરાજ વેલનેસ સેન્ટર
મોબાઈલ: ૭૬૨૩૮૧૩૭૮૭
વેલનેસ કોચ: ગોહિલ પ્રીતિબા સિદ્ધરાજ સિંહ

- એડ્રેસ:
આખલોલ જકાતનાકા,
૩૬૯ હોટલની સામે,
દરબારગઢ,
ભાવનગર, પિનકોડ - ૩૬૪૦૦૨`,
    englishTranslation: `Krivanshraj Wellness Center
Mobile: +91 76238 13787
Wellness Coach: Gohil Pritiba Siddhraj Sinh

- Center Address:
Aakhlol Jakatnaka,
Opposite 369 Hotel,
Darbargadh,
Bhavnagar, Pincode - 364002`,
    imagePath: "/images/brand/coach-pritiba-portrait.jpg",
    verifiedFields: {
      coachName: "Gohil Pritiba Siddhraj Sinh",
      designation: "Wellness Coach",
      services: ["In-person Consultations in Bhavnagar", "Direct Phone / WhatsApp Mentorship"],
      coreValues: ["Transparency", "Direct Accountability", "Local Community Wellness"],
      contactPhone: "+91 76238 13787",
      centerAddress: "Aakhlol Jakatnaka, Opp. 369 Hotel, Darbargadh, Bhavnagar - 364002"
    }
  }
];
