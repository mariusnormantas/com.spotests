/** @format */

import { Axios } from "axios";
import { Query, UseMutationOptions, UseMutationResult } from "react-query";
import { ErrorResponse } from "@/api";

export type EditOrganizationLockMutationVariables = {
  status: boolean;
  reason: string;
};

export type EditOrganizationLockMutationData = {
  organizationId: string;
};

export type UseEditOrganizationLockMutationParams = {
  organizationId: string;
};

export interface EditOrganizationLockMutationParams
  extends UseEditOrganizationLockMutationParams {
  protectedApi: Axios;
}

export type UseEditOrganizationLockMutationOptions = UseMutationOptions<
  EditOrganizationLockMutationData,
  ErrorResponse,
  EditOrganizationLockMutationVariables
>;
export type UseEditOrganizationLockMutationResult = UseMutationResult<
  EditOrganizationLockMutationData,
  ErrorResponse,
  EditOrganizationLockMutationVariables
>;

export type EditOrganizationLockInvalidateQueriesParams = {
  query: Query;
  data: EditOrganizationLockMutationData;
  variables: EditOrganizationLockMutationVariables;
};
