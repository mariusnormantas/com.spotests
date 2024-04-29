/** @format */

import styled, { css } from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.nav`
  width: 100%;
  height: 100%;
`;

export const Menu = {
  List: styled.ul`
    display: grid;
    gap: 1em;
    padding-block: 0.75em;
  `,
  Item: styled.li`
    width: 100%;
    height: 100%;
  `,
  Link: styled.a`
    user-select: none;
    display: flex;
    align-items: center;
    gap: 0.5em;
    width: 100%;
    height: 3.25em;
    padding-inline: 1em;
    border-radius: ${tokens.borderRadiusMedium};
    font-size: ${tokens.fontSizeBase400};
    font-weight: ${tokens.fontWeightMedium};
    color: ${tokens.colorNeutralForeground4};
    line-height: 1.2;
    transition-property: color, background-color;
    transition-timing-function: ${tokens.curveDecelerateMin};
    transition-duration: ${tokens.durationNormal};

    span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &:hover,
    &:focus-visible {
      cursor: pointer;
      color: ${tokens.colorNeutralForegroundInvertedAlpha2};
      background-color: ${tokens.colorSecondaryBackground1Hover};
    }

    &:active {
      background-color: ${tokens.colorSecondaryBackground1Pressed};
    }

    &[data-active="true"] {
      background-color: ${tokens.colorSecondaryBackground1Hover};
      box-shadow: ${tokens.shadow4};
    }

    &[aria-current="page"] {
      color: ${tokens.colorNeutralForegroundInverted1};
      background-color: ${tokens.colorSecondaryBackground1Pressed};

      &:hover,
      &:focus-visible {
        color: ${tokens.colorNeutralForegroundInverted1Hover};
      }
    }

    &[aria-current="page"][data-active="true"] {
      color: ${tokens.colorNeutralForeground4};
      background-color: ${tokens.colorSecondaryBackground1Hover};
      box-shadow: ${tokens.shadow4};
    }
  `,
};

export const Dropdown = {
  Base: styled.ul<{ $isLoading: boolean }>`
    display: grid;
    gap: 0.5em;
    padding-block: 1em 0;
    padding-inline: 1em;

    ${({ $isLoading }) =>
      $isLoading &&
      css`
        a {
          pointer-events: none;
          color: ${tokens.colorNeutralForeground4};
          opacity: 0.5;
        }
      `}
  `,
  Headline: styled.div`
    user-select: none;
    position: relative;
    display: grid;
    height: 2em;

    span {
      font-size: ${tokens.fontSizeBase100};
      font-weight: ${tokens.fontWeightMedium};
      text-transform: uppercase;
      color: ${tokens.colorNeutralForeground4};
      /* -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
  Item: styled.li`
    position: relative;
    font-size: ${tokens.fontSizeBase400};
    padding-inline: 1em 0;

    &::before {
      content: "";
      position: absolute;
      top: -0.5em;
      left: 0;
      width: 1.25em;
      height: calc(50% + 0.5em + 1px);
      border-width: 0 0 2px 2px;
      border-style: solid;
      border-color: #3a3a3a;
      border-radius: 0 ${tokens.borderRadiusMedium};
    }

    &:not(:first-of-type) {
      &::before {
        top: -2.5em;
        height: calc(50% + 2.5em + 1px);
      }
    }
  `,
  Link: styled.a`
    user-select: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.5em;
    padding-inline: 1em 0;
    font-size: ${tokens.fontSizeBase300};
    font-weight: ${tokens.fontWeightMedium};
    line-height: 1.2;
    color: ${tokens.colorNeutralForeground4};
    transition-property: color;
    transition-timing-function: ${tokens.curveDecelerateMin};
    transition-duration: ${tokens.durationNormal};

    span {
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:hover,
    &:focus-visible {
      cursor: pointer;
      color: ${tokens.colorNeutralForegroundInvertedAlpha2};
    }

    &[aria-current="page"] {
      pointer-events: none;
      color: ${tokens.colorNeutralForegroundInverted1};

      &:focus-visible {
        color: ${tokens.colorNeutralForegroundInvertedAlpha2};
      }
    }
  `,
};

export const PleaseWait = styled.div`
  position: relative;
  display: block;

  &::after {
    content: "";
    position: absolute;
    animation: ellipsis-animation 1500ms infinite linear forwards;
    color: ${tokens.colorNeutralForeground4};
  }
`;
