/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "@/library/core";

const mouseOverStyles: Record<"default" | "hover" | "active", CSSObject> = {
  default: {
    '&:not([aria-selected="true"]):hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  hover: {
    "cursor": "pointer",
    "backgroundColor": tokens.colorNeutralBackground1Hover,
    '&[aria-selected="true"]': {
      backgroundColor: tokens.colorPaletteYellowBackground2Hover,
    },
  },
  active: {
    "backgroundColor": tokens.colorNeutralBackground1Pressed,
    '&[aria-selected="true"]': {
      backgroundColor: tokens.colorPaletteYellowBackground2Pressed,
    },
  },
};

export const Component = styled.li<{
  $isHovered: boolean;
  $isPressed: boolean;
}>`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  background-color: ${tokens.colorNeutralBackground1};
  transition-property: color, background-color;
  transition-timing-function: ${tokens.curveLinear};
  transition-duration: ${tokens.durationFaster};

  &:not(:last-of-type)::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background-color: ${tokens.colorNeutralStroke2};
  }

  &[aria-selected="true"] {
    color: ${tokens.colorNeutralForeground1};
    background-color: ${tokens.colorPaletteYellowBackground2};
  }

  // Styles based on mouse over state.
  ${({ $isHovered, $isPressed }) =>
    !$isHovered && !$isPressed && css(mouseOverStyles["default"])}

  // Styles based on hover state.
  ${({ $isHovered }) => $isHovered && css(mouseOverStyles["hover"])}

  // Styles based on pressed state.
  ${({ $isPressed }) => $isPressed && css(mouseOverStyles["active"])}
`;

export const SelectBox = styled.div`
  width: fit-content;
  height: 100%;
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-inline: 1em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  align-items: center;
  gap: 1px;
  height: 100%;

  > :first-child {
    color: ${tokens.colorNeutralForeground1};
  }
`;

export const Column = {
  Base: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    transition-property: color, background-color, box-shadow;
    transition-timing-function: ${tokens.curveLinear};
    transition-duration: ${tokens.durationFaster};

    [data-component="input"] {
      position: relative;
      z-index: 1;
      height: 100%;
      min-width: unset;
      min-height: unset;
      max-height: unset;
      border: unset;
      border-radius: ${tokens.borderRadiusNone};
      background-color: unset;

      &[data-invalid="true"] {
        background-color: ${tokens.colorPaletteRedBackground2};
      }

      &:focus-within {
        box-shadow: inset 0 0 0 2px ${tokens.colorBrandBackground1};

        &[data-invalid="true"] {
          box-shadow: inset 0 0 0 2px ${tokens.colorPaletteRedBackground1};
        }
      }
    }
  `,
  Inner: styled.div`
    padding-inline: 1em;
    font-size: ${tokens.fontSizeBase300};
    font-weight: ${tokens.fontWeightMedium};

    &,
    * {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
};

export const ManagementBox = styled.div<{ $actionsCount: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
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
