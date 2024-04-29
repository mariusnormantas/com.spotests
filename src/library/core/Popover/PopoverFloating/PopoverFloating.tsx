/** @format */

import React from "react";
import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from "@floating-ui/react";
import { usePopoverContext } from "../PopoverProvider";
import { PopoverFloatingProps } from "./types";
import * as sc from "./PopoverFloating.styled";

const _PopoverFloating = React.forwardRef<HTMLElement, PopoverFloatingProps>(
  ({ initialFocus = -1, ...props }, ref: React.Ref<HTMLElement>) => {
    // Initializes component's states, hooks and etc.
    const { context: floatingData, ...context } = usePopoverContext();
    const mergedRef = useMergeRefs([context.refs.setFloating, ref]);

    // Checks, if popover is open.
    if (!context.isMounted) return null;
    return (
      <FloatingPortal>
        <FloatingFocusManager
          context={floatingData}
          modal={context.modal}
          initialFocus={initialFocus}
          returnFocus={false}
          guards>
          <sc.Floating
            ref={mergedRef}
            tabIndex={0}
            {...context.getFloatingProps({
              ...props,
              style: context.style,
            })}>
            {props.children}
          </sc.Floating>
        </FloatingFocusManager>
      </FloatingPortal>
    );
  }
);

export const PopoverFloating = React.memo(_PopoverFloating);
PopoverFloating.displayName = "@/library/core/PopoverFloating";
