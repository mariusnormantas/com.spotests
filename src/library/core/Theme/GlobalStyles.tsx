/** @format */

import { createGlobalStyle } from "styled-components";
import { tokens } from "./tokens";

export const GlobalStyles = createGlobalStyle`
  :root {
    --dynamic-font-size-base:  clamp(9px, calc(0.5625rem + (10 - 9) * ((100vw - 1024px) / (1440 - 1024))), 10px);
    font-size: var(--dynamic-font-size-base);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    text-size-adjust: 100%;
    text-align: left; 
    text-indent: 0;
    letter-spacing: -0.02em;
  }

  html {
    color: ${tokens.colorNeutralForeground2};
    background-color: ${tokens.colorNeutralBackground1};
    transition-property: background-color;
    transition-timing-function: ${tokens.curveEasyEase};
    transition-duration: ${tokens.durationGentle};
    
    // For Firefox and Safari.
    overscroll-behavior-x: none;
    overscroll-behavior-y: none;

  }

  body {
    font-family: ${tokens.fontFamilyBase};
    font-size: ${tokens.fontSizeBase300};
    font-weight: ${tokens.fontWeightRegular};
    line-height: ${tokens.lineHeightBase300};
    
    // For Chrome and Edge.
    overscroll-behavior-x: none;
    overscroll-behavior-y: none;

    #root {
      position: relative;
      width: 100%;
      min-height: 100dvh;
    }
  }

  *:where(
    :not(html, iframe, canvas, img, svg, video):not(svg *, symbol *, input[type="checkbox"])) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a,
  button {
    cursor: revert;
  }

  ol,
  ul,
  menu {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  textarea {
    white-space: revert;
  }

  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  ::placeholder {
    color: unset;
  }

  :where([hidden]) {
    display: none;
  }

  :where([contenteditable]) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
  }

  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  input:-webkit-autofill {
    -webkit-background-clip: text;
  }

  @keyframes rotate-animation {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  @keyframes ellipsis-animation {
    0% {
      content: "";
    }
    10% {
      content: ".";
    }
    50% {
      content: "..";
    }
    75% {
      content: "...";
    }
    100% {
      content: "";
    }
  }

  @keyframes radar-tooltip {
    from {
      opacity: 0;
      transform: scale(0.75);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
