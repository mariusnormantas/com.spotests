/** @format */

import { useQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  OrganizationViewQueryParams,
  OrganizationViewQueryData,
  UseOrganizationViewQueryParams,
  UseOrganizationViewQueryResult,
  UseOrganizationViewQueryOptions,
} from "./types";

/**
 * Function, which is used to send request.
 * @params OrganizationViewQueryParams
 * @returns Promise<OrganizationViewQueryData>
 */
const queryFn = async (
  params: OrganizationViewQueryParams
): Promise<OrganizationViewQueryData> => {
  const response = await params.protectedApi.get(
    `/api/organization/v1/${params.organizationId}/view`
  );
  return response.data;
};

export const useOrganizationViewQuery = (
  params: UseOrganizationViewQueryParams,
  options?: UseOrganizationViewQueryOptions
): UseOrganizationViewQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();
  return useQuery<OrganizationViewQueryData, ErrorResponse>(
    ["organization-view", params.organizationId],
    async () => await queryFn({ protectedApi, ...params }),
    options
  );
};
