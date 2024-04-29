/** @format */

import React from "react";
import { useFocusTrap } from "@/library/hooks";
import { ModalContext } from "../ModalProvider";
import { ModalInitProps } from "./types";
import * as sc from "./ModalInit.styled";

const _ModalInit: React.FC<ModalInitProps> = ({
  size = "medium",
  disabled = false,
  children,
  ...rest
}) => {
  // Initializes component's hooks, states and etc.
  const modalRef = React.useRef<HTMLDivElement>(null);
  const handleFocusLock = useFocusTrap(modalRef);

  // Effect, which handles event listeners.
  React.useEffect(() => {
    const activeElement = document.activeElement as HTMLElement;
    if (
      modalRef &&
      modalRef.current &&
      !modalRef.current.contains(activeElement)
    ) {
      modalRef.current.focus();
    }
    document.addEventListener("focus", handleFocusLock, true);
    return () => {
      document.removeEventListener("focus", handleFocusLock);
    };
  }, [handleFocusLock]);

  return (
    <ModalContext.Provider value={{ disabled }}>
      <sc.Component
        ref={modalRef}
        tabIndex={-1}
        data-component="modal"
        $size={size}
        {...rest}>
        {children}
      </sc.Component>
    </ModalContext.Provider>
  );
};

export const ModalInit = React.memo(_ModalInit);
ModalInit.displayName = "@/library/modals/ModalInit";
