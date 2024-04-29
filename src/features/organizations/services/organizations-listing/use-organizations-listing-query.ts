/** @format */

import { useQuery } from "react-query";
import { ErrorResponse } from "@/api";
import { useProtectedApi } from "@/features/auth";
import {
  UseOrganizationsListingQueryParams,
  OrganizationsListingQueryData,
  OrganizationsListingQueryParams,
  UseOrganizationsListingQueryOptions,
  UseOrganizationsListingQueryResult,
} from "./types";

/**
 * Function, which is used to send request.
 * @param params OrganizationsListingQueryParams
 * @returns Promise<OrganizationsListingQueryData>
 */
const queryFn = async (
  params: OrganizationsListingQueryParams
): Promise<OrganizationsListingQueryData> => {
  const query = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
  });
  params.search && query.append("search", params.search);

  // Retrieves list of organizations.
  const response = await params.protectedApi.get(
    `/api/organization/v1/listing?${query.toString()}`
  );
  return response.data;
};

export const useOrganizationsListingQuery = (
  params: UseOrganizationsListingQueryParams,
  options?: UseOrganizationsListingQueryOptions
): UseOrganizationsListingQueryResult => {
  // Initializes component's states, hooks and etc.
  const protectedApi = useProtectedApi();
  return useQuery<OrganizationsListingQueryData, ErrorResponse>(
    ["organizations-listing", params],
    async () => await queryFn({ protectedApi, ...params }),
    options
  );
};
