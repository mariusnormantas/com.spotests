/** @format */

import React from "react";
import { t } from "i18next";
import { PiShieldCheckDuotone } from "react-icons/pi";
import { Badge, Text } from "@/library/core";
import * as sc from "./SecurityTip.styled";

const _SecurityTip: React.FC = () => {
  return (
    <sc.Component>
      <Badge iconStart={PiShieldCheckDuotone}>{t("Security tip")}</Badge>
      <Text.Body1>
        {t(
          "Make sure you sign out on a shared computer when you've finished. This helps keep your account secure from other people using your device."
        )}
      </Text.Body1>
    </sc.Component>
  );
};

export const SecurityTip = React.memo(_SecurityTip);
SecurityTip.displayName = "@/features/auth/components/SecurityTip";
