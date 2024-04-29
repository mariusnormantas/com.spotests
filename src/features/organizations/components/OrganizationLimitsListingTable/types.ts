/** @format */

import { UseListingProps } from "@/library/listing";
import { OrganizationViewDocument } from "../../contexts";

export interface OrganizationLimitsListingTableProps
  extends UseListingProps<OrganizationLimitsListingTableDocument> {
  organization: OrganizationViewDocument;
}

export type OrganizationLimitsListingTableDocument = {
  name: string;
  context: "teams" | "trainers" | "athletes" | "testings";
  manage: string;
  value: string;
  balance: number;
};
