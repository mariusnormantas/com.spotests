/** @format */

import React from "react";
import { Icon } from "../Icon";
import { InputProps } from "./types";
import * as sc from "./Input.styled";

const _Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id: controlledId,
      className,
      disabled = false,
      variant = "default",
      shape = "rounded",
      size = "medium",
      label,
      asterisk,
      invalid = false,
      hideValidation,
      containerRef = null,
      containerProps,
      iconStart,
      iconEnd,
      sectionStart,
      sectionEnd,
      value,
      onInput,
      onBlur,
      ...rest
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    // Initializes component's states, hooks and etc.
    const uid = React.useId();

    // Memoized input's ID prop.
    const id = React.useMemo(() => {
      if (controlledId || !label) return controlledId;
      return `input${uid}id`;
    }, [controlledId, label, uid]);

    // Callback, which handles input's change event.
    const handleInput = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        onInput?.(e);
      },
      [onInput, disabled]
    );

    // Callback, which handles input's change event.
    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (disabled) return;
        onBlur?.(e);
      },
      [onBlur, disabled]
    );

    // Memoized input's section start or icon start node.
    const startNode = React.useMemo(
      () =>
        sectionStart ? (
          <sc.Section data-section="start">{sectionStart}</sc.Section>
        ) : (
          iconStart && <Icon render={iconStart} />
        ),
      [sectionStart, iconStart]
    );

    // Memoized input's section start or icon start node.
    const endNode = React.useMemo(
      () =>
        sectionEnd ? (
          <sc.Section data-section="end">{sectionEnd}</sc.Section>
        ) : (
          iconEnd && <Icon render={iconEnd} />
        ),
      [sectionEnd, iconEnd]
    );

    return (
      <sc.Component
        ref={containerRef}
        {...containerProps}
        tabIndex={-1}
        className={className}
        aria-disabled={disabled}
        aria-labelledby={label && id}
        data-component="input"
        data-invalid={invalid && !hideValidation}
        $size={size}
        $variant={variant}
        $shape={shape}
        $invalid={invalid && !hideValidation}>
        <sc.Container>
          {startNode}
          <sc.Inner>
            {label && (
              <sc.Label htmlFor={id} aria-disabled={disabled}>
                {label}
                {asterisk && <span>*</span>}
              </sc.Label>
            )}
            <input
              ref={ref}
              id={id}
              disabled={disabled}
              value={value}
              onInput={handleInput}
              onBlur={handleBlur}
              {...rest}
            />
          </sc.Inner>
          {endNode}
        </sc.Container>
      </sc.Component>
    );
  }
);

export const Input = React.memo(_Input);
Input.displayName = "@/library/core/Input";
