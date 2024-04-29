/** @format */

import React from "react";
import { t } from "i18next";
import { Listing, useListing } from "@/library/listing";
import { OrganizationLockReasonListingProps } from "./types";

export const OrganizationLockReasonListing: React.FC<
  OrganizationLockReasonListingProps
> = ({ selectable = true, selectLimit = 1, bodySize = 5, ...rest }) => {
  // Initializes component's states, hooks and etc.
  const listing = useListing({
    bodySize,
    documents: [
      { reason: "Lock due to non-payment" },
      { reason: "Lock due to end of trial period" },
      { reason: "Lock due to other reasons" },
    ],
    render: (document) => t(document.reason),
    selectable,
    selectLimit,
    ...rest,
  });
  return <Listing listing={listing} />;
};
