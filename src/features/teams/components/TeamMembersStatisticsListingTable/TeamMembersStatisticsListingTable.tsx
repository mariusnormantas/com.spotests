/** @format */

import React from "react";
import { PiUserSwitchDuotone } from "react-icons/pi";
import { t } from "i18next";
import { ListingTable, useListing } from "@/library/listing";
import { Icon, Text } from "@/library/core";
import { useModals } from "@/library/modals";
import { ManageTeamMembersModal } from "../ManageTeamMembersModal";
import { TeamMembersStatisticsListingTableProps } from "./types";
import * as sc from "./TeamMembersStatisticsListingTable.styled";

export const TeamMembersStatisticsListingTable: React.FC<
  TeamMembersStatisticsListingTableProps
> = ({ team, limit = 2, ...rest }) => {
  // Initializes component's states, hooks and etc.
  const modals = useModals();
  const listing = useListing({
    documents: [
      {
        context: "trainers",
        name: t("Trainers of team"),
        manage: t("Manage trainers of team"),
        current: t("{{count}} trainer(-s)", { count: team.trainersCount }),
      },
      {
        context: "athletes",
        name: t("Athletes of team"),
        manage: t("Manage athletes of team"),
        current: t("{{count}} athlete(-s)", { count: team.athletesCount }),
      },
    ],
    columns: [
      {
        label: t("Name"),
        key: "name",
      },
      {
        label: t("Management"),
        key: "manage",
        render: (document) => (
          <sc.Manage
            as={Text.Body1}
            asLink
            color="body"
            weight="strong"
            onClick={() =>
              modals.showModal(
                <ManageTeamMembersModal
                  teamId={team._id}
                  teamName={team.name}
                  initialTab={document.context}
                />
              )
            }>
            <Icon render={PiUserSwitchDuotone} size={1.25} />
            <span>{document.manage}</span>
          </sc.Manage>
        ),
      },
      {
        label: t("Assigned"),
        key: "current",
      },
    ],
    limit,
    ...rest,
  });

  return <sc.Table as={ListingTable} listing={listing} />;
};
