/** @format */

import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { PiCaretUpDownBold, PiSignOutBold } from "react-icons/pi";
import { t } from "i18next";
import { Button, Icon, Popover, Text } from "@/library/core";
import { getInitials } from "@/library/utils";
import { useAuthContext, useLogoutMutation } from "@/features/auth";
import { DashboardSidebarAccountProps } from "./types";
import * as sc from "./DashboardSidebarAccount.styled";

export const DashboardSidebarAccount: React.FC<DashboardSidebarAccountProps> = (
  props
) => {
  // Initializes component's states, hooks and etc.
  const { isLoggingOut, user } = useAuthContext();
  const logout = useLogoutMutation();

  // Memoized user's initials.
  const initials = React.useMemo(() => {
    if (!user) return null;
    return getInitials(user.name).slice(0, 2);
  }, [user]);

  // Renders component only, when user is defined and has necessary values.
  if (!user) return null;
  return (
    <Popover placement="top-start" interactions={["click", "dismiss"]}>
      <Popover.Trigger>
        <sc.Trigger.Base aria-label={t("My account information")} {...props}>
          <sc.Trigger.Illustration>
            <Icon render={BiSolidUser} size={3.5} />
          </sc.Trigger.Illustration>
          <sc.Trigger.User>
            <sc.Trigger.Name>{t("My account")}</sc.Trigger.Name>
            <sc.Trigger.Email>{user.email}</sc.Trigger.Email>
          </sc.Trigger.User>
          <sc.Trigger.Icon as={Icon} render={PiCaretUpDownBold} size={1.25} />
        </sc.Trigger.Base>
      </Popover.Trigger>
      <sc.Dialog.Base as={Popover.Floating}>
        <sc.Container>
          <sc.Initials as={Text.Title1}>{initials}</sc.Initials>
          <sc.Dialog.Details>
            <sc.Dialog.Text as="h4">{user.name}</sc.Dialog.Text>
            <sc.Dialog.Text as="span">{user.email}</sc.Dialog.Text>
          </sc.Dialog.Details>
        </sc.Container>
        <sc.Toolbar>
          <Button
            variant="primary"
            iconStart={PiSignOutBold}
            disabled={isLoggingOut}
            onClick={() => !isLoggingOut && logout.mutate(null)}
            fullWidth>
            {t("Logout")}
          </Button>
        </sc.Toolbar>
      </sc.Dialog.Base>
    </Popover>
  );
};
