/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import { setDefaultOptions } from "date-fns";
import { locales } from "./locales";
import {
  InternationalizationProviderProps,
  InternationalizationProviderReturn,
} from "./types";

// Creates a context to handle the data.
export const InternationalizationContext =
  React.createContext<InternationalizationProviderReturn>(
    {} as InternationalizationProviderReturn
  );

export const InternationalizationProvider: React.FC<
  InternationalizationProviderProps
> = ({ children }) => {
  // Initializes component's states, hooks and etc.
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(
    (i18n.language as keyof typeof locales) ?? "en"
  );

  // Layout effect, which updates default date-fns locale.
  React.useLayoutEffect(() => {
    if (localStorage.getItem("language") !== language) {
      localStorage.setItem("language", language);
    }
    setDefaultOptions({ locale: locales[language].locale });
  }, [i18n, language]);

  return (
    <InternationalizationContext.Provider
      value={{ language, setLanguage, locales }}>
      {children}
    </InternationalizationContext.Provider>
  );
};
