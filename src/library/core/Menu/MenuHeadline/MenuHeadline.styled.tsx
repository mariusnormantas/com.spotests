/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  user-select: none;
  width: 100%;
  padding-block: 0.25em;
  padding-inline: 0.75em;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightDemibold};
  color: ${tokens.colorNeutralForeground3};
`;
