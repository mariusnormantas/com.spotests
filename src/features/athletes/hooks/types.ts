/** @format */

import { AthleteViewDocument } from "../contexts";

export type UseCreateAthleteFormProps = {
  organizationId?: string;
};

export type UseEditAthleteAccountFormProps = {
  athlete: AthleteViewDocument;
};

export type UseEditAthleteDataFormProps = {
  athlete: AthleteViewDocument;
};

export type UseDeleteAthleteFormProps = {
  athleteId: string;
  athleteName: string;
};
