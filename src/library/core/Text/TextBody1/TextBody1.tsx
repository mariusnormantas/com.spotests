/** @format */

import React from "react";
import { TextBody1Props } from "./types";
import { TextBase } from "../TextBase";

const _TextBody1 = React.forwardRef<HTMLElement, TextBody1Props>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    return (
      <TextBase ref={ref} preset="body1" {...rest}>
        {children}
      </TextBase>
    );
  }
);

export const TextBody1 = React.memo(_TextBody1);
TextBody1.displayName = "@/library/core/TextBody1";
