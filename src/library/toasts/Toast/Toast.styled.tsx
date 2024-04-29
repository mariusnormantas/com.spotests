/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "@/library/core";
import { ToastVariant } from "../types";

const styles: Record<ToastVariant, CSSObject> = {
  informative: {
    '[data-component="icon"]': {
      color: tokens.colorPaletteBlueForeground1,
    },
  },
  success: {
    '[data-component="icon"]': {
      color: tokens.colorPaletteGreenBackground1,
    },
  },
  danger: {
    '[data-component="icon"]': {
      color: tokens.colorPaletteRedBackground1,
    },
  },
  loading: {
    '[data-component="icon"]': {
      color: tokens.colorBrandBackground1,
    },
  },
};

export const Component = styled.div<{
  $variant: ToastVariant;
}>`
  display: flex;
  align-items: center;
  gap: 1em;
  width: 35em;
  max-width: calc(100vw - 3em);
  margin-inline: 1.25em;
  padding-block: 1em;
  padding-inline: 1em;
  border-radius: ${tokens.borderRadiusLarge};
  background-color: ${tokens.colorSecondaryBackground1};
  box-shadow: ${tokens.shadow8};

  // Variant based styles.
  ${({ $variant }) => css({ ...styles[$variant] })}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* gap: 0.25em; */
`;

export const Title = styled.p`
  width: fit-content;
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightSemibold};
  color: ${tokens.colorNeutralForegroundInvertedAlpha3};
`;

export const Message = styled.p`
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForegroundInvertedAlpha1};
`;

export const AnimatedIcon = styled.div`
  svg {
    animation: rotate-animation 1500ms linear infinite;
  }
`;
