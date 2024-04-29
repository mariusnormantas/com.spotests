/** @format */

import styled, { css } from "styled-components";
import { tokens } from "@/library/core";
import { ListingVariant } from "../../types";

export const Component = styled.div<{
  $variant: ListingVariant;
  $hasHeadline: boolean;
}>`
  user-select: none;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  height: 3em;
  border-width: 1px;
  border-style: solid;
  border-color: ${tokens.colorNeutralStroke4};
  color: ${tokens.colorNeutralForeground2};
  background-color: ${tokens.colorNeutralBackground3};

  ${({ $hasHeadline }) =>
    !$hasHeadline &&
    css`
      border-top-left-radius: ${tokens.borderRadiusLarge};
      border-top-right-radius: ${tokens.borderRadiusLarge};
    `}

  ${({ $variant }) =>
    $variant === "grid" &&
    css`
      [data-select="true"] {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background-color: ${tokens.colorNeutralStroke4};
        }
      }
      [data-column]:not(:last-of-type)::after {
        content: "";
        position: absolute;
        top: 0;
        right: -1px;
        width: 1px;
        height: 100%;
        background-color: ${tokens.colorNeutralStroke4};
      }
      [data-management="true"] {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          background-color: ${tokens.colorNeutralStroke4};
        }
      }
    `}
`;

export const SelectBox = styled.div`
  width: fit-content;
  height: 100%;
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-inline: 1em;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  align-items: center;
  gap: 1px;
  height: 100%;
`;

export const Column = styled.li`
  position: relative;
  display: grid;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-inline: 1em;

  span {
    font-size: ${tokens.fontSizeBase200};
    font-weight: ${tokens.fontWeightMedium};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ManagementBox = styled.div<{ $actionsCount: number }>`
  height: 100%;

  ${({ $actionsCount }) => css`
    width: calc(
      ${$actionsCount} * ${$actionsCount > 1 ? "2.75em" : "2.5em"} + 1em
    );
    min-width: calc(
      ${$actionsCount} * ${$actionsCount > 1 ? "2.75em" : "2.5em"} + 1em
    );
    max-width: calc(
      ${$actionsCount} * ${$actionsCount > 1 ? "2.75em" : "2.5em"} + 1em
    );
  `}
`;
