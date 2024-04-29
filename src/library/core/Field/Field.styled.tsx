/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 100%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr;
  align-items: center;
  gap: 1.5em;
  width: 100%;
  height: fit-content;

  > :first-child label {
    color: ${tokens.colorNeutralForeground2};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Validation = styled.span`
  display: flex;
  align-items: flex-start;
  gap: 0.25em;
  width: 100%;
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightMedium};
  line-height: 1.3;
  color: ${tokens.colorPaletteRedForeground1};

  svg {
    width: 1.25em;
    min-width: 1.25em;
    max-width: 1.25em;
    height: 1.25em;
    min-height: 1.25em;
    max-height: 1.25em;
    margin-block: 0.015em 0;
  }
`;

export const Description = styled.div`
  width: fit-content;
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightRegular};
  color: ${tokens.colorNeutralForeground3};
`;

export const Label = {
  Container: styled.div`
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    > :nth-child(2) {
      margin-inline: auto 0;
    }
  `,
  Content: styled.label`
    cursor: default;
    width: fit-content;
    font-size: ${tokens.fontSizeBase300};
    font-weight: ${tokens.fontWeightMedium};
    color: ${tokens.colorNeutralForeground1};
    line-height: 1.3;

    span {
      margin-inline: 0.25em 0;
      color: ${tokens.colorPaletteRedForeground1};
    }
  `,
};
