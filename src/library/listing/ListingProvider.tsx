/** @format */

import React from "react";
import { UseListingReturn } from "./types";

export const ListingContext = React.createContext<UseListingReturn<any>>(
  {} as UseListingReturn<any>
);
