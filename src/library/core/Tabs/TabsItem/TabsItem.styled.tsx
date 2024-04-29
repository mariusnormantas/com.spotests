/** @format */

import styled from "styled-components";
import { tokens } from "../../Theme";

export const Component = styled.li`
  cursor: default;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5em;
  min-width: fit-content;
  padding-block: 0 0.75em;
  padding-inline: 0.25em;
  font-size: ${tokens.fontSizeBase400};
  font-weight: ${tokens.fontWeightSemibold};
  color: ${tokens.colorNeutralForeground2};
  transition-property: color;
  transition-timing-function: ${tokens.curveDecelerateMin};
  transition-duration: ${tokens.durationNormal};

  [data-component="icon"] {
    color: ${tokens.colorNeutralForeground2};
    transition-property: color;
    transition-timing-function: ${tokens.curveDecelerateMin};
    transition-duration: ${tokens.durationNormal};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: ${tokens.borderRadiusSmall} ${tokens.borderRadiusSmall} 0 0;
    background-color: ${tokens.colorBrandBackground1};
    transform: translateY(100%);
    transition-property: transform;
    transition-timing-function: ${tokens.curveDecelerateMin};
    transition-duration: ${tokens.durationNormal};
  }

  &[aria-current="true"] {
    color: ${tokens.colorNeutralForeground1};

    [data-component="icon"] {
      color: ${tokens.colorNeutralForeground1};
    }

    &::before {
      transform: translateY(0);
    }
  }

  &[aria-disabled="true"] {
    pointer-events: none;
    color: ${tokens.colorNeutralForeground3};
    opacity: 0.75;

    [data-component="icon"] {
      color: ${tokens.colorNeutralForeground3};
    }

    &::before {
      background-color: ${tokens.colorNeutralForeground3};
    }
  }

  &:not([aria-disabled="true"], [aria-current="true"]):hover {
    cursor: pointer;
    color: ${tokens.colorBrandForeground1};
  }

  &:not([aria-disabled="true"], [aria-current="true"]):active {
    color: ${tokens.colorBrandForeground1Pressed};
  }
`;
