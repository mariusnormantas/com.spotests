/** @format */

import React from "react";
import { t } from "i18next";
import { UseListingReturn, UseListingProps, ListingColumn } from "./types";
import { useDebounceState } from "../hooks";

export const useListing = <T>({
  // Common props, which valuable only for UI.
  headline,
  variant = "default",
  rowSize = "medium",
  bodySize,
  columns = [],
  showFooter = true,
  management,

  // Common documents based props.
  documents: controlledDocuments = [],
  total: controlledTotal,
  page: controlledPage,
  setPage: setControlledPage,
  limit: controlledLimit,
  setLimit: setControlledLimit,

  // Click feature.
  clickable: controlledClickable = false,
  onClickDocument,

  // Search feature.
  searchable = true,
  searchPlaceholder = t("Search"),
  search: controlledSearch,
  setSearch: setControlledSearch,

  // Select feature.
  selectable: controlledSelectable = false,
  initialSelected = [],
  selectLimit,
  selected: controlledSelected,
  setSelected: setControlledSelected,
  syncSelected,
  onSelectDocument,
  onDeselectDocument,

  // Common props, to define listing's status.
  isLoading = false,
  isFetching = false,

  // Infinite listing based props.
  render,
  hasNextPage,
  fetchNextPage,
}: UseListingProps<T>): UseListingReturn<T> => {
  // Initializes component's states, hooks and etc.
  const initialSelectedUpdated = React.useRef(false);
  const initialSyncUpdated = React.useRef(false);

  // Page.
  const [uncontrolledPage, setUncontrolledPage] = React.useState(1);
  const page = controlledPage ?? uncontrolledPage;
  const setPage = setControlledPage ?? setUncontrolledPage;

  // Limit.
  const [uncontrolledLimit, setUncontrolledLimit] = React.useState(10);
  const limit = controlledLimit ?? uncontrolledLimit;
  const setLimit = setControlledLimit ?? setUncontrolledLimit;

  // Search.
  const [searchState, setSearchState] = React.useState("");
  const [uncontrolledSearch, setUncontrolledSearch] = useDebounceState(
    searchState,
    setSearchState
  );
  const search = controlledSearch ?? uncontrolledSearch;
  const setSearch = setControlledSearch ?? setUncontrolledSearch;

  // Selected.
  const [uncontrolledSelected, setUncontrolledSelected] =
    React.useState<Array<T>>(initialSelected);
  const selected = controlledSelected ?? uncontrolledSelected;
  const setSelected = setControlledSelected ?? setUncontrolledSelected;

  // Memoized value, which defines, if listing is ready to be clicked and manipulated.
  const isReady = React.useMemo(
    () => !isLoading && !isFetching,
    [isLoading, isFetching]
  );

  // Callback, which returns paginated array of documents.
  const getPaginatedDocuments = React.useCallback(
    (documents: Array<T>) => {
      // When limit is 0 or less, it means there is no limit.
      if (limit > 0) {
        const index = [(page - 1) * limit, (page - 1) * limit + limit];
        return documents.slice(index[0], index[1]);
      }
      return documents;
    },
    [page, limit]
  );
  // Memoized filtered documents, which is used when filters are active.
  const filteredDocuments = React.useMemo(() => {
    let filteredDocs: Array<T> | undefined;
    // Checks, if search has value.
    if (search.length && isReady) {
      filteredDocs = controlledDocuments.filter((doc) => {
        // Stringifies document's data, so it can be searched through all the visible content.
        const data = Object.keys(doc as object).map((key) => {
          return t(doc[key as keyof T] as string); // Search is by visible content, so when it is globally english, we should translate it's value to the client's language.
        });
        const stringified = data
          .toString()
          .replaceAll(",", " ")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        return stringified.includes(search.toLowerCase());
      });
      return filteredDocs;
    }
    // When there is no filters active, returns initial documents.
    return controlledDocuments;
  }, [search, isReady, controlledDocuments]);

  // Documents is memoized, because in case we need to sort, filter or etc. static documents.
  const documents = React.useMemo(() => {
    if (!fetchNextPage && filteredDocuments.length > limit) {
      return getPaginatedDocuments(filteredDocuments);
    }
    return filteredDocuments;
  }, [fetchNextPage, filteredDocuments, limit, getPaginatedDocuments]);

  // Total count of documents is memoized, because there is chance that documents are fetched with total count value.
  const total = React.useMemo(() => {
    if (!controlledTotal) {
      return filteredDocuments.length;
    }
    return controlledTotal;
  }, [controlledTotal, filteredDocuments]);

  // Memoized count of total pages.
  const totalPages = React.useMemo(() => {
    const count = Math.ceil(total / limit);
    return count > 0 ? count : 1;
  }, [total, limit]);

  // Memoized value, to calculate showing from index.
  const showing = React.useMemo(() => {
    const from = (page - 1) * limit + 1;
    const to = Math.min(from - 1 + limit, total);
    return [from, to];
  }, [page, limit, total]);

  // Memoized count of fillable rows.
  const fillableRows = React.useMemo(
    () =>
      Array.from<undefined>({
        length: bodySize
          ? bodySize - documents.length
          : limit - documents.length,
      }),
    [limit, documents, bodySize]
  );

  // Callback, which checks if documents are equal.
  const isDocumentsEqual = React.useMemo(() => {
    return (doc1: T, doc2: T) => {
      const keys1 = Object.keys(doc1 as object) as (keyof T)[];
      const keys2 = Object.keys(doc2 as object) as (keyof T)[];
      if (keys1.length !== keys2.length) {
        return false;
      }
      return keys1.every(
        (key) =>
          Object.prototype.hasOwnProperty.call(doc2, key) &&
          doc2[key] === doc1[key]
      );
    };
  }, []);

  // Memoized clickable state.
  const clickable = React.useMemo(
    () => controlledClickable || !!onClickDocument,
    [controlledClickable, onClickDocument]
  );

  // Memoized selectable state.
  const selectable = React.useMemo(
    () => controlledSelectable || !!onSelectDocument,
    [controlledSelectable, onSelectDocument]
  );

  // Memoized state, which tells if there is selected maximum documents.
  const isSelectedMax = React.useMemo(() => {
    if (selectLimit && selected.length >= selectLimit) return true;
    return false;
  }, [selected, selectLimit]);

  // Callback, which checks if document is already selected.
  const isSelected = React.useCallback(
    (document: T) => {
      return selected.some((item) => isDocumentsEqual(item, document));
    },
    [selected, isDocumentsEqual]
  );

  const isDisabledSelect = React.useMemo(() => {
    if (selectLimit && selectLimit > 1 && isSelectedMax) {
      return true;
    }
    return false;
  }, [selectLimit, isSelectedMax]);

  // Callback, which handles synchronized selected documents.
  const handleSyncSelected = React.useCallback(
    (documents?: Array<T>) => {
      if (syncSelected) {
        syncSelected(documents ?? selected);
        console.log("handleSyncSelected");
      }
    },
    [selected, syncSelected]
  );

  // Callback, which handles click on document.
  const handleClickDocument = React.useCallback(
    (document: T) => {
      if (!isReady) return;
      onClickDocument?.(document);
    },
    [onClickDocument, isReady]
  );

  // Callback, which handles selection of document.
  const handleSelectDocument = React.useCallback(
    (document: T) => {
      if (!isReady || !selectable) return;

      // When select has limit equal to single document.
      if (selectLimit === 1) {
        if (!isSelected(document)) {
          setSelected([document]);
          handleSyncSelected([document]);
          return onSelectDocument?.(document);
        }
        setSelected([]);
        handleSyncSelected([]);
        return onDeselectDocument?.(document);
      }

      // Checks if document is not selected and there is not selected more documents than selection's limit.
      if (!isSelected(document) && !isSelectedMax) {
        const updatedSelection = Array.isArray(selected)
          ? [...selected, document]
          : [document];
        setSelected(updatedSelection);
        handleSyncSelected(updatedSelection);
        return onSelectDocument?.(document);
      }
      // When document is already selected, we should always deselect it.
      else if (isSelected(document)) {
        const updatedSelection = selected.filter(
          (target) => !isDocumentsEqual(target, document)
        );
        setSelected(updatedSelection);
        handleSyncSelected(updatedSelection);
        return onDeselectDocument?.(document);
      }
    },
    [
      isReady,
      selectable,
      selectLimit,
      isSelected,
      isSelectedMax,
      setSelected,
      handleSyncSelected,
      onDeselectDocument,
      onSelectDocument,
      selected,
      isDocumentsEqual,
    ]
  );

  // Callback, which renders each document's column.
  const renderColumn = React.useCallback(
    (column: ListingColumn<T>, document: T) => {
      // Checks, if target column has render callback.
      if (column.render) return column.render(document);
      // Also checks, if column has defined "key", so it should render simply by document.
      else if (column.key) return document[column.key];
    },
    []
  );

  // Effect, which listens when page is more than total pages or page is less than first, which is unlogical.
  React.useEffect(() => {
    if (page > totalPages && isReady) {
      setPage(totalPages);
    } else if (page < 1) {
      setPage(1);
    }
  }, [page, setPage, totalPages, isReady]);

  // Effect, which handles initial selected documents, in case we are waiting for data to fetch, so we should update it before
  React.useLayoutEffect(() => {
    if (selectable && !initialSelectedUpdated.current && isReady) {
      setSelected(initialSelected);
      initialSelectedUpdated.current = true;

      if (syncSelected && !initialSyncUpdated.current) {
        syncSelected(initialSelected);
        initialSyncUpdated.current = true;
      }
    }
  }, [selectable, initialSelected, isReady, setSelected, syncSelected]);

  return {
    // Common props, which valuable only for UI.
    headline,
    variant,
    rowSize,
    bodySize,
    columns,
    showFooter,
    management,

    // Common documents based props.
    documents,
    total,
    totalPages,
    page,
    setPage,
    limit,
    setLimit,
    showing,
    fillableRows,
    clickable,
    handleClickDocument,
    renderColumn,

    // Search feature.
    searchable,
    searchPlaceholder,
    search,
    setSearch,

    // Select feature.
    selectable,
    selected,
    setSelected,
    selectLimit,
    isSelected,
    isDisabledSelect,
    isSelectedMax,
    handleSelectDocument,

    // Define listing's status.
    isReady,
    isLoading,
    isFetching,

    // Infinite listing based props.
    render,
    hasNextPage,
    fetchNextPage,
  };
};
