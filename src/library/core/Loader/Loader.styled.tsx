/** @format */

import styled, { createGlobalStyle } from "styled-components";
import { tokens } from "../Theme";

export const GlobalStyles = createGlobalStyle`
  html {
    overflow: hidden;
    pointer-events: none;
    user-select: none;
  }
`;

export const Component = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: fit-content;
  min-width: 20em;
  padding-block: 1.5em;
  padding-inline: 1.5em;
  border-radius: ${tokens.borderRadiusMedium};
  background-color: ${tokens.colorNeutralBackground1};
  box-shadow: ${tokens.shadow8Brand};
`;

export const Label = styled.span`
  position: relative;
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForeground2};

  &::after {
    content: "";
    position: absolute;
    animation: ellipsis-animation 1500ms infinite linear forwards;
  }
`;

export const Indicator = styled.svg`
  width: 3.5em;
  min-width: 3.5em;
  max-width: 3.5em;
  height: 3.5em;
  min-height: 3.5em;
  max-height: 3.5em;
  color: ${tokens.colorBrandBackground1};
  animation: rotate-animation 1500ms linear infinite;
`;
