/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import { FloatingPortal } from "@floating-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useModalsContext } from "../use-modals-context";
import * as sc from "./ModalPortal.styled";

const _ModalPortal: React.FC = () => {
  // Initializes component's hooks, states and etc.
  const location = useLocation();
  const store = useModalsContext();
  const modal = React.useSyncExternalStore(store.subscribe, () => {
    return store.getModal();
  });

  // Layout effect which handles router's location changes to hide modal.
  React.useLayoutEffect(() => {
    if (modal && modal.showing) {
      store.setModal({ component: null, showing: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <FloatingPortal id="portal">
      <AnimatePresence>
        {modal.component && modal.showing && (
          <React.Fragment>
            <sc.GlobalModifications />
            <sc.Backdrop
              as={motion.div}
              animate={{ opacity: [0, 0.25] }}
              exit={{ opacity: 0 }}
              style={{ transitionProperty: "opacity", willChange: "opacity" }}
              transition={{ duration: 0.1 }}
            />
            <sc.Container>
              <motion.div
                animate={{
                  opacity: [0, 1],
                  transform: ["scale(0.9)", "scale(1)"],
                }}
                exit={{
                  opacity: 0,
                  transform: "scale(0.9)",
                }}
                style={{
                  transitionProperty: "opacity, transform",
                  willChange: "opacity, transform",
                }}
                transition={{ duration: 0.1 }}>
                <div>{modal.component}</div>
              </motion.div>
            </sc.Container>
          </React.Fragment>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
};

export const ModalPortal = React.memo(_ModalPortal);
ModalPortal.displayName = "@/library/modals/ModalPortal";
