/** @format */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import languages resources
import { lt } from "@/features/internationalization";

// Language settings from local storage.
const currentLanguage = localStorage.getItem("language") ?? "en";

// Initializes i18n.
i18n.use(initReactI18next).init({
  resources: {
    lt: {
      translation: lt,
    },
  },
  lng: currentLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
