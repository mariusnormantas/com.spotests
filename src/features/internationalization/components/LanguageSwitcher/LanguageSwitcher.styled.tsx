/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: fit-content;
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightMedium};

  &:hover {
    cursor: pointer;
  }
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding-block: 1em;
  padding-inline: 1em;
`;

export const Caption = styled.p`
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForeground3};
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
`;

export const Language = styled.button`
  padding-block: 0.5em;
  padding-inline: 0.75em;
  border-radius: ${tokens.borderRadiusSmall};
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightMedium};
  transition-property: color, background-color;
  transition-timing-function: ${tokens.curveDecelerateMin};
  transition-duration: ${tokens.durationNormal};

  &:not(:first-of-type) {
    margin-inline: 0.5em 0;
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus-visible {
    cursor: pointer;
    color: ${tokens.colorPaletteBlueForeground1};
    background-color: ${tokens.colorNeutralBackground2Hover};
  }

  &:not(:disabled):active {
    color: ${tokens.colorPaletteBlueForeground1Selected};
    background-color: ${tokens.colorNeutralBackground2Pressed};
  }

  &:disabled {
    color: ${tokens.colorPaletteBlueForeground1};
    background-color: ${tokens.colorPaletteBlueBackground2};
  }
`;
