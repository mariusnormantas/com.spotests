/** @format */

import styled from "styled-components";
import { tokens } from "../../Theme";

export const Component = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    min-height: 2px;
    max-height: 2px;
    border-radius: ${tokens.borderRadiusCircular};
    background-color: ${tokens.colorNeutralStroke1};
  }
`;

export const Scrollable = styled.ul`
  display: flex;
  gap: 1.5em;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
