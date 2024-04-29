/** @format */

import styled from "styled-components";
import { tokens } from "../../Theme";

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5em;
  width: 100%;
  padding-inline: 0.5em;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: ${tokens.fontSizeHero800};
  font-weight: ${tokens.fontWeightBold};
  color: ${tokens.colorNeutralForeground1};
  line-height: 1.4;
`;

export const Description = styled.div`
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightRegular};
  color: ${tokens.colorNeutralForeground3};
  line-height: 1.2;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75em;
`;
