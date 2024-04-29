/** @format */

import React from "react";
import { PiPencilLineDuotone } from "react-icons/pi";
import { t } from "i18next";
import { Icon, Text } from "@/library/core";
import { ListingTable, useListing } from "@/library/listing";
import { useModals } from "@/library/modals";
import { EditOrganizationLimitsModal } from "../EditOrganizationLimitsModal";
import { OrganizationLimitsListingTableProps } from "./types";
import * as sc from "./OrganizationLimitsListingTable.styled";

export const OrganizationLimitsListingTable: React.FC<
  OrganizationLimitsListingTableProps
> = ({ organization, limit = 4, ...rest }) => {
  // Initializes component's states, hooks and etc.
  const { showModal } = useModals();

  // Initializes listing for statistics.
  const listing = useListing({
    documents: [
      {
        name: t("Teams limit"),
        context: "teams",
        manage: t("Change teams limit"),
        value: t("{{value1}} of {{value2}}", {
          value1: organization.teamsCount,
          value2: organization.teamsLimit,
        }),
        balance: organization.teamsLimit - organization.teamsCount,
      },
      {
        name: t("Trainers limit"),
        context: "trainers",
        manage: t("Change trainers limit"),
        value: t("{{value1}} of {{value2}}", {
          value1: organization.trainersCount,
          value2: organization.trainersLimit,
        }),
        balance: organization.trainersLimit - organization.trainersCount,
      },
      {
        name: t("Athletes limit"),
        context: "athletes",
        manage: t("Change athletes limit"),
        value: t("{{value1}} of {{value2}}", {
          value1: organization.athletesCount,
          value2: organization.athletesLimit,
        }),
        balance: organization.athletesLimit - organization.athletesCount,
      },
      {
        name: t("Testings limit"),
        context: "testings",
        manage: t("Change testings limit"),
        value: t("{{value1}} of {{value2}}", {
          value1: organization.testingsCount,
          value2: organization.testingsLimit * organization.athletesCount,
        }),
        balance:
          organization.testingsLimit * organization.athletesCount -
          organization.testingsCount,
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
        render: (document) => {
          return (
            <sc.Manage
              as={Text.Body1}
              asLink
              color="body"
              weight="strong"
              onClick={() =>
                showModal(
                  <EditOrganizationLimitsModal
                    organization={organization}
                    initialFocus={document.context}
                  />
                )
              }>
              <Icon render={PiPencilLineDuotone} size={1.25} />
              <span>{document.manage}</span>
            </sc.Manage>
          );
        },
      },
      {
        label: t("Balance"),
        key: "balance",
      },
      {
        label: t("Assigned"),
        key: "value",
      },
    ],
    limit,
    ...rest,
  });
  return <sc.Table as={ListingTable} listing={listing} />;
};
