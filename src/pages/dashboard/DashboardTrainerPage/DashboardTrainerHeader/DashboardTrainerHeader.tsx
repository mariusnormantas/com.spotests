/** @format */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PiBuildingsDuotone,
  PiCaretUpDownBold,
  PiNotePencilBold,
  PiTrashDuotone,
} from "react-icons/pi";
import { t } from "i18next";
import { Button, Menu } from "@/library/core";
import { useModals } from "@/library/modals";
import { AuthRoleGuard } from "@/features/auth";
import { useDashboardLinks } from "@/features/dashboard";
import {
  DeleteTrainerModal,
  EditTrainerAccountModal,
} from "@/features/trainers";
import { DashboardTrainerHeaderProps } from "./types";

export const DashboardTrainerHeader: React.FC<DashboardTrainerHeaderProps> = ({
  trainer,
}) => {
  // Initializes component's states, hooks and etc.
  const params = useParams();
  const navigate = useNavigate();
  const links = useDashboardLinks();
  const modals = useModals();

  return (
    <Button.Group>
      <Button
        variant="secondary"
        iconStart={PiNotePencilBold}
        onClick={() => {
          modals.showModal(<EditTrainerAccountModal trainer={trainer} />);
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
          {!params.organizationId && (
            <AuthRoleGuard roles={["admin"]}>
              <Menu.Item
                icon={PiBuildingsDuotone}
                onClick={() =>
                  navigate(
                    `${links.organizations}/${trainer.organization._id}/trainers/${trainer._id}`
                  )
                }>
                {t("Open organization")}
              </Menu.Item>
            </AuthRoleGuard>
          )}
          <Menu.Item
            variant="danger"
            icon={PiTrashDuotone}
            onClick={() => {
              modals.showModal(<DeleteTrainerModal trainer={trainer} />);
            }}>
            {t("Delete trainer")}
          </Menu.Item>
        </Menu.Dialog>
      </Menu>
    </Button.Group>
  );
};
