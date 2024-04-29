/** @format */

import { TrainerViewDocument } from "../contexts";

export type UseCreateTrainerProps = {
  organizationId?: string;
};

export type UseEditTrainerAccountFormProps = {
  trainer: TrainerViewDocument;
};

export type UseDeleteTrainerFormProps = {
  trainer: TrainerViewDocument;
};
