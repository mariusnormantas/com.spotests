/** @format */

import React from "react";
import { CgUserlane } from "react-icons/cg";
import { AvatarProps } from "./types";
import * as sc from "./Avatar.styled";

const _Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ size = "medium", ...rest }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <sc.Component ref={ref} {...rest} data-component="avatar" $size={size}>
        <CgUserlane />
      </sc.Component>
    );
  }
);

export const Avatar = React.memo(_Avatar);
Avatar.displayName = "@/library/core/Avatar";
