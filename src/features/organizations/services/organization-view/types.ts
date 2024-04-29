/** @format */

import { UseQueryOptions, UseQueryResult } from "react-query";
import { Axios } from "axios";
import { ErrorResponse } from "@/api";
import { OrganizationViewDocument } from "../../contexts";

export type UseOrganizationViewQueryParams = {
  organizationId: string;
};

export interface OrganizationViewQueryParams
  extends UseOrganizationViewQueryParams {
  protectedApi: Axios;
}

export type OrganizationViewQueryData = OrganizationViewDocument;

export type UseOrganizationViewQueryOptions = UseQueryOptions<
  OrganizationViewQueryData,
  ErrorResponse
>;

export type UseOrganizationViewQueryResult = UseQueryResult<
  OrganizationViewQueryData,
  ErrorResponse
>;
