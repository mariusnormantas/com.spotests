/** @format */

import styled, { createGlobalStyle } from "styled-components";
import { tokens } from "@/library/core";

export const GlobalStyles = createGlobalStyle`
  html {
    color: ${tokens.colorNeutralForeground2};
    background-color: ${tokens.colorNeutralBackground1};
  }
`;

export const Component = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  min-width: ${tokens.breakpointTablet};
  min-height: 100dvh;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-block: 0 1.5em;
`;

export const Footer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-block: 2em 0;
  padding-block: 1em 0;
  padding-inline: 3em;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 3em;
    width: calc(100% - 6em);
    height: 2px;
    border-radius: ${tokens.borderRadiusCircular};
    background-color: ${tokens.colorNeutralStroke1};
  }
`;

export const Loading = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  width: 100%;
  height: 100%;
  background-color: ${tokens.colorNeutralBackground1};
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
