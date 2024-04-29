/** @format */

import React from "react";
import { TextTitle1Props } from "./types";
import { TextBase } from "../TextBase";

const _TextTitle1 = React.forwardRef<HTMLElement, TextTitle1Props>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    return (
      <TextBase ref={ref} preset="title1" {...rest}>
        {children}
      </TextBase>
    );
  }
);

export const TextTitle1 = React.memo(_TextTitle1);
TextTitle1.displayName = "@/library/core/TextTitle1";
