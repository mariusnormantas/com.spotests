/** @format */

import React from "react";
import { PiXBold } from "react-icons/pi";
import { Button } from "@/library/core";
import { useModals } from "../../use-modals";
import { ModalHeaderProps } from "./types";
import * as sc from "./ModalHeader.styled";

const _ModalHeader: React.FC<ModalHeaderProps> = ({ title, description }) => {
  // Initializes component's hooks, states and etc.
  const { hideModal, disabled } = useModals();

  return (
    <sc.Component data-component="modal-header">
      <sc.Container>
        <sc.Title>{title}</sc.Title>
        {description && <sc.Description>{description}</sc.Description>}
      </sc.Container>
      <Button
        variant="neutral"
        size="small"
        disabled={disabled}
        iconStart={PiXBold}
        onClick={() => !disabled && hideModal()}
        counter
      />
    </sc.Component>
  );
};

export const ModalHeader = React.memo(_ModalHeader);
ModalHeader.displayName = "@/library/modals/ModalHeader";
