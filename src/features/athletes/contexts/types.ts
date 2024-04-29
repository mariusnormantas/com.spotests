/** @format */

import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";
import { ErrorResponse } from "@/api";
import { ManageAthletesListingQueryData } from "../services";

export type AthletesListingProviderProps = {
  organizationId?: string;
  teamId?: string;
  children?: React.ReactNode;
};

export type AthletesListingProviderReturn = {
  documents: Array<AthletesListingDocument>;
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

export type AthletesListingDocument = {
  _id: string;
  name: string;
  email: string;
  locked: true;
  verifiedAt: string | null;
  createdAt: string;
};

export type AthleteViewProviderProps = object;

export type AthleteViewProviderReturn = {
  athlete: AthleteViewDocument | undefined;
};

export interface AthleteViewDocument extends AthletesListingDocument {
  birthDate: string;
  height: number;
  weight: number;
  organization: {
    _id: string;
    name: string;
    locked: boolean;
  };
  author: string;
}

export type ManageAthletesListingProviderProps = AthletesListingProviderProps;

export interface ManageAthletesListingProviderReturn
  extends Omit<AthletesListingProviderReturn, "page" | "setPage" | "total"> {
  initialSelected: Array<AthletesListingDocument>;
  hasNextPage?: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<
    InfiniteQueryObserverResult<ManageAthletesListingQueryData, ErrorResponse>
  >;
}

export type ManageAthletesListingDocument = AthletesListingDocument;

export type AthleteInteractionsListingProviderProps = {
  athleteId: string;
  children: React.ReactNode;
};

export type AthleteInteractionsListingProviderReturn = {
  documents: Array<AthleteInteractionsListingDocument>;
  total: number;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

export type AthleteInteractionsListingDocument = {
  type: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
};
