/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { OrganizationsListingDocument } from "../../contexts";

export type UseOrganizationsListingQueryParams = {
  page: number;
  limit: number;
  search: string;
};

export interface OrganizationsListingQueryParams
  extends UseOrganizationsListingQueryParams {
  protectedApi: Axios;
}

export type OrganizationsListingQueryData = {
  documents: Array<OrganizationsListingDocument>;
  total: number;
};

export type UseOrganizationsListingQueryOptions = UseQueryOptions<
  OrganizationsListingQueryData,
  ErrorResponse
>;

export type UseOrganizationsListingQueryResult = UseQueryResult<
  OrganizationsListingQueryData,
  ErrorResponse
>;
