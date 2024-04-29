/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "../Theme";
import { ButtonShape, ButtonSize, ButtonVariant } from "./types";

const variantStyles: Record<
  ButtonVariant,
  Record<"static" | "hover" | "active", CSSObject>
> = {
  default: {
    static: {
      color: tokens.colorNeutralForeground2,
      borderColor: tokens.colorNeutralStroke4,
      backgroundColor: tokens.colorNeutralBackground1,
      boxShadow: tokens.shadow2Dimmed,
    },
    hover: {
      color: tokens.colorNeutralForeground2Hover,
      borderColor: tokens.colorNeutralStroke4Hover,
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
    active: {
      color: tokens.colorNeutralForeground2Pressed,
      borderColor: tokens.colorNeutralStroke4Pressed,
      backgroundColor: tokens.colorNeutralBackground1Pressed,
    },
  },
  neutral: {
    static: {
      color: tokens.colorNeutralForeground2,
      borderColor: "transparent",
      backgroundColor: tokens.colorNeutralBackground3,
    },
    hover: {
      color: tokens.colorNeutralForeground2Hover,
      backgroundColor: tokens.colorNeutralBackground3Hover,
    },
    active: {
      color: tokens.colorNeutralForeground2Pressed,
      backgroundColor: tokens.colorNeutralBackground3Pressed,
    },
  },
  primary: {
    static: {
      color: tokens.colorNeutralForegroundInverted1,
      borderColor: "transparent",
      backgroundColor: tokens.colorBrandBackground1,
      boxShadow: tokens.shadow4,
    },
    hover: {
      color: tokens.colorNeutralForegroundInverted1Hover,
      backgroundColor: tokens.colorBrandBackground1Hover,
    },
    active: {
      color: tokens.colorNeutralForegroundInverted1Pressed,
      backgroundColor: tokens.colorBrandBackground1Pressed,
    },
  },
  secondary: {
    static: {
      color: tokens.colorNeutralForegroundInverted1,
      borderColor: "transparent",
      backgroundColor: tokens.colorSecondaryBackground1,
      boxShadow: tokens.shadow4,
    },
    hover: {
      color: tokens.colorNeutralForegroundInverted1Hover,
      backgroundColor: tokens.colorSecondaryBackground1Hover,
    },
    active: {
      color: tokens.colorNeutralForegroundInverted1Pressed,
      backgroundColor: tokens.colorSecondaryBackground1Pressed,
    },
  },
  subtle: {
    static: {
      color: tokens.colorNeutralForeground2,
      borderColor: "transparent",
      backgroundColor: "transparent",
    },
    hover: {
      color: tokens.colorNeutralForeground2Hover,
      backgroundColor: tokens.colorNeutralBackground3Hover,
    },
    active: {
      color: tokens.colorNeutralForeground2Pressed,
      backgroundColor: tokens.colorNeutralBackground3Pressed,
    },
  },
  transparent: {
    static: {
      color: tokens.colorLinkForeground1,
    },
    hover: {
      color: tokens.colorLinkForeground1Hover,
    },
    active: {
      color: tokens.colorLinkForeground1Pressed,
    },
  },
  danger: {
    static: {
      color: tokens.colorNeutralForegroundInverted1,
      borderColor: "transparent",
      backgroundColor: tokens.colorPaletteRedBackground1,
      boxShadow: tokens.shadow4,
    },
    hover: {
      color: tokens.colorNeutralForegroundInverted1Hover,
      backgroundColor: tokens.colorPaletteRedBackground1Hover,
    },
    active: {
      color: tokens.colorNeutralForegroundInverted1Pressed,
      backgroundColor: tokens.colorPaletteRedBackground1Pressed,
    },
  },
};

const sizeStyles: Record<ButtonSize, CSSObject> = {
  "extra-small": {
    height: "2.25em",
    minHeight: "2.25em",
    maxHeight: "2.25em",
    paddingInline: "0.75em",
    fontSize: tokens.fontSizeBase200,
    svg: {
      width: "1em",
      minWidth: "1em",
      maxWidth: "1em",
    },
  },
  "small": {
    height: "2.5em",
    minHeight: "2.5em",
    maxHeight: "2.5em",
    paddingInline: "0.75em",
    fontSize: tokens.fontSizeBase300,
  },
  "medium": {
    height: "3.25em",
    minHeight: "3.25em",
    maxHeight: "3.25em",
    paddingInline: "1em",
    fontSize: tokens.fontSizeBase300,
  },
  "large": {
    height: "3.75em",
    minHeight: "3.75em",
    maxHeight: "3.75em",
    paddingInline: "1em",
    fontSize: tokens.fontSizeBase300,
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

const counterStyles: Record<ButtonSize, CSSObject> = {
  "extra-small": {
    width: "2.25em",
    minWidth: "2.25em",
    maxWidth: "2.25em",
    paddingInline: "unset",
  },
  "small": {
    width: "2.5em",
    minWidth: "2.5em",
    maxWidth: "2.5em",
    paddingInline: "unset",
  },
  "medium": {
    width: "3.25em",
    minWidth: "3.25em",
    maxWidth: "3.25em",
    paddingInline: "unset",
  },
  "large": {
    width: "3.75em",
    minWidth: "3.75em",
    maxWidth: "3.75em",
    paddingInline: "unset",
  },
};

export const Component = styled.button<{
  disabled?: boolean;
  $variant: ButtonVariant;
  $size: ButtonSize;
  $shape: ButtonShape;
  $fullWidth?: boolean;
  $counter?: boolean;
  $reduce?: boolean;
}>`
  position: relative;
  user-select: none;
  padding-inline: 1em;
  border: 1px solid transparent;
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightDemibold};
  white-space: nowrap;
  transition-property: color, border-color, background-color, box-shadow,
    opacity;
  transition-timing-function: ${tokens.curveDecelerateMin};
  transition-duration: ${tokens.durationNormal};

  // Full width and reduced styles.
  ${({ $fullWidth, $reduce }) => css`
    width: ${$fullWidth ? "100%" : "max-content"};
    ${$reduce &&
    css`
      svg {
        stroke-width: 1.5px;
      }
    `}
  `}

  // Dynamic button's styles.
  ${({ $variant, $size, $shape }) =>
    css({
      ...sizeStyles[$size],
      ...shapeStyles[$shape][$size],
      ...variantStyles[$variant].static,
    })}

  // Counter button is the same width and height.
  ${({ $counter, $size }) => $counter && css(counterStyles[$size])}

  &:not(:disabled, [aria-disabled="true"]) {
    &:hover,
    &:focus-visible {
      cursor: pointer;
      ${({ $variant }) => css({ ...variantStyles[$variant].hover })}
    }
    &:active,
    &[aria-expanded="true"] {
      ${({ $variant }) => css({ ...variantStyles[$variant].active })}
    }
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  height: 100%;

  span {
    line-height: 1.2;
  }
`;

export const Icon = styled.svg`
  width: 1.25em;
  min-width: 1.25em;
  max-width: 1.25em;
  height: 1.25em;
  min-height: 1.25em;
  max-height: 1.25em;
`;

// export const LoadingIcon = styled.svg`
//   width: 1.5em;
//   min-width: 1.5em;
//   max-width: 1.5em;
//   height: 1.5em;
//   min-height: 1.5em;
//   max-height: 1.5em;
//   animation: rotate-animation 1500ms infinite linear forwards;
// `;

// export const LoadingLabel = styled.span`
//   position: relative;
//   padding-inline: 0 1em;

//   &::after {
//     content: "";
//     position: absolute;
//     animation: ellipsis-animation 1500ms infinite linear forwards;
//   }
// `;

export const Loading = {
  Icon: styled.svg`
    width: 1.5em;
    min-width: 1.5em;
    max-width: 1.5em;
    height: 1.5em;
    min-height: 1.5em;
    max-height: 1.5em;
    animation: rotate-animation 1500ms infinite linear forwards;
  `,
  Label: styled.span`
    position: relative;
    padding-inline: 0 1em;

    &::after {
      content: "";
      position: absolute;
      animation: ellipsis-animation 1500ms infinite linear forwards;
    }
  `,
};
