/** @format */

import { UseListingProps } from "@/library/listing";

export type OrganizationLockReasonListingProps =
  UseListingProps<OrganizationLockReasonListingDocument>;

export type OrganizationLockReasonListingDocument = {
  reason: string;
};
