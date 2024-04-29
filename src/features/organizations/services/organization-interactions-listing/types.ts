/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { OrganizationInteractionsListingDocument } from "../../contexts";

export type UseOrganizationInteractionsListingQueryParams = {
  organizationId: string;
  page: number;
  limit: number;
};

export interface OrganizationInteractionsListingQueryParams
  extends UseOrganizationInteractionsListingQueryParams {
  protectedApi: Axios;
}

export type OrganizationInteractionsListingQueryData = {
  documents: Array<OrganizationInteractionsListingDocument>;
  total: number;
};

export type UseOrganizationInteractionsListingQueryOptions = UseQueryOptions<
  OrganizationInteractionsListingQueryData,
  ErrorResponse
>;

export type UseOrganizationInteractionsListingQueryResult = UseQueryResult<
  OrganizationInteractionsListingQueryData,
  ErrorResponse
>;
