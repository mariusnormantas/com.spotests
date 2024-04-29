/** @format */

import styled, { css } from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.aside<{ $isExpanded: boolean }>`
  position: sticky;
  top: 0.75em;
  display: flex;
  flex-direction: column;
  width: 20em;
  min-width: 20em;
  height: calc(100dvh - 1.5em);
  min-height: calc(100dvh - 1.5em);
  max-height: calc(100dvh - 1.5em);
  margin-inline: 0.75em 0;
  padding-block: 0.75em;
  padding-inline: 0.75em;
  border-radius: ${tokens.borderRadiusExtraLarge};
  color: ${tokens.colorNeutralForegroundInvertedAlpha3};
  background-color: ${tokens.colorSecondaryBackground1};
  overflow: hidden;
`;

export const Separator = styled.div`
  width: calc(100% - 0.75em * 2);
  height: 1.5px;
  min-height: 1.5px;
  max-height: 1.5px;
  margin-inline: auto;
  background-color: ${tokens.colorSecondaryBackground1Pressed};
`;

export const Spacer = styled.div`
  width: 100%;
  height: 0.75em;
  min-height: 0.75em;
  max-height: 0.75em;
`;

export const Block = styled.div<{
  $hoverable?: boolean;
  $clickable?: boolean;
}>`
  width: 100%;
  padding-block: 0.75em;
  padding-inline: 0.75em;
  border-radius: ${tokens.borderRadiusMedium};
  transition-property: background-color;
  transition-timing-function: ${tokens.curveDecelerateMin};
  transition-duration: ${tokens.durationNormal};

  ${({ $hoverable }) =>
    $hoverable &&
    css`
      &:hover,
      &:focus-visible {
        cursor: pointer;
        background-color: ${tokens.colorSecondaryBackground1Hover};
      }
    `}

  ${({ $clickable }) =>
    $clickable &&
    css`
      &:active,
      &[aria-expanded="true"] {
        background-color: ${tokens.colorSecondaryBackground1Pressed};
      }
    `}
`;

export const NavigationBlock = styled.div`
  flex-grow: 1;
  padding-block: unset;
  border-radius: ${tokens.borderRadiusNone};
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
