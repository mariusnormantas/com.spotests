/** @format */

import { TeamViewDocument } from "../contexts";

export type UseCreateTeamFormProps = {
  organizationId?: string;
};

export type UseEditTeamFormProps = {
  team: TeamViewDocument;
};

export type UseEditTeamMembersFormProps = {
  teamId: string;
};

export type UseDeleteTeamFormProps = {
  team: TeamViewDocument;
};
