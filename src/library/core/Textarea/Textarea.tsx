/** @format */

import React from "react";
import { TextareaProps } from "./types";
import * as sc from "./Textarea.styled";

const _Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id: controlledId,
      className,
      disabled = false,
      variant = "default",
      shape = "rounded",
      label,
      asterisk,
      invalid = false,
      hideValidation,
      containerRef = null,
      containerProps,
      // setValue,
      rows = 3,
      onInput,
      onBlur,
      ...rest
    },
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    // Initializes component's states, hooks and etc.
    const uid = React.useId();
    const id = React.useMemo(() => {
      if (controlledId || !label) return controlledId;
      return `input${uid}id`;
    }, [controlledId, label, uid]);

    // Callback, which handles input's change event.
    const handleInput = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (disabled) return;
        onInput?.(e);
      },
      [onInput, disabled]
    );

    // Callback, which handles input's change event.
    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (disabled) return;
        onBlur?.(e);
      },
      [onBlur, disabled]
    );

    return (
      <sc.Component
        ref={containerRef}
        tabIndex={-1}
        className={className}
        aria-disabled={disabled}
        aria-labelledby={label && id}
        {...containerProps}
        data-component="textarea"
        $variant={variant}
        $shape={shape}
        $invalid={invalid && !hideValidation}>
        <sc.Wrapper>
          <sc.Container>
            {label && (
              <sc.Label htmlFor={id} aria-disabled={disabled}>
                {label}
                {asterisk && !disabled && <span>*</span>}
              </sc.Label>
            )}
            <textarea
              ref={ref}
              id={id}
              disabled={disabled}
              rows={rows}
              onInput={handleInput}
              onBlur={handleBlur}
              {...rest}
            />
          </sc.Container>
        </sc.Wrapper>
      </sc.Component>
    );
  }
);

export const Textarea = React.memo(_Textarea);
Textarea.displayName = "@/library/core/Textarea";
