export interface TestimonialItem {
  id: string;
  clientName: string;
  gujaratiClientName: string;
  location: string;
  transformationType: string;
  gujaratiTransformationType: string;
  quote: string;
  gujaratiQuote: string;
  verifiedResult: string;
  verifiedFromSuppliedNotes: boolean;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "test-01",
    clientName: "Hetalba Rajput",
    gujaratiClientName: "હેતલબા રાજપૂત",
    location: "Bhavnagar",
    transformationType: "Chronic Skin Relief",
    gujaratiTransformationType: "ચામડીની ખંજવાળ અને એલર્જી મુક્તિ",
    quote: "I suffered from severe full-body skin itching since I was 7 years old. No medicines gave lasting relief until I started this nutrition 4 months ago under Coach Pritiba. The constant itch is completely gone, and I am so happy and relieved.",
    gujaratiQuote: "બાળપણમાં ૭ વર્ષની હતી ત્યારથી આખા શરીરમાં ચામડીની ગંભીર ખંજવાળ રહેતી. ૪ મહિનાથી કોચ પ્રીતિબાના માર્ગદર્શનમાં આ ન્યુટ્રીશન શરૂ કર્યું અને ખંજવાળમાં સાવ ફરક પડી ગયો. હવે હું ખૂબ જ ખુશ છું.",
    verifiedResult: "Chronic Skin Relief in 4 Months",
    verifiedFromSuppliedNotes: true
  },
  {
    id: "test-02",
    clientName: "Verified Member (20kg Loss)",
    gujaratiClientName: "પ્રમાણિત સભ્ય",
    location: "Online Coaching",
    transformationType: "20 kg Weight Reduction",
    gujaratiTransformationType: "૨૦ કિલો વજન ઘટાડો",
    quote: "Stepping down from 78 kg to 58 kg transformed my life. I learned how to eat right without cutting out real family meals. Coach Pritiba made me feel confident that a healthy body is truly sustainable.",
    gujaratiQuote: "૭૮ કિલોથી ૫૮ કિલો સુધી પહોંચવું મારા માટે એક નવું જીવન મળવા જેવું છે. ક્યારેય ભૂખ્યા રહ્યા વગર સંતુલિત આહારની સાચી સમજ મળી.",
    verifiedResult: "78 kg to 58 kg (-20 kg)",
    verifiedFromSuppliedNotes: true
  },
  {
    id: "test-03",
    clientName: "Convalescent Recovery Member",
    gujaratiClientName: "સ્વાસ્થ્ય સુધાર સભ્ય",
    location: "Bhavnagar Center",
    transformationType: "Health & Weight Gain",
    gujaratiTransformationType: "શારીરિક પુનઃપ્રાપ્તિ અને વજન વધારો",
    quote: "After being discharged from the hospital at just 45 kg, I had zero strength. Through precise nutritional coaching, I gained 10 kg of lean healthy weight to reach 55 kg, feeling strong, active, and fully recovered.",
    gujaratiQuote: "હોસ્પિટલમાંથી ડિસ્ચાર્જ થયા પછી ૪૫ કિલો વજન સાથે નબળાઈ હતી. કોચિંગ અને યોગ્ય પોષણથી ૧૦ કિલો સ્વસ્થ વજન વધીને ૫૫ કિલો થયું અને નવી શક્તિ મળી.",
    verifiedResult: "45 kg to 55 kg (+10 kg Healthy Gain)",
    verifiedFromSuppliedNotes: true
  },
  {
    id: "test-04",
    clientName: "Verified Member (Visceral Fat)",
    gujaratiClientName: "પ્રમાણિત સભ્ય",
    location: "Bhavnagar",
    transformationType: "Waist & Posture Correction",
    gujaratiTransformationType: "પેટની ચરબી અને પોશ્ચર સુધારો",
    quote: "Shedding stubborn abdominal bulk felt impossible until I understood food timing and proper hydration. My posture straightened, excess fat reduced, and I feel energized from morning till night.",
    gujaratiQuote: "પેટની વધારાની ચરબી દૂર થવાથી શરીર હળવુંફૂલ થઈ ગયું. ચાલવામાં અને દૈનિક કામોમાં હવે કોઈ થાક લાગતો નથી અને આખો દિવસ ઊર્જા રહે છે.",
    verifiedResult: "Visceral Fat Reduction & Posture Correction",
    verifiedFromSuppliedNotes: true
  }
];
