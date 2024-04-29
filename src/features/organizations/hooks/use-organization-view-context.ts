/** @format */

import React from "react";
import {
  OrganizationViewContext,
  OrganizationViewProviderReturn,
} from "../contexts";

export const useOrganizationViewContext =
  (): OrganizationViewProviderReturn => {
    const context = React.useContext<OrganizationViewProviderReturn>(
      OrganizationViewContext
    );
    if (!context) {
      throw new Error(
        "useOrganizationViewContext was called outside of OrganizationViewProvider context."
      );
    }
    return context;
  };
