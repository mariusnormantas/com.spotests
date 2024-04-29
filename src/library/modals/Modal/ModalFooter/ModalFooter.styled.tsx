/** @format */

import { tokens } from "@/library/core";
import styled from "styled-components";

export const Component = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75em;
  width: 100%;
  padding-block: 1.25em;
  padding-inline: 2em;
  background-color: ${tokens.colorNeutralBackground3};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75em;
`;
