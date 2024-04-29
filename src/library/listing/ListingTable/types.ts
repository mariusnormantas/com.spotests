/** @format */

import React from "react";
import { UseListingReturn } from "../types";

export interface ListingTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  listing: UseListingReturn<any>;
}
