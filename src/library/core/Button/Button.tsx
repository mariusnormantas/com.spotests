/** @format */

import React from "react";
import { PiCircleNotchBold } from "react-icons/pi";
import { t } from "i18next";
import { ButtonGroup } from "./ButtonGroup";
import { ButtonComponent, ButtonProps } from "./types";
import * as sc from "./Button.styled";

const _Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "medium",
      shape = "rounded",
      type = "button",
      loading = false,
      fullWidth = false,
      disabled = false,
      counter = false,
      reduce = false,
      iconStart,
      iconEnd,
      children,
      ...rest
    },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    // Memoized loading button content's node.
    const loadingNode = React.useMemo(
      () => (
        <sc.Container>
          <sc.Loading.Icon as={PiCircleNotchBold} />
          <sc.Loading.Label>{t("Processing")}</sc.Loading.Label>
        </sc.Container>
      ),
      []
    );

    // Memoized inner button content's node.
    const innerContentNode = React.useMemo(
      () => (
        <sc.Container>
          {iconStart && <sc.Icon as={iconStart} />}
          {children && <span>{children}</span>}
          {iconEnd && <sc.Icon as={iconEnd} />}
        </sc.Container>
      ),
      [iconStart, iconEnd, children]
    );

    return (
      <sc.Component
        ref={ref}
        type={type}
        disabled={disabled || loading}
        {...rest}
        data-component="button"
        $variant={variant}
        $size={size}
        $shape={shape}
        $fullWidth={fullWidth}
        $counter={counter}
        $reduce={reduce}>
        {loading ? loadingNode : innerContentNode}
      </sc.Component>
    );
  }
);

export const Button = React.memo(_Button) as ButtonComponent;
Button.Group = ButtonGroup;
Button.displayName = "@/library/core/Button";
