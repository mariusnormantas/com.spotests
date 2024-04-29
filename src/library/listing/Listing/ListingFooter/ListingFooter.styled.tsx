/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  position: relative;
  height: 3.5em;
  min-height: 3.5em;
  max-height: 3.5em;
  padding-block: 0.5em;
  padding-inline: 0.5em;
  background-color: ${tokens.colorNeutralBackground1};

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${tokens.colorNeutralStroke2};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  height: 100%;
  padding-inline: 1.25em;
  border-radius: ${tokens.borderRadiusSmall};
  /* background-color: ${tokens.colorNeutralBackground3}; */
`;

export const AnimatedIcon = styled.div`
  svg {
    color: ${tokens.colorBrandForeground1};
    animation: rotate-animation 1500ms linear infinite;
  }
`;
