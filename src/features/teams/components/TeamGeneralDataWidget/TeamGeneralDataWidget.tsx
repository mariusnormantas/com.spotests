/** @format */

import React from "react";
import { format } from "date-fns";
import { t } from "i18next";
import { Card, Text, Tooltip } from "@/library/core";
import { useModals } from "@/library/modals";
import { EditTeamModal } from "../EditTeamModal";
import { TeamGeneralDataWidgetProps } from "./types";
import { AuthRoleGuard } from "@/features/auth";

export const TeamGeneralDataWidget: React.FC<TeamGeneralDataWidgetProps> = ({
  team,
}) => {
  // Initializes component's states, hooks and etc.
  const modals = useModals();

  // Memoized formatted created at date.
  const createdAt = React.useMemo(() => {
    return format(new Date(team.createdAt), "yyyy-MM-dd, HH:mm");
  }, [team]);

  // Memoized "Add description" node.
  const addDescriptionNode = React.useMemo(() => {
    if (team.description.length > 110) {
      return (
        <Tooltip interactions={["click", "dismiss"]} width={300}>
          <Tooltip.Trigger>
            <Text.Body1 asLink>{t("Full description")}</Text.Body1>
          </Tooltip.Trigger>
          <Tooltip.Dialog>{team.description}</Tooltip.Dialog>
        </Tooltip>
      );
    }
    if (!team.description.length) {
      return (
        <Text.Body1
          asLink
          onClick={() =>
            modals.showModal(
              <EditTeamModal team={team} initialFocus="description" />
            )
          }>
          {t("Add description")}
        </Text.Body1>
      );
    }
    return (
      <Text.Body1
        asLink
        onClick={() =>
          modals.showModal(
            <EditTeamModal team={team} initialFocus="description" />
          )
        }>
        {t("Edit description")}
      </Text.Body1>
    );
  }, [modals, team]);

  // Checks, if team is fetched and defined.
  if (!team) return null;
  return (
    <Card.Init variant="neutral">
      <Card.List>
        <Card.Item
          title={`${t("Author")}:`}
          description={t("Account responsible for creation of team")}>
          {team.author}
        </Card.Item>
        <Card.Item
          title={`${t("Total members of team")}:`}
          description={t("Total count of team's trainers and athletes")}>
          {team.trainersCount + team.athletesCount}
        </Card.Item>
        <Card.Item
          title={`${t("Created at")}:`}
          description={t("Team's creation date and time")}>
          {createdAt}
        </Card.Item>
        <Card.Item
          title={`${t("Description")}:`}
          description={
            team.description.length ? team.description : t("No description")
          }>
          <AuthRoleGuard roles={["admin", "organization"]}>
            {addDescriptionNode}
          </AuthRoleGuard>
        </Card.Item>
      </Card.List>
    </Card.Init>
  );
};
