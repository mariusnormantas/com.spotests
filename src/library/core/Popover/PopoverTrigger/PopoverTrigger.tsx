/** @format */

import React from "react";
import { useMergeRefs } from "@floating-ui/react";
import { usePopoverContext } from "../PopoverProvider";
import { PopoverTriggerProps } from "./types";

const _PopoverTrigger = React.forwardRef<HTMLElement, PopoverTriggerProps>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    // Initializes component's states, hooks and etc.
    const context = usePopoverContext();
    const childrenRef = (children as any).ref;

    // Merges reference's refs.
    const mergedRef = useMergeRefs([
      context.refs.setReference,
      ref,
      childrenRef,
    ]);

    // Checks, if trigger element is valid.
    if (!React.isValidElement(children)) return;
    return React.cloneElement(
      children,
      context.getReferenceProps({
        "ref": mergedRef,
        "aria-expanded": context.open,
        ...rest,
        ...children.props,
      })
    );
  }
);

export const PopoverTrigger = React.memo(_PopoverTrigger);
PopoverTrigger.displayName = "@/library/core/PopoverTrigger";
