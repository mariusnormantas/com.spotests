/** @format */

import React from "react";
import { locales } from "./locales";

export type InternationalizationProviderProps = {
  children: React.ReactNode;
};

export type InternationalizationProviderReturn = {
  locales: typeof locales;
  language: keyof typeof locales;
  setLanguage: React.Dispatch<React.SetStateAction<keyof typeof locales>>;
};
