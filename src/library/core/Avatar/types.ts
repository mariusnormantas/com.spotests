/** @format */

import React from "react";

export type AvatarSize = "extra-small" | "small" | "medium" | "large";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize;
}
