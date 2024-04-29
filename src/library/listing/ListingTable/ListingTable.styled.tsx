/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

export const Wrapper = styled.div`
  border-radius: ${tokens.borderRadiusLarge};
  box-shadow: ${tokens.shadow8Dimmed};
  overflow: hidden;
`;

export const Container = styled.div`
  border-width: 0 1px 1px;
  border-style: solid;
  border-color: ${tokens.colorNeutralStroke3};
  border-radius: 0 0 ${tokens.borderRadiusLarge} ${tokens.borderRadiusLarge};
  overflow: hidden;
`;
