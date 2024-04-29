/** @format */

import styled from "styled-components";
import { tokens } from "../../Theme";

export const Component = styled.div`
  padding-block: 0.5em;
  padding-inline: 0.75em;
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForegroundInvertedAlpha1};
  background-color: ${tokens.colorSecondaryBackground1};

  > svg:first-of-type {
    fill: ${tokens.colorSecondaryBackground1};
  }
`;
