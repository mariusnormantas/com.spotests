/** @format */

import React from "react";
import { useModalsContext } from "./use-modals-context";
import { useModalContext } from "./Modal";
import { UseModalReturn } from "./types";

export const useModals = (): UseModalReturn => {
  // Initializes component's hooks, states and etc.
  const store = useModalsContext();
  const { disabled } = useModalContext();

  // Callback sets a modal component to the state and displays on the screen.
  const showModal = React.useCallback(
    (component: React.ReactNode) => {
      store.setModal({ component, showing: true });
    },
    [store]
  );

  // Callback which hides modal.
  const hideModal = React.useCallback(() => {
    store.setModal({ showing: false });
  }, [store]);

  return {
    disabled,
    showModal,
    hideModal,
  };
};
