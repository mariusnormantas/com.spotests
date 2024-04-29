/** @format */

import React from "react";
import { ListingContext } from "../ListingProvider";
import { ListingTableHeadline } from "./ListingTableHeadline";
import { ListingTableHeader } from "./ListingTableHeader";
import { ListingTableBody } from "./ListingTableBody";
import { ListingTableFooter } from "./ListingTableFooter";
import { ListingTableToolbar } from "./ListingTableToolbar";
import { ListingTableProps } from "./types";
import * as sc from "./ListingTable.styled";

const _ListingTable: React.FC<ListingTableProps> = ({ listing, ...rest }) => {
  return (
    <ListingContext.Provider value={listing}>
      <sc.Component {...rest} data-component="listing-table">
        <ListingTableToolbar />
        <sc.Wrapper>
          <ListingTableHeadline />
          <ListingTableHeader />
          <sc.Container>
            <ListingTableBody />
            <ListingTableFooter />
          </sc.Container>
        </sc.Wrapper>
      </sc.Component>
    </ListingContext.Provider>
  );
};

export const ListingTable = React.memo(_ListingTable);
ListingTable.displayName = "@/library/listing/ListingTable";
