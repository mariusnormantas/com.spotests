/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "../Theme";
import { AvatarSize } from "./types";

const sizeStyles: Record<AvatarSize, CSSObject> = {
  "extra-small": {
    width: "2.75em",
    minWidth: "2.75em",
    height: "2.75em",
    borderWidth: "2px",
  },
  "small": {
    width: "3.25em",
    minWidth: "3.25em",
    height: "3.25em",
    borderWidth: "2px",
  },
  "medium": {
    width: "4em",
    minWidth: "4em",
    height: "4em",
    borderWidth: "3px",
  },
  "large": {
    width: "4.75em",
    minWidth: "4.75em",
    height: "4.75em",
    borderWidth: "3px",
  },
};

export const Component = styled.div<{ $size: AvatarSize }>`
  position: relative;
  border: 3px solid ${tokens.colorNeutralBackground1};
  border-radius: ${tokens.borderRadiusMedium};
  background-color: ${tokens.colorBrandBackground4};
  box-shadow: ${tokens.shadow8Dimmed};
  overflow: hidden;

  // Size based styling.
  ${({ $size }) => css(sizeStyles[$size])}

  svg {
    position: absolute;
    bottom: 50%;
    left: 50%;
    translate: -50% 50%;
    width: 70%;
    min-width: 70%;
    height: 70%;
    color: ${tokens.colorNeutralBackground2};
  }
`;
