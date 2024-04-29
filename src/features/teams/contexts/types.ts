/** @format */

import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";
import { ErrorResponse } from "@/api";
import {
  ManageAthletesListingQueryData,
  ManageTrainersListingQueryData,
} from "../services";

export type TeamsListingProviderProps = {
  organizationId?: string;
  children?: React.ReactNode;
};

export type TeamsListingProviderReturn = {
  documents: Array<TeamsListingDocument>;
  total: number;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export type TeamsListingDocument = {
  _id: string;
  name: string;
  description: string;
  trainersCount: number;
  athletesCount: number;
  createdAt: string;
};

export type TeamViewProviderReturn = {
  team: TeamViewDocument | undefined;
};

export interface TeamViewDocument extends TeamsListingDocument {
  organization: {
    _id: string;
    name: string;
  };
  author: string;
}

export type ManageTrainersListingProviderProps = {
  teamId?: string;
  children?: React.ReactNode;
};

export interface ManageTrainersListingProviderReturn
  extends Omit<
    TeamsListingProviderReturn,
    "documents" | "page" | "setPage" | "total"
  > {
  documents: Array<ManageTrainersListingDocument>;
  initialSelected: Array<ManageTrainersListingDocument>;
  hasNextPage?: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<
    InfiniteQueryObserverResult<ManageTrainersListingQueryData, ErrorResponse>
  >;
}

export type ManageTrainersListingDocument = {
  _id: string;
  name: string;
  email: string;
};

export type ManageAthletesListingProviderProps = {
  teamId?: string;
  children?: React.ReactNode;
};

export interface ManageAthletesListingProviderReturn
  extends Omit<
    TeamsListingProviderReturn,
    "documents" | "page" | "setPage" | "total"
  > {
  documents: Array<ManageAthletesListingDocument>;
  initialSelected: Array<ManageAthletesListingDocument>;
  hasNextPage?: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<
    InfiniteQueryObserverResult<ManageAthletesListingQueryData, ErrorResponse>
  >;
}

export type ManageAthletesListingDocument = {
  _id: string;
  name: string;
  email: string;
};

export type TeamInteractionsListingProviderProps = {
  teamId: string;
  children: React.ReactNode;
};

export type TeamInteractionsListingProviderReturn = {
  documents: Array<TeamInteractionsListingDocument>;
  total: number;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

export type TeamInteractionsListingDocument = {
  type: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
};
