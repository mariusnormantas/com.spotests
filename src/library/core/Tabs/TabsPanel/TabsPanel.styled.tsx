/** @format */

import styled from "styled-components";
import { tokens } from "../../Theme";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-block: 2em 0;
  border-radius: ${tokens.borderRadiusLarge};

  &[aria-current="true"] {
    display: flex;
  }

  &:not([aria-current="true"]) {
    display: none;
  }
`;
