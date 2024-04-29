/** @format */

import React from "react";
import {
  PiCaretUpDownBold,
  PiGearDuotone,
  PiLockDuotone,
  PiNotePencilBold,
} from "react-icons/pi";
import { t } from "i18next";
import { Button, Menu } from "@/library/core";
import { useModals } from "@/library/modals";
import {
  EditOrganizationAccountModal,
  EditOrganizationLimitsModal,
  EditOrganizationLockModal,
} from "@/features/organizations";
import { DashboardOrganizationHeaderProps } from "./types";

const _DashboardOrganizationHeader: React.FC<
  DashboardOrganizationHeaderProps
> = ({ organization }) => {
  // Initializes component's states, hooks and etc.
  const modals = useModals();
  return (
    <Button.Group>
      <Button
        variant="secondary"
        iconStart={PiNotePencilBold}
        onClick={() => {
          modals.showModal(
            <EditOrganizationAccountModal organization={organization} />
          );
        }}>
        {t("Edit account")}
      </Button>
      <Menu placement="bottom-end">
        <Menu.Trigger>
          <Button
            variant="secondary"
            iconStart={PiCaretUpDownBold}
            counter
            title={t("More options")}
          />
        </Menu.Trigger>
        <Menu.Dialog>
          <Menu.Item
            icon={PiGearDuotone}
            onClick={() => {
              modals.showModal(
                <EditOrganizationLimitsModal organization={organization} />
              );
            }}>
            {t("Change limits")}
          </Menu.Item>
          <Menu.Item
            variant="danger"
            icon={PiLockDuotone}
            onClick={() => {
              modals.showModal(
                <EditOrganizationLockModal organization={organization} />
              );
            }}>
            {t("Set lock")}
          </Menu.Item>
        </Menu.Dialog>
      </Menu>
    </Button.Group>
  );
};

export const DashboardOrganizationHeader = React.memo(
  _DashboardOrganizationHeader
);
DashboardOrganizationHeader.displayName = "@/pages/DashboardOrganizationHeader";
