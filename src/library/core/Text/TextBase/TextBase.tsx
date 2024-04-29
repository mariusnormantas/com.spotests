/** @format */

import React from "react";
import { TextBaseProps } from "./types";
import * as sc from "./TextBase.styled";

const _TextBase = React.forwardRef<HTMLElement, TextBaseProps>(
  (
    { render, preset, color, weight, asLink, children, ...rest },
    ref: React.Ref<HTMLElement>
  ) => {
    return (
      <sc.Component
        as={render}
        ref={ref}
        tabIndex={asLink ? 0 : undefined}
        role={asLink ? "button" : undefined}
        {...rest}
        data-component="text"
        $preset={preset}
        $color={color}
        $weight={weight}
        $asLink={asLink}>
        {children}
      </sc.Component>
    );
  }
);

export const TextBase = React.memo(_TextBase);
TextBase.displayName = "@/library/core/TextBase";
