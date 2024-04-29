/** @format */

import React from "react";
import {
  PiCircleNotchBold,
  PiCaretLeftFill,
  PiCaretRightFill,
} from "react-icons/pi";
import { t } from "i18next";
import { Button, Icon } from "@/library/core";
import { useListingContext } from "../../use-listing-context";
import * as sc from "./ListingTablePagination.styled";

const _ListingTablePagination: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const context = useListingContext();

  return (
    <sc.Component data-component="listing-pagination">
      <sc.Page>
        {!context.isReady ? (
          <sc.AnimatedIcon as={Icon} render={PiCircleNotchBold} size={1.25} />
        ) : (
          t("Page {{number}} of {{total}}", {
            number: context.page,
            total: context.totalPages,
          })
        )}
      </sc.Page>
      {context.totalPages > 1 && (
        <React.Fragment>
          <Button
            iconStart={PiCaretLeftFill}
            variant="subtle"
            size="extra-small"
            counter
            title={t("Page {{number}}", {
              number: context.page <= 1 ? context.totalPages : context.page - 1,
            })}
            disabled={!context.isReady || context.totalPages <= 1}
            onClick={() => {
              if (context.page <= 1) {
                context.setPage(context.totalPages);
                return;
              }
              context.setPage((current) => current - 1);
            }}
          />
          <Button
            iconStart={PiCaretRightFill}
            variant="subtle"
            size="extra-small"
            counter
            title={t("Page {{number}}", {
              number: context.page >= context.totalPages ? 1 : context.page + 1,
            })}
            disabled={!context.isReady || context.totalPages <= 1}
            onClick={() => {
              if (context.page >= context.totalPages) {
                context.setPage(1);
                return;
              }
              context.setPage((current) => current + 1);
            }}
          />
        </React.Fragment>
      )}
    </sc.Component>
  );
};

export const ListingTablePagination = React.memo(_ListingTablePagination);
ListingTablePagination.displayName = "@/library/listing/ListingTablePagination";
