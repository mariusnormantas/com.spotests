/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "../../Theme";
import { MenuItemVariant } from "./types";

const variantStyles: Record<
  MenuItemVariant,
  Record<"static" | "hover" | "active", CSSObject>
> = {
  default: {
    static: {
      color: tokens.colorNeutralForeground2,
    },
    hover: {
      color: tokens.colorNeutralForeground2Hover,
      backgroundColor: tokens.colorNeutralBackground2Hover,
    },
    active: {
      color: tokens.colorNeutralForeground1Pressed,
      backgroundColor: tokens.colorNeutralBackground2Pressed,
    },
  },
  primary: {
    static: {
      color: tokens.colorBrandForeground1,
    },
    hover: {
      color: tokens.colorBrandForeground1Hover,
      backgroundColor: tokens.colorBrandBackground2,
    },
    active: {
      color: tokens.colorBrandForeground1Pressed,
      backgroundColor: tokens.colorBrandBackground2Hover,
    },
  },
  danger: {
    static: {
      color: tokens.colorPaletteRedForeground1,
    },
    hover: {
      color: tokens.colorPaletteRedForeground1Hover,
      backgroundColor: tokens.colorPaletteRedBackground2,
    },
    active: {
      color: tokens.colorPaletteRedForeground1Pressed,
      backgroundColor: tokens.colorPaletteRedBackground2Hover,
    },
  },
};

export const Component = styled.button<{ $variant: MenuItemVariant }>`
  user-select: none;
  width: 100%;
  padding-block: 0.75em;
  padding-inline: 0.75em;
  border-radius: ${tokens.borderRadiusSmall};
  transition-property: color, background-color, opacity;
  transition-timing-function: ${tokens.curveDecelerateMin};
  transition-duration: ${tokens.durationNormal};

  // Variant based styling.
  ${({ $variant }) => css(variantStyles[$variant].static)}

  &:not(:disabled) {
    &:hover,
    &:focus-visible {
      cursor: pointer;
      // Variant based styling.
      ${({ $variant }) => css(variantStyles[$variant].hover)}
    }

    &:active {
      // Variant based styling.
      ${({ $variant }) => css(variantStyles[$variant].active)}
    }
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const Content = styled.div`
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightMedium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
`;
