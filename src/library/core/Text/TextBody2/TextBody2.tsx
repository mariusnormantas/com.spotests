/** @format */

import React from "react";
import { TextBody2Props } from "./types";
import { TextBase } from "../TextBase";

const _TextBody2 = React.forwardRef<HTMLElement, TextBody2Props>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    return (
      <TextBase ref={ref} preset="body2" {...rest}>
        {children}
      </TextBase>
    );
  }
);

export const TextBody2 = React.memo(_TextBody2);
TextBody2.displayName = "@/library/core/TextBody2";
