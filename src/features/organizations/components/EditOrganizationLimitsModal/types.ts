/** @format */

import { OrganizationViewDocument } from "../../contexts";

export type EditOrganizationLimitsModalProps = {
  organization: OrganizationViewDocument;
  initialFocus?: "teams" | "trainers" | "athletes" | "testings";
};
