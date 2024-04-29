/** @format */

import React from "react";
import { ModalContext } from "./ModalProvider";

export const useModalContext = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useModalContext was called outside of ModalProvider context."
    );
  }
  return context;
};
