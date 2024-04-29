/** @format */

import React from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { Icon } from "../Icon";
import { Input } from "../Input";
import { PasswordInputProps } from "./types";

const _PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    { sectionEnd, maxLength = 127, ...rest },
    ref: React.Ref<HTMLInputElement>
  ) => {
    // Initializes component's states, hooks and etc.
    const [type, setType] = React.useState("password");

    // Callback, which handles change of the type to see password.
    const handleChangeType = React.useCallback(() => {
      if (type === "password") setType("text");
      else setType("password");
    }, [type]);

    return (
      <Input
        ref={ref}
        type={type}
        maxLength={maxLength}
        sectionEnd={
          <React.Fragment>
            {sectionEnd}
            <Icon
              render={type === "password" ? PiEyeBold : PiEyeClosedBold}
              onClick={handleChangeType}
            />
          </React.Fragment>
        }
        {...rest}
      />
    );
  }
);

export const PasswordInput = React.memo(_PasswordInput);
PasswordInput.displayName = "@/library/core/PasswordInput";
