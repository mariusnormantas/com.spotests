/** @format */

import React from "react";
import { TextSubtitle1Props } from "./types";
import { TextBase } from "../TextBase";

const _TextSubtitle1 = React.forwardRef<HTMLElement, TextSubtitle1Props>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    return (
      <TextBase ref={ref} preset="subtitle1" {...rest}>
        {children}
      </TextBase>
    );
  }
);

export const TextSubtitle1 = React.memo(_TextSubtitle1);
TextSubtitle1.displayName = "@/library/core/TextSubtitle1";
