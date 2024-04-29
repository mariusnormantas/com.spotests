/** @format */

import React from "react";
import { Input } from "../Input";
import { NameInputProps } from "./types";

const _NameInput = React.forwardRef<HTMLInputElement, NameInputProps>(
  ({ setValue, onBlur, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    // Callback, which handles input's blur event.
    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value.unquote().capitalize();
        setValue(value);
        onBlur?.(e);
      },
      [onBlur, setValue]
    );
    return <Input ref={ref} onBlur={handleBlur} {...rest} />;
  }
);

export const NameInput = React.memo(_NameInput);
NameInput.displayName = "@/library/core/NameInput";
