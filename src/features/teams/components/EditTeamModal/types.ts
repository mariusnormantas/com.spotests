/** @format */

import { TeamViewDocument } from "../../contexts";

export type EditTeamModalProps = {
  team: TeamViewDocument;
  initialFocus?: "name" | "description";
};
