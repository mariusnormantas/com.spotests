/** @format */

import { useQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  UseOrganizationInteractionsListingQueryParams,
  OrganizationInteractionsListingQueryData,
  OrganizationInteractionsListingQueryParams,
  UseOrganizationInteractionsListingQueryOptions,
  UseOrganizationInteractionsListingQueryResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param params OrganizationInteractionsListingQueryParams
 * @returns Promise<OrganizationInteractionsListingQueryData>
 */
const queryFn = async (
  params: OrganizationInteractionsListingQueryParams
): Promise<OrganizationInteractionsListingQueryData> => {
  const searchParams = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
  });
  const response = await params.protectedApi.get(
    `/api/organization/v1/${
      params.organizationId
    }/interactions?${searchParams.toString()}`
  );
  return response.data;
};

export const useOrganizationInteractionsListingQuery = (
  params: UseOrganizationInteractionsListingQueryParams,
  options?: UseOrganizationInteractionsListingQueryOptions
): UseOrganizationInteractionsListingQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();

  // Extracts parameters, to configure query's key.
  const { organizationId, ...rest } = params;
  return useQuery<OrganizationInteractionsListingQueryData, ErrorResponse>(
    ["interactions-listing", organizationId, rest],
    async () => await queryFn({ protectedApi, ...params }),
    options
  );
};
