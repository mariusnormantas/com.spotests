/** @format */

import { ListingContext } from "../ListingProvider";
import { ListingHeader } from "./ListingHeader";
import { ListingBody } from "./ListingBody";
import { ListingFooter } from "./ListingFooter";
import { ListingProps } from "./types";
import * as sc from "./Listing.styled";
import React from "react";

const _Listing: React.FC<ListingProps> = ({ listing, ...rest }) => {
  return (
    <ListingContext.Provider value={listing}>
      <sc.Component {...rest} data-component="listing">
        <ListingHeader />
        <sc.Wrapper>
          <ListingBody />
          <ListingFooter />
        </sc.Wrapper>
      </sc.Component>
    </ListingContext.Provider>
  );
};

export const Listing = React.memo(_Listing);
Listing.displayName = "@/library/listing/Listing";
