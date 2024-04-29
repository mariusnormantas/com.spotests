/** @format */

import React from "react";
import { UseListingReturn } from "../types";

export interface ListingProps extends React.HTMLAttributes<HTMLDivElement> {
  listing: UseListingReturn<any>;
}
