/** @format */

import React from "react";
import { PiCircleNotchBold } from "react-icons/pi";
import { t } from "i18next";
import { Icon, Text } from "@/library/core";
import { useListingContext } from "../../use-listing-context";
import * as sc from "./ListingFooter.styled";

const _ListingFooter: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const context = useListingContext();

  // Checks, if more data exists, which can be loaded.
  if (!context.showFooter || !context.hasNextPage) return null;
  return (
    <sc.Component data-component="listing-footer">
      <sc.Container>
        {!context.isReady ? (
          <sc.AnimatedIcon as={Icon} render={PiCircleNotchBold} size={1.4} />
        ) : context.hasNextPage ? (
          <Text.Caption2
            asLink
            color="primary"
            weight="strong"
            onClick={() => context.fetchNextPage()}>
            {t("Show more options")}
          </Text.Caption2>
        ) : (
          <Text.Caption2 weight="strong">
            {context.search
              ? t("Search results: {{count}}", {
                  count: context.documents.length,
                })
              : t("Showing all options")}
          </Text.Caption2>
        )}
      </sc.Container>
    </sc.Component>
  );
};

export const ListingFooter = React.memo(_ListingFooter);
ListingFooter.displayName = "@/library/listing/ListingFooter";
