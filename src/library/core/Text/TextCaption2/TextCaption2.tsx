/** @format */

import React from "react";
import { TextCaption2Props } from "./types";
import { TextBase } from "../TextBase";

const _TextCaption2 = React.forwardRef<HTMLElement, TextCaption2Props>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    return (
      <TextBase ref={ref} preset="caption2" {...rest}>
        {children}
      </TextBase>
    );
  }
);

export const TextCaption2 = React.memo(_TextCaption2);
TextCaption2.displayName = "@/library/core/TextCaption2";
