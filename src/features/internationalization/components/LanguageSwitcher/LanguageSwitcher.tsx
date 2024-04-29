/** @format */

import React from "react";
import { PiGlobeDuotone } from "react-icons/pi";
import { t } from "i18next";
import { useInternationalizationContext } from "../../hooks";
import { Icon, Popover, Text } from "@/library/core";
import { LanguageSwitcherProps } from "./types";
import * as sc from "./LanguageSwitcher.styled";

export const LanguageSwitcher = React.forwardRef<
  HTMLButtonElement,
  LanguageSwitcherProps
>(() => {
  // Initializes component's states, hooks and etc.
  const { language, setLanguage, locales } = useInternationalizationContext();

  // Callback, which handles change language button click.
  const handleChangeLanguage = React.useCallback(
    (lang: keyof typeof locales) => {
      if (language !== lang) {
        setLanguage(lang);
        window.location.reload();
      }
    },
    [language, setLanguage]
  );

  // Memoized current locale's node. Do not update, until page reloads.
  const currentLocaleNode = React.useMemo(
    () => `${t("Change language")} (${t(locales[language].title)})`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Popover placement="top" interactions={["click", "dismiss"]}>
      <Popover.Trigger>
        <sc.Component as={Text.Body1} asLink color="body">
          <Icon render={PiGlobeDuotone} size={1.5} />
          {currentLocaleNode}
        </sc.Component>
      </Popover.Trigger>
      <sc.Dialog as={Popover.Floating}>
        <sc.Caption>{t("Select language")}</sc.Caption>
        <sc.List>
          {Object.entries(locales).map((locale, key) => (
            <sc.Language
              key={key}
              disabled={language === locale[0]}
              onClick={() =>
                handleChangeLanguage(locale[0] as keyof typeof locales)
              }>
              {t(locale[1].title)}
            </sc.Language>
          ))}
        </sc.List>
      </sc.Dialog>
    </Popover>
  );
});
