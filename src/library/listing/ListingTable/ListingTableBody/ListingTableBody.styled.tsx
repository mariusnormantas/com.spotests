/** @format */

import styled, { css } from "styled-components";
import { tokens } from "@/library/core";
import { ListingRowSize, ListingVariant } from "../../types";

const rowSizes: Record<ListingVariant, Record<ListingRowSize, string>> = {
  default: {
    small: "3em",
    medium: "3.5em",
  },
  grid: {
    small: "3em",
    medium: "3.5em",
  },
};

export const Component = styled.ul<{
  $variant: ListingVariant;
  $rowSize: ListingRowSize;
  $bodySize: number;
}>`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow-y: auto;
  overscroll-behavior-x: none;
  overscroll-behavior-y: none;

  // Body and row size based styling.
  ${({ $variant, $rowSize, $bodySize }) =>
    css({
      height: `calc((${rowSizes[$variant][$rowSize]} + 1px) * ${$bodySize} - 1px)`,
      minHeight: `calc((${rowSizes[$variant][$rowSize]} + 1px) * ${$bodySize} - 1px)`,
      maxHeight: `calc((${rowSizes[$variant][$rowSize]} + 1px) * ${$bodySize} - 1px)`,
    })}

  // Variant based styling.
  ${({ $variant }) =>
    $variant === "grid" &&
    css`
      [data-row="true"] [data-select="true"] {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background-color: ${tokens.colorNeutralStroke2};
        }
      }

      [data-row="true"]:not(:last-child) [data-select="true"] {
        &::before {
          content: "";
          position: absolute;
          z-index: 99;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: ${tokens.colorNeutralStroke2};
        }
      }

      [data-row="true"] [data-column="true"]:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 0;
        right: -1px;
        width: 1px;
        height: 100%;
        background-color: ${tokens.colorNeutralStroke2};
      }

      [data-row="true"] [data-management="true"] {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          background-color: ${tokens.colorNeutralStroke2};
        }
      }
    `}

    // Row size based styling.
    ${({ $variant, $rowSize }) => css`
    [data-row="true"] {
      height: ${rowSizes[$variant][$rowSize]};
      min-height: ${rowSizes[$variant][$rowSize]};
      max-height: ${rowSizes[$variant][$rowSize]};
    }
  `}
`;

export const Loading = styled.div`
  position: relative;
  padding-inline: 1em;
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightMedium};
  overflow: visible;

  &::after {
    content: "";
    position: absolute;
    left: calc(100% - 1em);
    animation: ellipsis-animation 1500ms infinite linear forwards;
  }
`;

export const NotFound = styled.div`
  padding-inline: 1em;
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightMedium};
  overflow: visible;
`;
