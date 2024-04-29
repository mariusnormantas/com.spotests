/** @format */

import React from "react";
import { t } from "i18next";
import { Text, Tooltip } from "@/library/core";
import { Listing, useListing } from "@/library/listing";
import { getInitials } from "@/library/utils";
import { useDashboardLinks } from "@/features/dashboard";
import { ManageTrainersListingDocument } from "../../contexts";
import { useManageTrainersListingContext } from "../../hooks";
import { ManageTrainersListingProps } from "./types";
import * as sc from "./ManageTrainersListing.styled";

export const ManageTrainersListing: React.FC<ManageTrainersListingProps> = ({
  selectable = true,
  ...rest
}) => {
  // Initializes component's states, hooks and etc.
  const links = useDashboardLinks();
  const context = useManageTrainersListingContext();

  // Callback, which renders listing's document.
  const render = React.useCallback(
    (document: ManageTrainersListingDocument) => {
      const initials = getInitials(document.name).slice(0, 2);
      return (
        <sc.Render>
          <sc.Initials>{initials}</sc.Initials>
          <sc.Details>
            <Tooltip>
              <Tooltip.Trigger>
                <Text.Body1
                  asLink
                  color="title"
                  weight="strong"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!context.isLoading && !context.isFetching) {
                      window.open(`${links.trainers}/${document._id}`);
                    }
                  }}>
                  {document.name}
                </Text.Body1>
              </Tooltip.Trigger>
              <Tooltip.Dialog>{t("Open link in new tab")}</Tooltip.Dialog>
            </Tooltip>
            <Text.Caption2 render="span" color="description">
              {document.email}
            </Text.Caption2>
          </sc.Details>
        </sc.Render>
      );
    },
    [context.isFetching, context.isLoading, links.trainers]
  );

  // Listing's data.
  const listing = useListing({
    ...context,
    selectable,
    render,
    ...rest,
  });
  return <Listing listing={listing} />;
};
