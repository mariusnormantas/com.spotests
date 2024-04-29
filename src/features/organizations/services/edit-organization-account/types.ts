/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type EditOrganizationAccountMutationVariables = {
  name: string;
  email: string;
  trainersLimit: number;
  athletesLimit: number;
  testingsLimit: number;
};

export type EditOrganizationAccountMutationData = {
  organizationId: string;
};

export type UseEditOrganizationAccountMutationParams = {
  organizationId: string;
};

export interface EditOrganizationAccountMutationParams
  extends UseEditOrganizationAccountMutationParams {
  protectedApi: Axios;
}

export type UseEditOrganizationAccountMutationOptions = UseMutationOptions<
  EditOrganizationAccountMutationData,
  ErrorResponse,
  EditOrganizationAccountMutationVariables
>;
export type UseEditOrganizationAccountMutationResult = UseMutationResult<
  EditOrganizationAccountMutationData,
  ErrorResponse,
  EditOrganizationAccountMutationVariables
>;

export type EditOrganizationAccountInvalidateQueriesParams = {
  query: Query;
  data: EditOrganizationAccountMutationData;
  variables: EditOrganizationAccountMutationVariables;
};
