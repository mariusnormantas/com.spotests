/** @format */

import styled, { css } from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  width: 100%;
  min-height: 3em;
  border-radius: ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0;
  background-color: ${tokens.colorNeutralBackground3};
  box-shadow: inset 0 0 0 1px ${tokens.colorNeutralStroke4};
`;

export const Headline = {
  Container: styled.div`
    user-select: none;
    display: flex;
    align-items: center;
    height: 3em;
    min-height: 3em;
    max-height: 3em;
    padding-inline: 1em;
    border-radius: ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0;
    background-color: ${tokens.colorSecondaryBackground2};
  `,
  Label: styled.p`
    font-size: ${tokens.fontSizeBase300};
    font-weight: ${tokens.fontWeightBold};
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: ${tokens.colorNeutralForegroundInverted1};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};

export const Search = styled.div<{ $hasHeadline: boolean }>`
  width: 100%;
  border-color: ${tokens.colorNeutralStroke4};
  border-bottom-left-radius: unset;
  border-bottom-right-radius: unset;

  ${({ $hasHeadline }) =>
    $hasHeadline &&
    css`
      border-radius: ${tokens.borderRadiusNone};
    `}
`;
