/** @format */

import React from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Input } from "../Input";
import { SearchInputProps } from "./types";

const _SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      type = "search",
      variant = "filled",
      iconStart = PiMagnifyingGlassBold,
      spellCheck = false,
      ...rest
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <Input
        ref={ref}
        type={type}
        variant={variant}
        iconStart={iconStart}
        spellCheck={spellCheck}
        {...rest}
      />
    );
  }
);

export const SearchInput = React.memo(_SearchInput);
SearchInput.displayName = "@/library/core/SearchInput";
