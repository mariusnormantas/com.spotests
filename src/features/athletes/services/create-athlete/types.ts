/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type CreateAthleteMutationVariables = {
  name: string;
  email: string;
  birthDate: string;
  height: string;
  weight: string;
};

export type CreateAthleteMutationData = {
  athleteId: string;
  organizationId: string;
};

export type UseCreateAthleteMutationParams = {
  organizationId?: string;
};

export interface CreateAthleteMutationParams
  extends UseCreateAthleteMutationParams {
  protectedApi: Axios;
}

export type UseCreateAthleteMutationOptions = UseMutationOptions<
  CreateAthleteMutationData,
  ErrorResponse,
  CreateAthleteMutationVariables
>;
export type UseCreateAthleteMutationResult = UseMutationResult<
  CreateAthleteMutationData,
  ErrorResponse,
  CreateAthleteMutationVariables
>;

export type CreateAthleteInvalidateQueriesParams = {
  query: Query;
  data: CreateAthleteMutationData;
  variables: CreateAthleteMutationVariables;
};
