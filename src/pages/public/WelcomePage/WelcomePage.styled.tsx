/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  width: 100%;
  min-width: ${tokens.breakpointTinyMobile};
  min-height: 100dvh;
  margin-inline: auto;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1em;
`;
