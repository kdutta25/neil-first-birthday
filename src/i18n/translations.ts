export type Language = "en" | "hi" | "pa" | "bn";

export type TranslationKey =
  | "pageTitle"
  | "pageDescription"
  | "toolbarTitle"
  | "kicker"
  | "lead"
  | "galleryHeading"
  | "gallerySub"
  | "galleryEmpty"
  | "galleryLoadingMore"
  | "heroAlt"
  | "openPhoto"
  | "photoAlt"
  | "lightboxLabel"
  | "close"
  | "previousPhoto"
  | "nextPhoto"
  | "birthdayPhoto"
  | "theme"
  | "language"
  | "light"
  | "dark"
  | "english"
  | "hindi"
  | "punjabi"
  | "bengali"
  | "switchToLight"
  | "switchToDark"
  | "footerDesigned"
  | "footerCopyright"
  | "footerBuilt"
  | "footerYoutubeAria"
  | "footerInstagramAria"
  | "footerGithubAria";

export type Translations = Record<TranslationKey, string>;

export const translations: Record<Language, Translations> = {
  en: {
    pageTitle: "Neil's First Birthday Photos",
    pageDescription:
      "Thank you for joining Neil's first great adventure. Relive the memories from his first birthday.",
    toolbarTitle: "Neil's First Birthday",
    kicker: "Our greatest adventure",
    lead: "Thank you for celebrating Neil's first birthday with us. Scroll through the gallery below to relive the memories.",
    galleryHeading: "Photo gallery",
    gallerySub: "Tap any photo to view it full size.",
    galleryEmpty: "No photos yet.",
    galleryLoadingMore: "Loading more photos…",
    heroAlt:
      "Neil's first birthday — a travel and adventure themed celebration",
    openPhoto: "Open photo {{n}}",
    photoAlt: "Neil's first birthday — photo {{n}}",
    lightboxLabel: "Photo viewer",
    close: "Close",
    previousPhoto: "Previous photo",
    nextPhoto: "Next photo",
    birthdayPhoto: "Birthday photo {{n}} of {{total}}",
    theme: "Theme",
    language: "Language",
    light: "Light",
    dark: "Dark",
    english: "English",
    hindi: "Hindi",
    punjabi: "Punjabi",
    bengali: "Bengali",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    footerDesigned: "Designed and developed by Kaus",
    footerCopyright: "Copyright © {{year}} KD",
    footerBuilt: "Built with React, TypeScript and Vite",
    footerYoutubeAria: "YouTube — Kaus Diaries",
    footerInstagramAria: "Instagram — Neil Dutta",
    footerGithubAria: "GitHub — neil-first-birthday",
  },
  hi: {
    pageTitle: "नील का पहला जन्मदिन — तस्वीरें",
    pageDescription:
      "नील के पहले बड़े रोमांच में शामिल होने के लिए धन्यवाद। उसके पहले जन्मदिन की यादें फिर से देखें।",
    toolbarTitle: "नील का पहला जन्मदिन",
    kicker: "हमारा सबसे बड़ा रोमांच",
    lead: "नील के पहले जन्मदिन पर हमारे साथ जश्न मनाने के लिए धन्यवाद। नीचे गैलरी में यादें देखें।",
    galleryHeading: "फोटो गैलरी",
    gallerySub: "पूर्ण आकार में देखने के लिए किसी भी फोटो पर टैप करें।",
    galleryEmpty: "अभी कोई फोटो नहीं है।",
    galleryLoadingMore: "और फोटो लोड हो रही हैं…",
    heroAlt: "नील का पहला जन्मदिन — यात्रा और रोमांच थीम वाला जश्न",
    openPhoto: "फोटो {{n}} खोलें",
    photoAlt: "नील का पहला जन्मदिन — फोटो {{n}}",
    lightboxLabel: "फोटो दर्शक",
    close: "बंद करें",
    previousPhoto: "पिछली फोटो",
    nextPhoto: "अगली फोटो",
    birthdayPhoto: "जन्मदिन फोटो {{n}} / {{total}}",
    theme: "थीम",
    language: "भाषा",
    light: "लाइट",
    dark: "डार्क",
    english: "अंग्रेज़ी",
    hindi: "हिंदी",
    punjabi: "पंजाबी",
    bengali: "बंगाली",
    switchToLight: "लाइट मोड पर जाएं",
    switchToDark: "डार्क मोड पर जाएं",
    footerDesigned: "Kaus द्वारा डिज़ाइन और विकसित",
    footerCopyright: "कॉपीराइट © {{year}} KD",
    footerBuilt: "React, TypeScript और Vite से निर्मित",
    footerYoutubeAria: "YouTube — Kaus Diaries",
    footerInstagramAria: "Instagram — Neil Dutta",
    footerGithubAria: "GitHub — neil-first-birthday",
  },
  pa: {
    pageTitle: "ਨੀਲ ਦਾ ਪਹਿਲਾ ਜਨਮਦਿਨ — ਫੋਟੋਆਂ",
    pageDescription:
      "ਨੀਲ ਦੇ ਪਹਿਲੇ ਵੱਡੇ ਸਾਹਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਲਈ ਧੰਨਵਾਦ। ਉਸਦੇ ਪਹਿਲੇ ਜਨਮਦਿਨ ਦੀਆਂ ਯਾਦਾਂ ਮੁੜ ਵੇਖੋ।",
    toolbarTitle: "ਨੀਲ ਦਾ ਪਹਿਲਾ ਜਨਮਦਿਨ",
    kicker: "ਸਾਡਾ ਸਭ ਤੋਂ ਵੱਡਾ ਸਾਹਸ",
    lead: "ਨੀਲ ਦੇ ਪਹਿਲੇ ਜਨਮਦਿਨ 'ਤੇ ਸਾਡੇ ਨਾਲ ਜਸ਼ਨ ਮਨਾਉਣ ਲਈ ਧੰਨਵਾਦ। ਹੇਠਾਂ ਗੈਲਰੀ ਵਿੱਚ ਯਾਦਾਂ ਵੇਖੋ।",
    galleryHeading: "ਫੋਟੋ ਗੈਲਰੀ",
    gallerySub: "ਪੂਰੇ ਆਕਾਰ ਵਿੱਚ ਦੇਖਣ ਲਈ ਕਿਸੇ ਵੀ ਫੋਟੋ 'ਤੇ ਟੈਪ ਕਰੋ।",
    galleryEmpty: "ਹਾਲੇ ਕੋਈ ਫੋਟੋ ਨਹੀਂ।",
    galleryLoadingMore: "ਹੋਰ ਫੋਟੋਆਂ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ…",
    heroAlt: "ਨੀਲ ਦਾ ਪਹਿਲਾ ਜਨਮਦਿਨ — ਯਾਤਰਾ ਅਤੇ ਸਾਹਸੀ ਥੀਮ ਵਾਲਾ ਜਸ਼ਨ",
    openPhoto: "ਫੋਟੋ {{n}} ਖੋਲ੍ਹੋ",
    photoAlt: "ਨੀਲ ਦਾ ਪਹਿਲਾ ਜਨਮਦਿਨ — ਫੋਟੋ {{n}}",
    lightboxLabel: "ਫੋਟੋ ਦਰਸ਼ਕ",
    close: "ਬੰਦ ਕਰੋ",
    previousPhoto: "ਪਿਛਲੀ ਫੋਟੋ",
    nextPhoto: "ਅਗਲੀ ਫੋਟੋ",
    birthdayPhoto: "ਜਨਮਦਿਨ ਫੋਟੋ {{n}} / {{total}}",
    theme: "ਥੀਮ",
    language: "ਭਾਸ਼ਾ",
    light: "ਲਾਈਟ",
    dark: "ਡਾਰਕ",
    english: "ਅੰਗਰੇਜ਼ੀ",
    hindi: "ਹਿੰਦੀ",
    punjabi: "ਪੰਜਾਬੀ",
    bengali: "ਬੰਗਾਲੀ",
    switchToLight: "ਲਾਈਟ ਮੋਡ 'ਤੇ ਜਾਓ",
    switchToDark: "ਡਾਰਕ ਮੋਡ 'ਤੇ ਜਾਓ",
    footerDesigned: "Kaus ਦੁਆਰਾ ਡਿਜ਼ਾਈਨ ਅਤੇ ਵਿਕਸਿਤ",
    footerCopyright: "ਕਾਪੀਰਾਈਟ © {{year}} KD",
    footerBuilt: "React, TypeScript ਅਤੇ Vite ਨਾਲ ਬਣਾਇਆ ਗਿਆ",
    footerYoutubeAria: "YouTube — Kaus Diaries",
    footerInstagramAria: "Instagram — Neil Dutta",
    footerGithubAria: "GitHub — neil-first-birthday",
  },
  bn: {
    pageTitle: "নীলের প্রথম জন্মদিনের ফটো",
    pageDescription:
      "নীলের প্রথম বড় অ্যাডভেঞ্চারে যোগ দেওয়ার জন্য ধন্যবাদ। তার প্রথম জন্মদিনের স্মৃতি আবার দেখুন।",
    toolbarTitle: "নীলের প্রথম জন্মদিন",
    kicker: "আমাদের সবচেয়ে বড় অ্যাডভেঞ্চার",
    lead: "নীলের প্রথম জন্মদিনে আমাদের সঙ্গে উদযাপন করার জন্য ধন্যবাদ। নিচের গ্যালারিতে স্মৃতি দেখুন।",
    galleryHeading: "ফটো গ্যালারি",
    gallerySub: "পুরো আকারে দেখতে যেকোনো ফটোতে ট্যাপ করুন।",
    galleryEmpty: "এখনও কোনো ফটো নেই।",
    galleryLoadingMore: "আরও ফটো লোড হচ্ছে…",
    heroAlt: "নীলের প্রথম জন্মদিন — ভ্রমণ ও অ্যাডভেঞ্চার থিমের উদযাপন",
    openPhoto: "ফটো {{n}} খুলুন",
    photoAlt: "নীলের প্রথম জন্মদিন — ফটো {{n}}",
    lightboxLabel: "ফটো ভিউয়ার",
    close: "বন্ধ করুন",
    previousPhoto: "আগের ফটো",
    nextPhoto: "পরের ফটো",
    birthdayPhoto: "জন্মদিনের ফটো {{n}} / {{total}}",
    theme: "থিম",
    language: "ভাষা",
    light: "লাইট",
    dark: "ডার্ক",
    english: "ইংরেজি",
    hindi: "হিন্দি",
    punjabi: "পাঞ্জাবি",
    bengali: "বাংলা",
    switchToLight: "লাইট মোডে যান",
    switchToDark: "ডার্ক মোডে যান",
    footerDesigned: "Kaus দ্বারা ডিজাইন ও তৈরি",
    footerCopyright: "কপিরাইট © {{year}} KD",
    footerBuilt: "React, TypeScript এবং Vite দিয়ে তৈরি",
    footerYoutubeAria: "YouTube — Kaus Diaries",
    footerInstagramAria: "Instagram — Neil Dutta",
    footerGithubAria: "GitHub — neil-first-birthday",
  },
};

export const languageOptions: { value: Language; labelKey: TranslationKey }[] = [
  { value: "en", labelKey: "english" },
  { value: "hi", labelKey: "hindi" },
  { value: "pa", labelKey: "punjabi" },
  { value: "bn", labelKey: "bengali" },
];

export function format(
  template: string,
  vars: Record<string, string | number>,
): string {
  return Object.entries(vars).reduce(
    (result, [key, value]) => result.replaceAll(`{{${key}}}`, String(value)),
    template,
  );
}
