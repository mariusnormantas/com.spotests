/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 2em;
  width: 100%;

  @media only screen and (max-width: ${tokens.breakpointDesktop}) {
    flex-direction: column;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5em;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: ${tokens.breakpointDesktop}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  width: 100%;
  height: 25vw;
  /* border-radius: ${tokens.borderRadiusLarge};
  background-color: ${tokens.colorNeutralBackground2}; */

  @media only screen and (max-width: ${tokens.breakpointDesktop}) {
    height: 425px;
  }
`;

export const Label = styled.span`
  position: relative;
  font-size: ${tokens.fontSizeBase300};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForeground1};

  &::after {
    content: "";
    position: absolute;
    animation: ellipsis-animation 1500ms infinite linear forwards;
  }
`;

export const Indicator = styled.svg`
  width: 3.5em;
  min-width: 3.5em;
  max-width: 3.5em;
  height: 3.5em;
  min-height: 3.5em;
  max-height: 3.5em;
  color: ${tokens.colorBrandBackground1};
  animation: rotate-animation 1500ms linear infinite;
`;

// export const Template = styled.div`
//   min-height: 20em;
//   padding-block: 1em;
//   padding-inline: 1.5em;
//   border: 1px solid ${tokens.colorNeutralStroke1};
//   border-radius: ${tokens.borderRadiusMedium};
//   background-color: ${tokens.colorNeutralBackground1};
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath opacity='0.75' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
//   background-position: center;
// `;
