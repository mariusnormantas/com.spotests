/** @format */

import styled from "styled-components";

export const Component = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-inline: 3em;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  animation: delay-pointer-events 1000ms linear forwards;

  @keyframes delay-pointer-events {
    from {
      pointer-events: none;
    }
    to {
      pointer-events: auto;
    }
  }
`;
