/** @format */

import { UseListingProps } from "@/library/listing";
import { TeamViewDocument } from "../../contexts";

export interface TeamMembersStatisticsListingTableProps
  extends UseListingProps<TeamMembersStatisticsListingDocument> {
  team: TeamViewDocument;
}

export type TeamMembersStatisticsListingDocument = {
  context: "trainers" | "athletes";
  name: string;
  current: string;
  manage: string;
};
