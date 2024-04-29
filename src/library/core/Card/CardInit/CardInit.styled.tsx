/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "../../Theme";
import { CardInitVariant } from "./types";

const variantStyles: Record<CardInitVariant, CSSObject> = {
  default: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow8Dimmed,
  },
  neutral: {
    backgroundColor: tokens.colorNeutralBackground3,
  },
  primary: {
    backgroundColor: tokens.colorBrandBackground2,
  },
  informative: {
    backgroundColor: tokens.colorPaletteBlueBackground2,
  },
};

export const Component = styled.div<{ $variant: CardInitVariant }>`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  padding-block: 1.5em;
  padding-inline: 1.5em;
  border-radius: ${tokens.borderRadiusLarge};

  // Variant based styling.
  ${({ $variant }) => css(variantStyles[$variant])}
`;
