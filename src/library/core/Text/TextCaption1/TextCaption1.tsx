/** @format */

import React from "react";
import { TextCaption1Props } from "./types";
import { TextBase } from "../TextBase";

const _TextCaption1 = React.forwardRef<HTMLElement, TextCaption1Props>(
  ({ children, ...rest }, ref: React.Ref<HTMLElement>) => {
    return (
      <TextBase ref={ref} preset="caption1" {...rest}>
        {children}
      </TextBase>
    );
  }
);

export const TextCaption1 = React.memo(_TextCaption1);
TextCaption1.displayName = "@/library/core/TextCaption1";
