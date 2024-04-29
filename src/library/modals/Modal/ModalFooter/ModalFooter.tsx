/** @format */

import React from "react";
import { t } from "i18next";
import { Button } from "@/library/core";
import { useModals } from "../../use-modals";
import { useModalContext } from "../use-modal-context";
import { ModalFooterProps } from "./types";
import * as sc from "./ModalFooter.styled";

const _ModalFooter: React.FC<ModalFooterProps> = ({
  showCancel = true,
  sectionStart,
  children,
}) => {
  // Initializes component's hooks, states and etc.
  const { hideModal } = useModals();
  const { disabled } = useModalContext();

  return (
    <sc.Component data-component="modal-footer">
      <sc.Container>{sectionStart}</sc.Container>
      <sc.Container>
        {showCancel && (
          <Button
            variant="neutral"
            disabled={disabled}
            onClick={() => hideModal()}>
            {t("Cancel")}
          </Button>
        )}
        {children}
      </sc.Container>
    </sc.Component>
  );
};

export const ModalFooter = React.memo(_ModalFooter);
ModalFooter.displayName = "@/library/modals/ModalFooter";
