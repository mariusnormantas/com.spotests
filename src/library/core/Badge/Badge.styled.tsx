/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "../Theme";
import { BadgeShape, BadgeSize, BadgeVariant } from "./types";

const variantStyles: Record<BadgeVariant, CSSObject> = {
  primary: {
    borderColor: tokens.colorBrandBackground3,
    color: tokens.colorBrandForeground1Pressed,
    backgroundColor: tokens.colorBrandBackground3,
  },
  secondary: {
    borderColor: tokens.colorSecondaryBackground1,
    color: tokens.colorNeutralForegroundInverted1,
    backgroundColor: tokens.colorSecondaryBackground1,
  },
  neutral: {
    borderColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground2,
    backgroundColor: tokens.colorNeutralBackground3,
  },
  danger: {
    borderColor: tokens.colorPaletteRedBackground3,
    color: tokens.colorPaletteRedForeground1Pressed,
    backgroundColor: tokens.colorPaletteRedBackground3,
  },
  success: {
    borderColor: tokens.colorPaletteGreenBackground3,
    color: tokens.colorPaletteGreenForeground1Pressed,
    backgroundColor: tokens.colorPaletteGreenBackground3,
  },
  informative: {
    borderColor: tokens.colorPaletteBlueBackground3,
    color: tokens.colorPaletteBlueForeground1Pressed,
    backgroundColor: tokens.colorPaletteBlueBackground3,
  },
  warning: {
    borderColor: tokens.colorPaletteYellowBackground3,
    color: tokens.colorPaletteYellowForeground1Pressed,
    backgroundColor: tokens.colorPaletteYellowBackground3,
  },
};

const sizeStyles: Record<BadgeSize, CSSObject> = {
  small: {
    height: "2em",
    minHeight: "2em",
    maxHeight: "2em",
    fontSize: tokens.fontSizeBase100,
  },
  medium: {
    height: "2em",
    minHeight: "2em",
    maxHeight: "2em",
    fontSize: tokens.fontSizeBase200,
  },
  large: {
    height: "2.25em",
    minHeight: "2.25em",
    maxHeight: "2.25em",
    fontSize: tokens.fontSizeBase300,
  },
};

const shapeStyles: Record<BadgeShape, CSSObject> = {
  rounded: {
    borderRadius: tokens.borderRadiusSmall,
  },
  square: {
    borderRadius: tokens.borderRadiusNone,
  },
  circular: {
    borderRadius: tokens.borderRadiusCircular,
    paddingInline: "0.75em",
  },
};

const counterStyles: Record<BadgeSize, CSSObject> = {
  small: {
    width: "2em",
    minWidth: "2em",
    maxWidth: "2em",
    paddingInline: "unset",
  },
  medium: {
    width: "2em",
    minWidth: "2em",
    maxWidth: "2em",
    paddingInline: "unset",
  },
  large: {
    width: "2.25em",
    minWidth: "2.25em",
    maxWidth: "2.25em",
    paddingInline: "unset",
  },
};

export const Component = styled.div<{
  $variant: BadgeVariant;
  $shape: BadgeShape;
  $size: BadgeSize;
  $counter: boolean;
}>`
  user-select: none;
  width: fit-content;
  padding-inline: 0.5em;
  border: 1px solid transparent;
  font-weight: ${tokens.fontWeightDemibold};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;

  // Size based styles.
  ${({ $size }) => css(sizeStyles[$size])}

  // Variant and color based styles.
  ${({ $variant }) => css(variantStyles[$variant])}

  // Counter badge is the same width and height.
  ${({ $counter, $size }) => $counter && css(counterStyles[$size])}

  // Shape based styles.
  ${({ $shape }) => css(shapeStyles[$shape])}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
  height: 100%;
  line-height: 1.1;
`;

export const Icon = styled.svg`
  width: 1.25em;
  min-width: 1.25em;
  max-width: 1.25em;
  height: 1.25em;
  min-height: 1.25em;
  max-height: 1.25em;
`;
