/** @format */

import React from "react";
import { TextDisplayProps } from "./types";
import { TextBase } from "../TextBase";

const _TextDisplay = React.forwardRef<HTMLElement, TextDisplayProps>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    return (
      <TextBase ref={ref} preset="display" {...rest}>
        {children}
      </TextBase>
    );
  }
);

export const TextDisplay = React.memo(_TextDisplay);
TextDisplay.displayName = "@/library/core/TextDisplay";
