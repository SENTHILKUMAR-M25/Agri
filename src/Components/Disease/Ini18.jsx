import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Common
      app_name: "Uzhavan",
      app_tagline: "Digital Agriculture Support Platform",
      login: "Login",
      register: "Register",
      logout: "Logout",
      dashboard: "Dashboard",
      welcome: "Welcome",
      language: "Language",
      tamil: "Tamil",
      english: "English",
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
      search: "Search",
      loading: "Loading...",

      // Landing Page
      hero_title: "Empowering Tamil Nadu Farmers",
      hero_subtitle:
        "Access real-time market prices, weather forecasts, government schemes, and agricultural support - all in one platform",
      get_started: "Get Started",
      learn_more: "Learn More",

      // Disease Detection
      disease_title: "AI Plant Disease Detection",
      disease_subtitle: "Upload a photo to detect plant diseases",
      upload_image: "Upload Image",
      analyzing: "Analyzing...",
      diagnosis: "Diagnosis",
      treatment: "Recommended Treatment",
    },
  },

  ta: {
    translation: {
      app_name: "உழவன்",
      app_tagline: "டிஜிட்டல் விவசாய ஆதரவு தளம்",
      login: "உள்நுழைக",
      register: "பதிவு செய்க",
      logout: "வெளியேறு",
      dashboard: "டாஷ்போர்டு",
      welcome: "வரவேற்பு",
      language: "மொழி",
      tamil: "தமிழ்",
      english: "ஆங்கிலம்",
      submit: "சமர்ப்பிக்க",
      cancel: "ரத்து செய்",
      save: "சேமி",
      search: "தேடு",
      loading: "ஏற்றுகிறது...",

      hero_title: "தமிழ்நாடு விவசாயிகளை மேம்படுத்துதல்",
      hero_subtitle:
        "நிகழ்நேர சந்தை விலைகள், வானிலை முன்னறிவிப்புகள், அரசு திட்டங்கள் மற்றும் விவசாய ஆதரவு - அனைத்தும் ஒரே தளத்தில்",
      get_started: "தொடங்குங்கள்",
      learn_more: "மேலும் அறிக",

      disease_title: "AI தாவர நோய் கண்டறிதல்",
      disease_subtitle: "தாவர நோய்களை கண்டறிய புகைப்படத்தை பதிவேற்றவும்",
      upload_image: "படத்தை பதிவேற்றவும்",
      analyzing: "ஆய்வு செய்கிறது...",
      diagnosis: "நோய் கணிப்பு",
      treatment: "பரிந்துரைக்கப்பட்ட சிகிச்சை",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
