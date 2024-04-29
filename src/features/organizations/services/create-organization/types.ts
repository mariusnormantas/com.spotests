/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type CreateOrganizationMutationVariables = {
  name: string;
  email: string;
  trainersLimit: number;
  athletesLimit: number;
  testingsLimit: number;
};

export type CreateOrganizationMutationData = {
  organizationId: string;
};

export type CreateOrganizationMutationParams = {
  protectedApi: Axios;
};

export type UseCreateOrganizationMutationOptions = UseMutationOptions<
  CreateOrganizationMutationData,
  ErrorResponse,
  CreateOrganizationMutationVariables
>;
export type UseCreateOrganizationMutationResult = UseMutationResult<
  CreateOrganizationMutationData,
  ErrorResponse,
  CreateOrganizationMutationVariables
>;

export type CreateOrganizationInvalidateQueriesParams = {
  query: Query;
  data: CreateOrganizationMutationData;
  variables: CreateOrganizationMutationVariables;
};
