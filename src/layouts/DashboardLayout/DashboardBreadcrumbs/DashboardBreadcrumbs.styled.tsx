/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.ul`
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.35em;
  width: 100%;
  height: 2.25em;
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForeground2};

  button {
    margin-inline: 0 0.5em;
  }

  a,
  span {
    min-width: 2em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Breadcrumb = styled.li`
  display: grid;

  a,
  span {
    min-width: 2em;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    transition-property: color;
    transition-timing-function: ${tokens.curveDecelerateMin};
    transition-duration: ${tokens.durationNormal};

    &:hover {
      color: ${tokens.colorLinkForeground1Hover};
    }

    &:active {
      color: ${tokens.colorLinkForeground1Pressed};
    }
  }
`;
