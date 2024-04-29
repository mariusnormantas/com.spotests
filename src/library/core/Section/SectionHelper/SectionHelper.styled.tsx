/** @format */

import styled, { css, CSSObject } from "styled-components";
import { tokens } from "../../Theme";
import { SectionHelperVariant } from "./types";

const variantStyles: Record<SectionHelperVariant, CSSObject> = {
  informative: {
    borderColor: tokens.colorPaletteBlueStroke3,
    backgroundColor: tokens.colorPaletteBlueBackground3,
  },
  success: {
    borderColor: tokens.colorPaletteGreenStroke3,
    backgroundColor: tokens.colorPaletteGreenBackground3,
  },
  warning: {
    borderColor: tokens.colorPaletteYellowStroke3,
    backgroundColor: tokens.colorPaletteYellowBackground3,
  },
  danger: {
    borderColor: tokens.colorPaletteRedStroke3,
    backgroundColor: tokens.colorPaletteRedBackground3,
  },
};

export const Wrapper = styled.div<{ $variant: SectionHelperVariant }>`
  position: relative;
  padding-block: 1em;
  padding-inline: 1.25em;
  border-width: 1px;
  border-style: solid;
  border-radius: ${tokens.borderRadiusMedium};

  // Size based styling.
  ${({ $variant }) => css(variantStyles[$variant])}
`;

export const Content = styled.div`
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightRegular};
  color: ${tokens.colorNeutralForeground1};
  opacity: 0.75;
`;
