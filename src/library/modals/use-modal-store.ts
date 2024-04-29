/** @format */

import React from "react";
import { ModalType, UseModalStoreReturn } from "./types";

export const useModalStore = (): UseModalStoreReturn => {
  // Initializes component's states, hooks and etc.
  const subscribers = React.useRef(new Set<() => void>());
  const modal = React.useRef<ModalType>({
    component: null,
    showing: false,
  });

  // Callback which is used to subscribe to store's data.
  const subscribe = React.useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  // Callback, which sets and defines a model component with parameters.
  const setModal = React.useCallback((modalData: Partial<ModalType>) => {
    modal.current = { ...modal.current, ...modalData };
    subscribers.current.forEach((callback) => callback());
  }, []);

  // Callbacks, which is used to get current defined modal.
  const getModal = React.useCallback((): ModalType => {
    return modal.current;
  }, []);

  return {
    subscribe,
    getModal,
    setModal,
  };
};
