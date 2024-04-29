/** @format */
import React from "react";

export type ListingVariant = "default" | "grid";

export type ListingRowSize = "small" | "medium";

export type ListingColumn<T> = {
  label: React.ReactNode;
  field?: boolean;
  key?: keyof T;
  render?: (document: T) => React.ReactNode;
};

export type ListingManagement<T> = {
  // icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  node: (document: T) => React.ReactNode;
  conditional?: boolean;
};

export type UseListingProps<T> = {
  // Common props, which valuable only for UI.
  // title?: React.ReactNode;
  headline?: React.ReactNode;
  variant?: ListingVariant;
  // paginated?: boolean;
  rowSize?: ListingRowSize;
  bodySize?: number;
  columns?: Array<ListingColumn<T>>;
  showFooter?: boolean;
  management?: Array<ListingManagement<T>>;

  // Common documents based props.
  documents?: Array<T>;
  total?: number;
  page?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  limit?: number;
  setLimit?: React.Dispatch<React.SetStateAction<number>>;

  // Click feature.
  clickable?: boolean;
  onClickDocument?: (document: T) => void;

  // Search feature.
  searchable?: boolean;
  searchPlaceholder?: string;
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;

  // Select feature.
  selectable?: boolean;
  selected?: Array<T>;
  setSelected?: React.Dispatch<React.SetStateAction<Array<T>>>;
  initialSelected?: Array<T>;
  selectLimit?: number;
  syncSelected?: (selected: Array<T>) => void;
  onSelectDocument?: (document: T) => void;
  onDeselectDocument?: (document: T) => void;

  // Common props, to define listing's status.
  isLoading?: boolean;
  isFetching?: boolean;

  // Infinite listing based props.
  // hasMoreData?: boolean;
  // loadMoreData?: any;
  hasNextPage?: boolean;
  fetchNextPage?: any;
  render?: (document: T) => React.ReactNode;
};

export type UseListingReturn<T> = {
  // Common props, which valuable only for UI.
  // title?: React.ReactNode;
  headline?: React.ReactNode;
  variant: ListingVariant;
  // paginated: boolean;
  rowSize: ListingRowSize;
  bodySize?: number;
  columns: Array<ListingColumn<T>>;
  showFooter: boolean;
  management?: Array<ListingManagement<T>>;

  // Common documents based props.
  documents: Array<T>;
  total: number;
  totalPages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  fillableRows: Array<undefined>;
  showing: Array<number>;
  clickable: boolean;
  handleClickDocument: (document: T) => void;
  renderColumn: (
    column: ListingColumn<T>,
    document: T
  ) =>
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | T[keyof T]
    | null
    | undefined;

  // Search feature.
  searchable: boolean;
  searchPlaceholder: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  // Select feature.
  selectable: boolean;
  selectLimit?: number;
  selected: Array<T>;
  setSelected: React.Dispatch<React.SetStateAction<Array<T>>>;
  isSelectedMax: boolean;
  isDisabledSelect: boolean;
  isSelected: (document: T) => boolean;
  handleSelectDocument: (document: T) => void;

  // Define listing's status.
  isReady: boolean;
  isLoading: boolean;
  isFetching: boolean;

  // Infinite listing based props.
  render?: (document: T) => React.ReactNode;
  hasNextPage?: boolean;
  fetchNextPage?: any;
};
