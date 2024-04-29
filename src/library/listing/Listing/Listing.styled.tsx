/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const Wrapper = styled.div`
  height: 100%;
  border-width: 0 1px 1px;
  border-style: solid;
  border-color: ${tokens.colorNeutralStroke3};
  border-radius: 0 0 ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium};
  background-color: ${tokens.colorNeutralBackground1};
  overflow: hidden;
`;
