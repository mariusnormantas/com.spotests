/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  width: 100%;

  @media only screen and (max-width: ${tokens.breakpointDesktop}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  width: 100%;
  height: 514px;
  min-height: 514px;
  max-height: 514px;

  @media only screen and (max-width: ${tokens.breakpointDesktop}) {
    height: 400px;
  }
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
