/** @format */

import React from "react";
import { TextTitle2Props } from "./types";
import { TextBase } from "../TextBase";

const _TextTitle2 = React.forwardRef<HTMLElement, TextTitle2Props>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    return (
      <TextBase ref={ref} preset="title2" {...rest}>
        {children}
      </TextBase>
    );
  }
);

export const TextTitle2 = React.memo(_TextTitle2);
TextTitle2.displayName = "@/library/core/TextTitle2";
