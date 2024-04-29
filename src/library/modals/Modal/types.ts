/** @format */

import React from "react";
import { ModalInitProps } from "./ModalInit";
import { ModalBodyProps } from "./ModalBody";
import { ModalFooterProps } from "./ModalFooter";
import { ModalHeaderProps } from "./ModalHeader";

// Modal component's props.
export type ModalProps = {
  children: React.ReactNode;
};

// Modal component type.
export type ModalComponent = React.FC<ModalProps> & {
  Init: React.NamedExoticComponent<ModalInitProps>;
  Header: React.NamedExoticComponent<ModalHeaderProps>;
  Body: React.NamedExoticComponent<ModalBodyProps>;
  Footer: React.NamedExoticComponent<ModalFooterProps>;
};

// Modal provider's props.
export type ModalProviderProps = {
  children: React.ReactNode;
};

// Modal provider's return.
export type ModalProviderReturn = {
  disabled: boolean;
};
