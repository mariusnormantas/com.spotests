/** @format */

import React from "react";
import { ModalProviderReturn } from "./types";

export const ModalContext = React.createContext<ModalProviderReturn>(
  {} as ModalProviderReturn
);
