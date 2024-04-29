/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: 2em;
  padding-block: 2em 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5em;
`;

export const Title = styled.span`
  font-size: ${tokens.fontSizeBase600};
  font-weight: ${tokens.fontWeightBold};
  color: ${tokens.colorNeutralForeground1};
`;

export const Description = styled.span`
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForeground3};
`;
