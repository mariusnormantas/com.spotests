/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type EditOrganizationLimitsMutationVariables = {
  organizationId: string;
  trainersLimit: number;
  athletesLimit: number;
  testingsLimit: number;
};

export type EditOrganizationLimitsMutationData = {
  organizationId: string;
};

export type UseEditOrganizationLimitsMutationParams = {
  organizationId: string;
};

export interface EditOrganizationLimitsMutationParams
  extends UseEditOrganizationLimitsMutationParams {
  protectedApi: Axios;
}

export type UseEditOrganizationLimitsMutationOptions = UseMutationOptions<
  EditOrganizationLimitsMutationData,
  ErrorResponse,
  EditOrganizationLimitsMutationVariables
>;
export type UseEditOrganizationLimitsMutationResult = UseMutationResult<
  EditOrganizationLimitsMutationData,
  ErrorResponse,
  EditOrganizationLimitsMutationVariables
>;

export type EditOrganizationLimitsInvalidateQueriesParams = {
  query: Query;
  data: EditOrganizationLimitsMutationData;
  variables: EditOrganizationLimitsMutationVariables;
};
