/** @format */

import styled from "styled-components";
import { tokens } from "../../Theme";

export const Floating = styled.div`
  position: relative;
  z-index: 300;
  height: max-content;
  border-radius: ${tokens.borderRadiusMedium};
  background-color: ${tokens.colorNeutralBackground1};
  box-shadow: ${tokens.shadow16};
  /* overflow-x: hidden; */
  /* overflow-y: scroll; */
`;
