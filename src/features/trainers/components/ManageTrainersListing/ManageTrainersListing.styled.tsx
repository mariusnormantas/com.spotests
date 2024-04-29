/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Render = styled.div`
  display: grid;
  grid-template-columns: auto minmax(4em, 1fr);
  align-items: center;
  gap: 1em;
  width: 100%;
`;

export const Initials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5em;
  min-width: 2.5em;
  max-width: 2.5em;
  height: 2.5em;
  min-height: 2.5em;
  max-height: 2.5em;
  border-radius: ${tokens.borderRadiusCircular};
  font-size: ${tokens.fontSizeBase400};
  font-weight: ${tokens.fontWeightDemibold};
  letter-spacing: 0.02em;
  color: ${tokens.colorNeutralForegroundInvertedAlpha1};
  background-color: ${tokens.colorPaletteBlueBackground1};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
