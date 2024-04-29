/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  position: relative;
  padding-block: 0.5em;
  padding-inline: 0.5em;
  border-radius: 0 0 ${tokens.borderRadiusLarge} ${tokens.borderRadiusLarge};
  background-color: ${tokens.colorNeutralBackground1};

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${tokens.colorNeutralStroke2};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  height: 3.75em;
  min-height: 3.75em;
  max-height: 3.75em;
  padding-inline: 1.25em;
  border-radius: ${tokens.borderRadiusSmall};
  color: ${tokens.colorNeutralForeground1};
  background-color: ${tokens.colorNeutralBackground3};
`;

export const Showing = styled.span`
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightMedium};
`;
