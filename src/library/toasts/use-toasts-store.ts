/** @format */

import React from "react";
import { ToastType, ToastsType, UseToastsStoreReturn } from "./types";

export const useToastsStore = (): UseToastsStoreReturn => {
  // Initializes component's states, hooks and etc.
  const subscribers = React.useRef(new Set<() => void>());
  const active = React.useRef<Array<string>>([]);
  const toasts = React.useRef<ToastsType>({});

  // Callback which is used to subscribe to store's data.
  const subscribe = React.useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  // Callbacks, which is used to get all toasts.
  const getToasts = React.useCallback((): ToastsType => {
    return toasts.current;
  }, []);

  // Callbacks, which is used to get specific toast.
  const getToast = React.useCallback((id: string): ToastType | undefined => {
    return toasts.current[id];
  }, []);

  // Callback, which sets or updates a toast's data.
  const setToast = React.useCallback((data: ToastType & { id: string }) => {
    const { id, ...restData } = data;
    toasts.current = {
      ...toasts.current,
      [id]: { ...restData },
    };
    subscribers.current.forEach((callback) => callback());
  }, []);

  // Callback, which deletes toast permanently.
  const deleteToast = React.useCallback((id: string) => {
    if (toasts.current?.[id]) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [id]: _, ...rest } = toasts.current;
      toasts.current = rest;
    }
    subscribers.current.forEach((callback) => callback());
  }, []);

  // Callback, which sets or updates a toast's data.
  const addActiveToast = React.useCallback((id: string) => {
    active.current = [...active.current, id];
    subscribers.current.forEach((callback) => callback());
  }, []);

  // Callbacks, which is used to get active toasts.
  const getActiveToasts = React.useCallback((): Array<string> => {
    return active.current;
  }, []);

  // Callback, which deletes toast permanently.
  const removeActiveToast = React.useCallback((id: string) => {
    active.current = active.current.filter((not) => not !== id);
    subscribers.current.forEach((callback) => callback());
  }, []);

  return {
    subscribe,
    getToasts,
    getToast,
    getActiveToasts,
    setToast,
    addActiveToast,
    removeActiveToast,
    deleteToast,
  };
};
