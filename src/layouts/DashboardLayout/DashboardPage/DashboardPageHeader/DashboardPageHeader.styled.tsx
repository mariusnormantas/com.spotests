/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  padding-block: 1.5em 2em;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const Title = styled.h2`
  display: grid;
  width: fit-content;

  span {
    font-size: ${tokens.fontSizeHero1000};
    font-weight: ${tokens.fontWeightBold};
    color: ${tokens.colorNeutralForeground1};
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Tagline = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 0.25em;
  width: fit-content;
  font-size: ${tokens.fontSizeBase300};
  color: ${tokens.colorNeutralForeground3};

  span {
    font-weight: ${tokens.fontWeightMedium};
    line-height: 1.2;
    color: ${tokens.colorNeutralForeground3};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.75em;

  [data-component="input"] {
    width: 20dvw;
    min-width: 12em;
    max-width: 24em;

    @media only screen and (max-width: ${tokens.breakpointMobile}) {
      width: 100%;
      max-width: 100%;
    }
  }
`;
