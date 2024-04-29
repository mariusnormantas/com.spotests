/** @format */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PiBuildingsDuotone,
  PiCaretUpDownBold,
  PiNotePencilBold,
  PiTrashDuotone,
  PiUserSwitchDuotone,
} from "react-icons/pi";
import { t } from "i18next";
import { Button, Menu } from "@/library/core";
import { useModals } from "@/library/modals";
import { AuthRoleGuard } from "@/features/auth";
import { useDashboardLinks } from "@/features/dashboard";
import {
  DeleteTeamModal,
  EditTeamModal,
  ManageTeamMembersModal,
} from "@/features/teams";
import { DashboardTeamHeaderProps } from "./types";

const _DashboardTeamHeader: React.FC<DashboardTeamHeaderProps> = ({ team }) => {
  // Initializes component's states, hooks and etc.
  const { organizationId } = useParams();
  const navigate = useNavigate();
  const links = useDashboardLinks();
  const modals = useModals();
  return (
    <Button.Group>
      <Button
        variant="secondary"
        iconStart={PiNotePencilBold}
        onClick={() => {
          modals.showModal(<EditTeamModal team={team} />);
        }}>
        {t("Edit team")}
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
          {!organizationId && (
            <AuthRoleGuard roles={["admin"]}>
              <Menu.Item
                icon={PiBuildingsDuotone}
                onClick={() => {
                  navigate(
                    `${links.organizations}/${team.organization._id}/teams/${team._id}`
                  );
                }}>
                {t("Open organization")}
              </Menu.Item>
            </AuthRoleGuard>
          )}
          <Menu.Item
            icon={PiUserSwitchDuotone}
            onClick={() => {
              modals.showModal(
                <ManageTeamMembersModal
                  teamId={team._id}
                  teamName={team.name}
                />
              );
            }}>
            {t("Manage members of team")}
          </Menu.Item>
          <Menu.Item
            variant="danger"
            icon={PiTrashDuotone}
            onClick={() => {
              modals.showModal(<DeleteTeamModal team={team} />);
            }}>
            {t("Delete team")}
          </Menu.Item>
        </Menu.Dialog>
      </Menu>
    </Button.Group>
  );
};

export const DashboardTeamHeader = React.memo(_DashboardTeamHeader);
DashboardTeamHeader.displayName = "@/pages/DashboardTeamHeader";
