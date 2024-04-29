/** @format */

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  PiCheckCircleDuotone,
  PiCircleNotchBold,
  PiInfoDuotone,
  PiWarningCircleDuotone,
  PiXBold,
} from "react-icons/pi";
import { Button, Icon } from "@/library/core";
import { useToastsContext } from "../use-toasts-context";
import { useToasts } from "../use-toasts";
import { ToastProps } from "./types";
import * as sc from "./Toast.styled";

// Icons depends on toast's variant.
const icons = {
  informative: PiInfoDuotone,
  success: PiCheckCircleDuotone,
  danger: PiWarningCircleDuotone,
  loading: PiCircleNotchBold,
};

const _Toast: React.FC<ToastProps> = ({ index, toast }) => {
  // Initializes component's hooks, states and etc.
  const toasts = useToasts();
  const context = useToastsContext();

  // Subscribes to currently active toasts.
  const active = React.useSyncExternalStore(context.store.subscribe, () => {
    return context.store.getActiveToasts();
  });

  // Memoized state, which defines if toast should be rendered.
  const shouldRender = React.useMemo(
    () => active.includes(index),
    [active, index]
  );

  // Memoized toat's icon node.
  const toastIconNode = React.useMemo(() => {
    return <Icon render={icons[toast.variant]} size={toast.title ? 3 : 2.5} />;
  }, [toast]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          animate={{
            opacity: [0, 1],
            transform: ["translateX(100%)", "translateX(0)"],
          }}
          exit={{ opacity: 0, transform: "translateX(100%)" }}
          style={{
            transitionProperty: "opacity, transform",
            willChange: "opacity, transform",
          }}
          transition={{ duration: 0.2 }}>
          <sc.Component
            role="alert"
            data-component="toast"
            $variant={toast.variant}>
            {toast.variant === "loading" ? (
              <sc.AnimatedIcon>{toastIconNode}</sc.AnimatedIcon>
            ) : (
              toastIconNode
            )}
            <sc.Column as={sc.Main}>
              {toast.title && <sc.Title>{toast.title}</sc.Title>}
              <sc.Message>{toast.message}</sc.Message>
            </sc.Column>
            <Button
              size="extra-small"
              variant="secondary"
              iconStart={PiXBold}
              counter
              onClick={() => toasts.hideToast(index)}
            />
          </sc.Component>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Toast = React.memo(_Toast);
Toast.displayName = "@/library/toasts/Toast";
