/** @format */

import styled from "styled-components";
import { tokens } from "../../Theme";

export const Component = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: 100%;
  padding-block: 0.75em;

  &:first-of-type {
    padding-block: 0 0.75em;
  }

  &:last-of-type {
    padding-block: 0.75em 0;
  }

  &:not(:last-of-type) {
    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      bottom: -0.75px;
      left: 0;
      width: 100%;
      height: 1px;
      min-height: 1px;
      max-height: 1px;
      border-radius: ${tokens.borderRadiusCircular};
      background-color: hsla(0, 0%, 0%, 7%);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.125em; */
  width: 100%;

  * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Row = styled.div<{ $spaceBetween?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $spaceBetween }) =>
    $spaceBetween ? "space-between" : ""};
  gap: 0.5em;
  width: 100%;
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForeground1};

  span {
    color: ${tokens.colorNeutralForeground2};
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const Description = styled.div`
  display: grid;
  align-items: center;
  gap: 0.25em;
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightRegular};
  color: ${tokens.colorNeutralForeground2};
`;
