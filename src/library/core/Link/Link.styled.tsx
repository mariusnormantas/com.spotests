/** @format */

import styled, { CSSObject, css } from "styled-components";
import { LinkVariant } from "./types";
import { tokens } from "../Theme";

const variantStyles: Record<LinkVariant, CSSObject> = {
  default: {
    "color": tokens.colorLinkForeground1,
    "&:hover, &[aria-expanded='true']": {
      color: tokens.colorLinkForeground1Hover,
    },
    "&:active": {
      color: tokens.colorLinkForeground1Pressed,
    },
  },
  primary: {
    "color": tokens.colorBrandForeground1,
    "&:hover, &[aria-expanded='true']": {
      color: tokens.colorBrandForeground1Hover,
    },
    "&:active": {
      color: tokens.colorBrandForeground1Pressed,
    },
  },
  subtle: {
    "color": "inherit",
    "&:hover, &[aria-expanded='true']": {
      color: tokens.colorLinkForeground1Hover,
    },
    "&:active": {
      color: tokens.colorLinkForeground1Pressed,
    },
  },
};

export const Component = styled.a<{
  $variant: LinkVariant;
  $disabled?: boolean;
}>`
  width: fit-content;
  transition-property: color;
  transition-timing-function: ${tokens.curveDecelerateMin};
  transition-duration: ${tokens.durationNormal};

  // Variant based styling.
  ${({ $variant }) => css(variantStyles[$variant])}

  &:not([aria-disabled="true"]) {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    &:focus-visible {
      text-decoration: underline;
      text-decoration-style: dashed;
    }
  }

  &[aria-disabled="true"] {
    pointer-events: none;
    color: ${tokens.colorNeutralForeground4};
  }
`;
