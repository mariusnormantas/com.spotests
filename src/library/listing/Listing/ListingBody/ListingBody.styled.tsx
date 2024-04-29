/** @format */

import styled, { css } from "styled-components";
import { tokens } from "@/library/core";
import { ListingRowSize } from "../../types";

const rowSizes: Record<ListingRowSize, string> = {
  small: "3.25em",
  medium: "3.75em",
};

export const Component = styled.ul<{
  $rowSize: ListingRowSize;
  $bodySize: number;
}>`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior-x: none;
  overscroll-behavior-y: none;

  // Body and row size based styling.
  ${({ $rowSize, $bodySize }) =>
    css({
      height: `calc((${rowSizes[$rowSize]} + 1px) * ${$bodySize} - 1px)`,
      minHeight: `calc((${rowSizes[$rowSize]} + 1px) * ${$bodySize} - 1px)`,
      maxHeight: `calc((${rowSizes[$rowSize]} + 1px) * ${$bodySize} - 1px)`,
    })}

  // Row size based styling.
  ${({ $rowSize }) => css`
    [data-row="true"] {
      height: ${rowSizes[$rowSize]};
      min-height: ${rowSizes[$rowSize]};
      max-height: ${rowSizes[$rowSize]};
    }
  `}
`;

export const Placeholder = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding-inline: 1em;

  &:not(:last-of-type)::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background-color: ${tokens.colorNeutralStroke2};
  }
`;

export const Loading = styled.div`
  position: relative;
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightMedium};
  overflow: visible;

  &::after {
    content: "";
    position: absolute;
    animation: ellipsis-animation 1500ms infinite linear forwards;
  }
`;

export const NotFound = styled.div`
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightMedium};
  overflow: visible;
`;
