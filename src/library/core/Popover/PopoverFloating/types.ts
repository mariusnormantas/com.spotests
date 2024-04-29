/** @format */

import React from "react";

// Popover floating component's props.
export interface PopoverFloatingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  initialFocus?:
    | number
    | React.MutableRefObject<HTMLElement | null>
    | undefined;
}
