/** @format */

import React from "react";
import { TextTitle3Props } from "./types";
import { TextBase } from "../TextBase";

const _TextTitle3 = React.forwardRef<HTMLElement, TextTitle3Props>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    return (
      <TextBase ref={ref} preset="title3" {...rest}>
        {children}
      </TextBase>
    );
  }
);

export const TextTitle3 = React.memo(_TextTitle3);
TextTitle3.displayName = "@/library/core/TextTitle3";
