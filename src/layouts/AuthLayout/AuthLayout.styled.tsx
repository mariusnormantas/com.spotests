/** @format */

import styled, { createGlobalStyle } from "styled-components";
import { tokens } from "@/library/core";

export const GlobalStyles = createGlobalStyle`
  html {
    color: ${tokens.colorNeutralForeground2};
    background-color: ${tokens.colorNeutralBackground4};
  }
`;

export const Component = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: ${tokens.breakpointTinyMobile};
  min-height: 100dvh;
  padding-block: 1em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2em;
  width: fit-content;
  height: fit-content;
  padding-inline: 1em;

  @media only screen and (max-width: ${tokens.breakpointMobile}) {
    height: 100%;
  }
`;

export const Footer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-block: auto 0;

  @media only screen and (max-width: ${tokens.breakpointMobile}) {
    padding-block: 1em 0;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 1px;
      border-radius: ${tokens.borderRadiusCircular};
      background-color: ${tokens.colorNeutralStroke4};
    }
  }
`;

export const Card = styled.main`
  display: grid;
  gap: 3em;
  width: 100%;
  max-width: 36em;
  height: fit-content;
  padding-block: 3.25em;
  padding-inline: 3em;
  border-radius: ${tokens.borderRadiusLarge};
  background-color: ${tokens.colorNeutralBackground1};
  box-shadow: ${tokens.shadow4};

  @media only screen and (max-width: ${tokens.breakpointMobile}) {
    display: flex;
    flex-direction: column;
    gap: 2.5em;
    padding-block: 2.5em;
    padding-inline: 2em;

    [data-component="logo"] {
      h1 {
        font-size: ${tokens.fontSizeBase600};
      }
    }
  }
`;
