/** @format */

import styled, { createGlobalStyle } from "styled-components";

export const GlobalModifications = createGlobalStyle`
  html {
    overflow: hidden;
  }
  #root {
    pointer-events: none;
    user-select: none;
  }
`;

export const Component = styled.div`
  position: fixed;
  z-index: 200;
  inset: 0;
`;

export const Backdrop = styled.div`
  pointer-events: all;
  position: fixed;
  z-index: 200;
  inset: 0;
  width: 100%;
  min-width: 100dvw;
  height: 100%;
  min-height: 100dvh;
  background-color: hsl(262, 15%, 25%);
`;

export const Container = styled.div`
  position: fixed;
  z-index: 201;
  inset: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;
