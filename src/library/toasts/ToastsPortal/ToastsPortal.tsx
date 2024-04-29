/** @format */

import React from "react";
import { FloatingPortal } from "@floating-ui/react";
import { useToastsContext } from "../use-toasts-context";
import { Toast } from "../Toast";
import * as sc from "./ToastsPortal.styled";

const _ToastsPortal: React.FC = () => {
  // Initializes component's hooks, states and etc.
  const { store } = useToastsContext();
  const toasts = React.useSyncExternalStore(store.subscribe, () => {
    return store.getToasts();
  });

  // Memoized keys of toasts.
  const keysOfToasts = React.useMemo(() => Object.keys(toasts), [toasts]);

  // Memoized node of toasts.
  const toastsNode = React.useMemo(() => {
    return keysOfToasts.map((key) => {
      const item = toasts[key];
      if (item) {
        return <Toast key={key} index={key} toast={item} />;
      }
      return null;
    });
  }, [keysOfToasts, toasts]);

  return (
    <FloatingPortal id="portal">
      {toastsNode && <sc.Component>{toastsNode}</sc.Component>}
    </FloatingPortal>
  );
};

export const ToastsPortal = React.memo(_ToastsPortal);
ToastsPortal.displayName = "@/library/toasts/ToastsPortal";
