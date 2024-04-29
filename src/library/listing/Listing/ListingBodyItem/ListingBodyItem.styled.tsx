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
    "cursor": "pointer",
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
  display: flex;
  align-items: center;
  gap: 1em;
  padding-inline: 1em;
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

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightSemimedium};
  color: ${tokens.colorNeutralForeground1};
  * {
    line-height: 1.3;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5em;
  margin-inline: auto 0;
`;
