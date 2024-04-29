/** @format */

import styled, { css } from "styled-components";

export const Component = styled.div<{ $hasControls: boolean }>`
  ${({ $hasControls }) =>
    $hasControls &&
    css`
      padding-inline: 1em 0.5em;
    `}
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
