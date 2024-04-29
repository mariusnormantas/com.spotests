/** @format */

import React from "react";
import { ButtonGroupProps } from "./types";
import * as sc from "./ButtonGroup.styled";

const _ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, ...rest }, ref: React.Ref<HTMLDivElement>) => {
    // Initializes component's states, hooks and etc.
    const firstChild = React.Children.toArray(children)[0];

    // Check if the first child is a valid React element.
    if (!React.isValidElement(firstChild)) return null;
    return (
      <sc.Component
        ref={ref}
        {...rest}
        data-component="button-group"
        $variant={firstChild.props.variant ?? "default"}
        $size={firstChild.props.size ?? "medium"}
        $shape={firstChild.props.shape ?? "rounded"}>
        {children}
      </sc.Component>
    );
  }
);

export const ButtonGroup = React.memo(_ButtonGroup);
ButtonGroup.displayName = "@/library/core/ButtonGroup";
