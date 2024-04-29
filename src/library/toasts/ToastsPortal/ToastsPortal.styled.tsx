/** @format */

import styled from "styled-components";

export const Component = styled.div`
  position: fixed;
  z-index: 301;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: fit-content;
  height: fit-content;
  max-height: 100vh;
  padding-block: 1.5em;
  overflow-y: scroll;
  overflow-x: hidden;
`;
