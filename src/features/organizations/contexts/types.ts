/** @format */

import React from "react";

export type OrganizationsListingProviderProps = {
  children?: React.ReactNode;
};

export type OrganizationsListingProviderReturn = {
  documents: Array<OrganizationsListingDocument>;
  total: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  isFetching: boolean;
};

export type OrganizationsListingDocument = {
  _id: string;
  name: string;
  email: string;
  locked: boolean;
  verifiedAt: string | null;
  createdAt: string;
};

export type OrganizationViewProviderReturn = {
  organization: OrganizationViewDocument | undefined;
};

export interface OrganizationViewDocument extends OrganizationsListingDocument {
  teamsCount: number;
  teamsLimit: number;
  trainersCount: number;
  trainersLimit: number;
  athletesCount: number;
  athletesLimit: number;
  testingsCount: number;
  testingsLimit: number;
}

export type OrganizationInteractionsListingProviderProps = {
  organizationId: string;
  children: React.ReactNode;
};

export type OrganizationInteractionsListingProviderReturn = {
  documents: Array<OrganizationInteractionsListingDocument>;
  total: number;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

export type OrganizationInteractionsListingDocument = {
  type: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
};
