/** @format */

import React from "react";
import { PiCircleNotchBold } from "react-icons/pi";
import { t } from "i18next";
import { FloatingPortal, useMergeRefs } from "@floating-ui/react";
import { useFocusTrap } from "@/library/hooks";
import { LoaderProps } from "./types";
import * as sc from "./Loader.styled";

const _Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  (
    {
      label = t("Please wait"),
      hideLabel = false,
      hideSpinner = false,
      ...rest
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    // Initializes component's states, hooks and etc.
    const loaderRef = React.useRef<HTMLDivElement>(null);
    const mergedRefs = useMergeRefs([ref, loaderRef]);
    const handleFocusLock = useFocusTrap(loaderRef);

    // Effect, which handles event listeners.
    React.useEffect(() => {
      document.addEventListener("focus", handleFocusLock, true);
      return () => {
        document.removeEventListener("focus", handleFocusLock, true);
      };
    }, [handleFocusLock]);

    return (
      <FloatingPortal id="portal">
        <sc.Component
          ref={mergedRefs}
          tabIndex={-1}
          {...rest}
          data-component="loader">
          <sc.GlobalStyles />
          <sc.Card>
            {!hideLabel && <sc.Label>{label}</sc.Label>}
            {!hideSpinner && <sc.Indicator as={PiCircleNotchBold} />}
          </sc.Card>
        </sc.Component>
      </FloatingPortal>
    );
  }
);

export const Loader = React.memo(_Loader);
Loader.displayName = "@/library/core/Loader";
