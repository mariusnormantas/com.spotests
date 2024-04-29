/** @format */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PiBuildingsDuotone,
  PiCaretUpDownBold,
  PiNotePencilBold,
  PiPolygonDuotone,
  PiSneakerMoveDuotone,
  PiTrashDuotone,
} from "react-icons/pi";
import { t } from "i18next";
import { Button, Menu, Tooltip } from "@/library/core";
import { useModals } from "@/library/modals";
import { useDashboardLinks } from "@/features/dashboard";
import { AuthRoleGuard } from "@/features/auth";
import {
  DeleteAthleteModal,
  EditAthleteAccountModal,
  EditAthleteDataModal,
} from "@/features/athletes";
import { CreateTestingModal } from "@/features/testings";
import { DashboardAthleteHeaderProps } from "./types";

const _DashboardAthleteHeader: React.FC<DashboardAthleteHeaderProps> = ({
  athlete,
}) => {
  // Initializes component's states, hooks and etc.
  const params = useParams();
  const modals = useModals();
  const navigate = useNavigate();
  const links = useDashboardLinks();

  return (
    <React.Fragment>
      <Button.Group>
        <Button
          variant="secondary"
          iconStart={PiNotePencilBold}
          onClick={() =>
            modals.showModal(<EditAthleteAccountModal athlete={athlete} />)
          }>
          {t("Edit account")}
        </Button>
        <Menu placement="bottom-end">
          <Menu.Trigger>
            <Button
              variant="secondary"
              iconStart={PiCaretUpDownBold}
              title={t("More options")}
              counter
            />
          </Menu.Trigger>
          <Menu.Dialog>
            {!params.organizationId && (
              <AuthRoleGuard roles={["admin"]}>
                <Menu.Item
                  icon={PiBuildingsDuotone}
                  onClick={() =>
                    navigate(
                      `${links.organizations}/${athlete.organization._id}/athletes/${athlete._id}`
                    )
                  }>
                  {t("Open organization")}
                </Menu.Item>
              </AuthRoleGuard>
            )}
            <Menu.Item
              icon={PiSneakerMoveDuotone}
              onClick={() => {
                modals.showModal(<EditAthleteDataModal athlete={athlete} />);
              }}>
              {t("Edit athlete")}
            </Menu.Item>
            <AuthRoleGuard roles={["admin", "organization"]}>
              <Menu.Item
                variant="danger"
                icon={PiTrashDuotone}
                onClick={() => {
                  modals.showModal(
                    <DeleteAthleteModal
                      athleteId={athlete._id}
                      athleteName={athlete.name}
                    />
                  );
                }}>
                {t("Delete athlete")}
              </Menu.Item>
            </AuthRoleGuard>
          </Menu.Dialog>
        </Menu>
      </Button.Group>
      <Tooltip>
        <Tooltip.Trigger>
          <Button
            aria-label={t("New testing")}
            iconStart={PiPolygonDuotone}
            counter
            onClick={() => {
              modals.showModal(<CreateTestingModal athlete={athlete} />);
            }}
          />
        </Tooltip.Trigger>
        <Tooltip.Dialog>{t("Create new testing")}</Tooltip.Dialog>
      </Tooltip>
    </React.Fragment>
  );
};

export const DashboardAthleteHeader = React.memo(_DashboardAthleteHeader);
DashboardAthleteHeader.displayName = "@/pages/DashboardAthleteHeader";
