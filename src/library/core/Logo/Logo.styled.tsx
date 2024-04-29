/** @format */

import styled, { css } from "styled-components";
import { tokens } from "../Theme";
import { LogoSize, LogoVariant } from "./types";

export const Component = styled.a<{
  $variant: LogoVariant;
  $size: LogoSize;
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ $size }) => ($size === "small" ? "0.5em" : "0.75em")};
  width: fit-content;
  height: ${({ $size }) => ($size === "small" ? "30px" : "50px")};
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    inset: -0.5em;
    width: calc(100% + 1em);
    height: calc(100% + 1em);
    border-radius: ${tokens.borderRadiusMedium};
    pointer-events: none;
  }

  &:focus-visible {
    z-index: 1;
    &::before {
      box-shadow: 0 0 0 2px ${tokens.colorLinkForeground1};
    }
  }

  h1 {
    ${({ $variant, $size }) => css`
      font-size: ${$size === "small"
        ? tokens.fontSizeBase500
        : tokens.fontSizeHero700};
      color: ${$variant === "dark"
        ? tokens.colorNeutralForeground1
        : tokens.colorNeutralForegroundInverted1};
    `}
  }

  h2 {
    font-size: ${tokens.fontSizeBase300};
    ${({ $variant }) => css`
      color: ${$variant === "dark"
        ? tokens.colorNeutralForeground2
        : tokens.colorNeutralForegroundInvertedAlpha3};
    `}
  }

  img {
    width: ${({ $size }) => ($size === "small" ? "4.5rem" : "6.7rem")};
    height: ${({ $size }) => ($size === "small" ? "3.5rem" : "5.5rem")};
    object-fit: contain;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;

export const Content = styled.div`
  display: grid;
`;

export const Title = styled.h1`
  font-weight: ${tokens.fontWeightBold};
  line-height: 1.3;
`;

export const Description = styled.h2`
  font-weight: ${tokens.fontWeightMedium};
  line-height: 1.3;
`;
