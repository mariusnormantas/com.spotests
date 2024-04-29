/** @format */

import styled, { css } from "styled-components";

export const Component = styled.div<{
  $size?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;

  svg {
    // SVG width and height, when size is number.
    ${({ $size }) =>
      $size &&
      css({
        minWidth: `${$size}em`,
        width: `${$size}em`,
        maxWidth: `${$size}em`,
        minHeight: `${$size}em`,
        height: `${$size}em`,
        maxHeight: `${$size}em`,
        paddingInline: "unset",
        paddingBlock: "unset",
      })}
  }
`;
