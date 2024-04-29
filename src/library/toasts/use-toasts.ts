/** @format */

import React from "react";
import { t } from "i18next";
import { useToastsContext } from "./use-toasts-context";
import { ShowToastProps, UseToastsReturn } from "./types";

const DEFAULT_TITLE = {
  informative: "Notification",
  danger: "Something went wrong!",
  success: "Successfull!",
};

export const useToasts = (): UseToastsReturn => {
  // Initializes component's states, hooks and etc.
  const { store } = useToastsContext();

  // Callback, which hides toast before deleting it, to keep transition smooth.
  const hideToast = React.useCallback(
    (toastId: string) => {
      // Checks, if toast still exists.
      const current = store.getToast(toastId);
      if (!current) return;

      // Clears old timeout, and sets a new timeout to delete toast.
      clearTimeout(current.timer);
      store.removeActiveToast(toastId);
    },
    [store]
  );

  // Callback, which generates and creates a new toast if it is not existing already.
  const showToast = React.useCallback(
    ({ id, variant = "informative", title, message }: ShowToastProps) => {
      // Checks, if toast's id is not defined, we should generate random.
      const toastId = id ?? (Math.random() + 1).toString(36).substring(2);
      const toastTitle =
        variant !== "loading" && !title ? t(DEFAULT_TITLE[variant]) : title;

      // Checks, if toast already exists, then we should just update it.
      const current = store.getToast(toastId);
      if (current) {
        hideToast(toastId);
      }

      // Creates a new toast.
      store.setToast({
        id: toastId,
        variant,
        title: toastTitle,
        message,
        timer:
          variant !== "loading"
            ? setTimeout(() => hideToast(toastId), 7500)
            : undefined,
      });
      store.addActiveToast(toastId);
    },
    [hideToast, store]
  );

  return {
    showToast,
    hideToast,
  };
};
