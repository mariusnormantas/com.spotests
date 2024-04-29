/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.button`
  user-select: none;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.25em;

  [data-component="icon"] {
    color: ${tokens.colorNeutralForeground4};
  }
`;

export const Button = styled.button`
  padding-block: 0.75em;
  padding-inline: 0.75em;
  border-radius: ${tokens.borderRadiusSmall};
  transition-property: color, background-color;
  transition-timing-function: ${tokens.curveDecelerateMin};
  transition-duration: ${tokens.durationNormal};

  &:hover,
  &:focus-visible {
    cursor: pointer;
    color: ${tokens.colorNeutralForegroundInverted3Hover};
    background-color: ${tokens.colorSecondaryBackground1Hover};
  }

  &:active,
  &[aria-expanded="true"] {
    color: ${tokens.colorNeutralForegroundInverted3Pressed};
    background-color: ${tokens.colorSecondaryBackground1Pressed};
  }
`;

export const Logo = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    min-width: 50px;
    height: 50px;
    border-radius: ${tokens.borderRadiusMedium};
    background-color: ${tokens.colorNeutralBackground1};
  `,
  Image: styled.img`
    width: 45px;
    min-width: 45px;
    height: auto;
    object-fit: contain;
  `,
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.25em;
`;

export const Role = styled.div`
  max-width: 8em;
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightRegular};
  color: ${tokens.colorNeutralForeground4};
  line-height: 1.2;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Title = styled.h1`
  max-width: 7em;
  font-size: ${tokens.fontSizeBase500};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForegroundInvertedAlpha1};
  line-height: 1.2;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
