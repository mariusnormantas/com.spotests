/** @format */

export type ToastVariant = "informative" | "danger" | "success" | "loading";

export type ToastType = {
  variant: ToastVariant;
  title?: string;
  message: string;
  timer?: NodeJS.Timeout;
};

export type ToastsType = Record<string, ToastType>;

export type ActiveToastsType = Array<string>;

export type UseToastsStoreReturn = {
  subscribe: (callback: () => void) => () => boolean;
  getToasts: () => ToastsType;
  getToast: (id: string) => ToastType | undefined;
  setToast: (data: ToastType & { id: string }) => void;
  deleteToast: (id: string) => void;
  addActiveToast: (id: string) => void;
  getActiveToasts: () => ActiveToastsType;
  removeActiveToast: (id: string) => void;
};

export type ToastsProviderProps = object;

export type ToastsProviderReturn = {
  store: UseToastsStoreReturn;
};

export type UseToastsReturn = {
  showToast: (props: ShowToastProps) => void;
  hideToast: (toastId: string) => void;
};

export type ShowToastProps = Omit<ToastType, "timer"> & {
  id?: string;
};
