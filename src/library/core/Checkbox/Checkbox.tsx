/** @format */

import React from "react";
import { HiCheck } from "react-icons/hi2";
import { Icon } from "../Icon";
import { CheckboxProps } from "./types";
import * as sc from "./Checkbox.styled";

const _Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id: controlledId,
      className,
      variant = "default",
      size = "medium",
      label,
      asterisk,
      disabled = false,
      containerRef = null,
      containerProps,
      checked,
      hidden,
      onChange,
      onBlur,
      ...rest
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    // Initializes component's states, hooks and etc.
    const uid = React.useId();
    const id = React.useMemo(() => {
      if (controlledId || !label) return controlledId;
      return `input${uid}id`;
    }, [controlledId, label, uid]);

    // Callback, which handles input's change event.
    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        onChange?.(e);
      },
      [onChange, disabled]
    );

    // Callback, which handles input's change event.
    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (disabled) return;
        onBlur?.(e);
      },
      [onBlur, disabled]
    );

    return (
      <sc.Component
        ref={containerRef}
        {...containerProps}
        tabIndex={-1}
        className={className}
        aria-labelledby={label && id}
        data-component="checkbox"
        $size={size}
        $hidden={hidden}>
        <sc.Container>
          <sc.Checker
            ref={ref}
            id={id}
            type="checkbox"
            disabled={disabled}
            checked={checked}
            hidden={hidden}
            onChange={handleChange}
            onBlur={handleBlur}
            {...rest}
            $variant={variant}
            $size={size}
          />
          {checked && <Icon render={HiCheck} />}
        </sc.Container>
        {label && (
          <sc.Label htmlFor={id} aria-disabled={disabled}>
            {label}
            {asterisk && !disabled && <span>*</span>}
          </sc.Label>
        )}
      </sc.Component>
    );
  }
);

export const Checkbox = React.memo(_Checkbox);
Checkbox.displayName = "@/library/core/Checkbox";
