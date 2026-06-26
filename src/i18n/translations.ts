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
  | "galleryIntroBadge"
  | "galleryIntroTitle"
  | "galleryIntroBody"
  | "galleryIntroHighlight"
  | "galleryIntroDonate"
  | "galleryIntroContinue"
  | "galleryIntroClose"
  | "galleryLoadingMore"
  | "galleryProgress"
  | "galleryProgressComplete"
  | "heroAlt"
  | "openPhoto"
  | "photoAlt"
  | "lightboxLabel"
  | "lightboxLoading"
  | "lightboxLoadingIndeterminate"
  | "lightboxLoadError"
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
    galleryIntroBadge: "Give back",
    galleryIntroTitle: "A Summer of Hope",
    galleryIntroBody:
      "Before you browse Neil's birthday photos, we invite you to support The Ottawa Mission — providing meals, shelter, and essential supplies for people experiencing homelessness in our community.",
    galleryIntroHighlight:
      "Gifts are matched until June 30 thanks to generous donors. Your contribution can provide twice the impact.",
    galleryIntroDonate: "Give today",
    galleryIntroContinue: "Continue to photos",
    galleryIntroClose: "Close and continue to photos",
    galleryLoadingMore: "Loading more photos…",
    galleryProgress: "{{visible}} of {{total}} photos — scroll down for more",
    galleryProgressComplete: "All {{total}} photos loaded",
    heroAlt:
      "Neil's first birthday — a travel and adventure themed celebration",
    openPhoto: "Open photo {{n}}",
    photoAlt: "Neil's first birthday — photo {{n}}",
    lightboxLabel: "Photo viewer",
    lightboxLoading: "Loading {{percent}}%",
    lightboxLoadingIndeterminate: "Loading…",
    lightboxLoadError: "Could not load photo",
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
    galleryIntroBadge: "दान करें",
    galleryIntroTitle: "आशा की एक गर्मी",
    galleryIntroBody:
      "नील की जन्मदिन की तस्वीरें देखने से पहले, कृपया The Ottawa Mission का समर्थन करें — जो बेघर लोगों को भोजन, आश्रय और ज़रूरी सामान उपलब्ध कराता है।",
    galleryIntroHighlight:
      "30 जून तक उदार दानदाताओं की मदद से दान दोगुना होगा। आपका योगदान दोगुना प्रभाव डाल सकता है।",
    galleryIntroDonate: "आज दान करें",
    galleryIntroContinue: "फोटो देखें",
    galleryIntroClose: "बंद करें और फोटो देखें",
    galleryLoadingMore: "और फोटो लोड हो रही हैं…",
    galleryProgress: "{{visible}} / {{total}} फोटो — और देखने के लिए नीचे स्क्रॉल करें",
    galleryProgressComplete: "सभी {{total}} फोटो लोड हो गईं",
    heroAlt: "नील का पहला जन्मदिन — यात्रा और रोमांच थीम वाला जश्न",
    openPhoto: "फोटो {{n}} खोलें",
    photoAlt: "नील का पहला जन्मदिन — फोटो {{n}}",
    lightboxLabel: "फोटो दर्शक",
    lightboxLoading: "लोड हो रहा है {{percent}}%",
    lightboxLoadingIndeterminate: "लोड हो रहा है…",
    lightboxLoadError: "फोटो लोड नहीं हो सकी",
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
    galleryIntroBadge: "ਦਾਨ ਕਰੋ",
    galleryIntroTitle: "ਉਮੀਦ ਦੀ ਗਰਮੀ",
    galleryIntroBody:
      "ਨੀਲ ਦੀਆਂ ਜਨਮਦਿਨ ਦੀਆਂ ਫੋਟੋਆਂ ਵੇਖਣ ਤੋਂ ਪਹਿਲਾਂ, ਕਿਰਪਾ ਕਰਕੇ The Ottawa Mission ਦਾ ਸਮਰਥਨ ਕਰੋ — ਜੋ ਬੇਘਰ ਲੋਕਾਂ ਨੂੰ ਭੋਜਨ, ਆਸ਼ਰੇ ਅਤੇ ਜ਼ਰੂਰੀ ਸਮਾਨ ਦਿੰਦਾ ਹੈ।",
    galleryIntroHighlight:
      "30 ਜੂਨ ਤੱਕ ਉਦਾਰ ਦਾਨਦਾਤਾਵਾਂ ਦੀ ਮਦਦ ਨਾਲ ਦਾਨ ਦੁੱਗਣਾ ਹੋਵੇਗਾ। ਤੁਹਾਡਾ ਯੋਗਦਾਨ ਦੁੱਗਣਾ ਅਸਰ ਪਾ ਸਕਦਾ ਹੈ।",
    galleryIntroDonate: "ਅੱਜ ਦਾਨ ਕਰੋ",
    galleryIntroContinue: "ਫੋਟੋਆਂ ਵੇਖੋ",
    galleryIntroClose: "ਬੰਦ ਕਰੋ ਅਤੇ ਫੋਟੋਆਂ ਵੇਖੋ",
    galleryLoadingMore: "ਹੋਰ ਫੋਟੋਆਂ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ…",
    galleryProgress: "{{visible}} / {{total}} ਫੋਟੋਆਂ — ਹੋਰ ਵੇਖਣ ਲਈ ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰੋ",
    galleryProgressComplete: "ਸਾਰੀਆਂ {{total}} ਫੋਟੋਆਂ ਲੋਡ ਹੋ ਗਈਆਂ",
    heroAlt: "ਨੀਲ ਦਾ ਪਹਿਲਾ ਜਨਮਦਿਨ — ਯਾਤਰਾ ਅਤੇ ਸਾਹਸੀ ਥੀਮ ਵਾਲਾ ਜਸ਼ਨ",
    openPhoto: "ਫੋਟੋ {{n}} ਖੋਲ੍ਹੋ",
    photoAlt: "ਨੀਲ ਦਾ ਪਹਿਲਾ ਜਨਮਦਿਨ — ਫੋਟੋ {{n}}",
    lightboxLabel: "ਫੋਟੋ ਦਰਸ਼ਕ",
    lightboxLoading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ {{percent}}%",
    lightboxLoadingIndeterminate: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ…",
    lightboxLoadError: "ਫੋਟੋ ਲੋਡ ਨਹੀਂ ਹੋ ਸਕੀ",
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
    galleryIntroBadge: "দান করুন",
    galleryIntroTitle: "আশার একটি গ্রীষ্ম",
    galleryIntroBody:
      "নীলের জন্মদিনের ফটো দেখার আগে, অনুগ্রহ করে The Ottawa Mission-কে সমর্থন করুন — যারা homeless মানুষদের খাবার, আশ্রয় ও প্রয়োজনীয় সরঞ্জাম দেয়।",
    galleryIntroHighlight:
      "৩০ জুন পর্যন্ত উদার দাতাদের সহায়তায় দান দ্বিগুণ হবে। আপনার অবদান দ্বিগুণ প্রভাব ফেলতে পারে।",
    galleryIntroDonate: "আজই দান করুন",
    galleryIntroContinue: "ফটো দেখুন",
    galleryIntroClose: "বন্ধ করুন এবং ফটো দেখুন",
    galleryLoadingMore: "আরও ফটো লোড হচ্ছে…",
    galleryProgress: "{{visible}} / {{total}} ফটো — আরও দেখতে নিচে স্ক্রল করুন",
    galleryProgressComplete: "সব {{total}}টি ফটো লোড হয়েছে",
    heroAlt: "নীলের প্রথম জন্মদিন — ভ্রমণ ও অ্যাডভেঞ্চার থিমের উদযাপন",
    openPhoto: "ফটো {{n}} খুলুন",
    photoAlt: "নীলের প্রথম জন্মদিন — ফটো {{n}}",
    lightboxLabel: "ফটো ভিউয়ার",
    lightboxLoading: "লোড হচ্ছে {{percent}}%",
    lightboxLoadingIndeterminate: "লোড হচ্ছে…",
    lightboxLoadError: "ফটো লোড করা যায়নি",
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
