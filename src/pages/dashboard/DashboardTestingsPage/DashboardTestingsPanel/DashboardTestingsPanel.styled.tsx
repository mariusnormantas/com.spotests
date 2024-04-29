/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const FrameGrid = styled.div`
  display: flex;
  gap: 2em;
  width: 100%;
  height: fit-content;

  @media only screen and (max-width: ${tokens.breakpointDesktop}) {
    flex-direction: column;
  }
`;

export const FrameListing = styled.div`
  width: 30em;
  min-width: 30em;
  max-width: 30em;

  @media only screen and (max-width: ${tokens.breakpointDesktop}) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`;

export const FrameView = styled.div`
  gap: unset;
  width: calc(100% - 32em);
  min-width: calc(100% - 32em);
  max-width: calc(100% - 32em);
  padding-inline: 0;
  padding-block: 0;

  @media only screen and (max-width: ${tokens.breakpointDesktop}) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`;

export const FrameViewBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-block: 1.5em;
  padding-inline: 1.5em;
`;

export const FrameViewToolbar = styled.div`
  padding-block: 0.5em;
  padding-inline: 0.5em;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: ${tokens.colorNeutralStroke3};
`;

export const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  height: 3.5em;
  min-height: 3.5em;
  max-height: 3.5em;
  padding-inline: 0.75em;
  border-radius: ${tokens.borderRadiusSmall};
  background-color: ${tokens.colorNeutralBackground4};
`;

export const EmptyView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  [data-component="icon"] {
    color: ${tokens.colorNeutralForeground4};
    opacity: 0.25;
  }
`;

export const LoadingView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${tokens.colorNeutralStroke3};
  border-radius: ${tokens.borderRadiusSmall};
  background-color: ${tokens.colorNeutralBackground1};
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

export const RadarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 100%;
  height: 100%;
  border: 1px solid ${tokens.colorNeutralStroke3};
  border-radius: ${tokens.borderRadiusSmall};
  background-color: ${tokens.colorNeutralBackground1};

  @media only screen and (max-width: ${tokens.breakpointDesktop}) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
  }
`;
