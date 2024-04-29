/** @format */

import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";
import { ErrorResponse } from "@/api";
import { ManageTrainersListingQueryData } from "../services";

export type TrainersListingProviderProps = {
  organizationId?: string;
  teamId?: string;
  children?: React.ReactNode;
};

export type TrainersListingProviderReturn = {
  documents: Array<TrainersListingDocument>;
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

export type TrainersListingDocument = {
  _id: string;
  name: string;
  email: string;
  locked: boolean;
  verifiedAt: string | null;
  createdAt: string;
};

export type TrainerViewProviderProps = object;

export type TrainerViewProviderReturn = {
  trainer?: TrainerViewDocument;
};

export interface TrainerViewDocument extends TrainersListingDocument {
  organization: {
    _id: string;
    name: string;
    locked: boolean;
  };
  author: string;
}

export type ManageTrainersListingProviderProps = TrainersListingProviderProps;

export interface ManageTrainersListingProviderReturn
  extends Omit<TrainersListingProviderReturn, "page" | "setPage" | "total"> {
  initialSelected: Array<TrainersListingDocument>;
  hasNextPage?: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<
    InfiniteQueryObserverResult<ManageTrainersListingQueryData, ErrorResponse>
  >;
}

export type ManageTrainersListingDocument = TrainersListingDocument;

export type TrainerInteractionsListingProviderProps = {
  trainerId: string;
  children: React.ReactNode;
};

export type TrainerInteractionsListingProviderReturn = {
  documents: Array<TrainerInteractionsListingDocument>;
  total: number;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

export type TrainerInteractionsListingDocument = {
  type: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
};
