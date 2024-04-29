/** @format */

import React from "react";
import { ModalBodyProps } from "./types";
import * as sc from "./ModalBody.styled";

const _ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return <sc.Component data-component="modal-body">{children}</sc.Component>;
};

export const ModalBody = React.memo(_ModalBody);
ModalBody.displayName = "@/library/modals/ModalBody";
