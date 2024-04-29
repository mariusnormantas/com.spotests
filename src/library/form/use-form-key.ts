/** @format */

import React from "react";
import { useFormContext } from "./use-form-context";
import { UseFormKeyProps, UseFormKeyReturn } from "./types";

export const useFormKey = ({ name }: UseFormKeyProps): UseFormKeyReturn => {
  // Component's states, hooks and etc. initialization.
  const { store } = useFormContext();

  // Subscribes to form's value.
  const value = React.useSyncExternalStore(store.subscribe, () => {
    return store.getValue(name);
  });

  // Subscribes to form value's error.
  const error = React.useSyncExternalStore(store.subscribe, () => {
    return store.getError(name);
  });

  // Subscribes to form value's touched state.
  const isTouched = React.useSyncExternalStore(store.subscribe, () => {
    return store.isTouched(name);
  });

  return {
    value,
    error,
    isTouched,
  };
};
