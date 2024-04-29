/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "../../Theme";
import { ButtonShape, ButtonSize, ButtonVariant } from "../types";

const variantStyles: Record<ButtonVariant, CSSObject> = {
  default: {
    "boxShadow": tokens.shadow2Dimmed,
    '[data-component="button"]:not(:last-of-type)::after': {
      backgroundColor: tokens.colorNeutralStroke4,
    },
  },
  neutral: {
    '[data-component="button"]:not(:last-of-type)::after': {
      backgroundColor: tokens.colorNeutralStroke3,
    },
  },
  primary: {
    "boxShadow": tokens.shadow4,
    '[data-component="button"]:not(:last-of-type)::after': {
      backgroundColor: "hsla(0, 100%, 100%, 20%)",
    },
  },
  secondary: {
    "boxShadow": tokens.shadow4,
    '[data-component="button"]:not(:last-of-type)::after': {
      backgroundColor: tokens.colorSecondaryBackground1Pressed,
    },
  },
  subtle: {
    '[data-component="button"]:not(:last-of-type)::after': {
      backgroundColor: tokens.colorNeutralStroke3,
    },
  },
  transparent: {
    '[data-component="button"]:not(:last-of-type)::after': {
      backgroundColor: tokens.colorNeutralStroke3,
    },
  },
  danger: {
    "boxShadow": tokens.shadow4,
    '[data-component="button"]:not(:last-of-type)::after': {
      backgroundColor: "hsla(0, 100%, 100%, 20%)",
    },
  },
};

const shapeStyles: Record<ButtonShape, Record<ButtonSize, CSSObject>> = {
  rounded: {
    "extra-small": {
      borderRadius: tokens.borderRadiusSmall,
    },
    "small": {
      borderRadius: tokens.borderRadiusMedium,
    },
    "medium": {
      borderRadius: tokens.borderRadiusMedium,
    },
    "large": {
      borderRadius: tokens.borderRadiusMedium,
    },
  },
  circular: {
    "extra-small": {
      borderRadius: tokens.borderRadiusCircular,
    },
    "small": {
      borderRadius: tokens.borderRadiusCircular,
    },
    "medium": {
      borderRadius: tokens.borderRadiusCircular,
    },
    "large": {
      borderRadius: tokens.borderRadiusCircular,
    },
  },
  square: {
    "extra-small": {
      borderRadius: tokens.borderRadiusNone,
    },
    "small": {
      borderRadius: tokens.borderRadiusNone,
    },
    "medium": {
      borderRadius: tokens.borderRadiusNone,
    },
    "large": {
      borderRadius: tokens.borderRadiusNone,
    },
  },
};

export const Component = styled.div<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $shape: ButtonShape;
}>`
  display: flex;
  width: fit-content;
  height: fit-content;
  white-space: nowrap;

  [data-component="button"] {
    box-shadow: unset;
  }

  [data-component="button"] {
    position: relative;

    &:not(:last-of-type)::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 50%;
      right: -0.5px;
      translate: 0 -50%;
      width: 1px;
      height: 75%;
      border-radius: ${tokens.borderRadiusCircular};
    }
  }

  // Variant based styles.
  ${({ $variant }) => css(variantStyles[$variant])}

  // Size based styles.
  ${({ $size, $shape }) => css(shapeStyles[$shape][$size])}

  [data-component="button"]:not(:first-of-type) {
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
    border-left-width: 0;
  }

  [data-component="button"]:not(:last-of-type) {
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    border-right-width: 0;
  }
`;
