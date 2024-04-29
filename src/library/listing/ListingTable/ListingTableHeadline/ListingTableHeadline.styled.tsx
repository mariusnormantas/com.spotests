/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  height: 3em;
  min-height: 3em;
  max-height: 3em;
  padding-inline: 1em;
  border-radius: ${tokens.borderRadiusLarge} ${tokens.borderRadiusLarge} 0 0;
  background-color: ${tokens.colorSecondaryBackground2};
`;

export const Headline = styled.p`
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightBold};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: ${tokens.colorNeutralForegroundInverted1};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
