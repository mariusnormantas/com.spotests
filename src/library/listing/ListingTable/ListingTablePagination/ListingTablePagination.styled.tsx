/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  display: flex;
  align-items: center;
  margin-inline: auto 0;
`;

export const Page = styled.div`
  padding-inline: 0 0.5em;
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightMedium};
`;

export const AnimatedIcon = styled.div`
  svg {
    color: ${tokens.colorBrandForeground1};
    animation: rotate-animation 1500ms linear infinite;
  }
`;
