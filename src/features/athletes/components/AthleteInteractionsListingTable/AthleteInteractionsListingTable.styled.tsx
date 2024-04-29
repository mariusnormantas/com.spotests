/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Table = styled.div`
  [data-grid="true"] {
    grid-template-columns: minmax(4em, 1fr) minmax(4em, 1fr) minmax(4em, 1fr) 12em;
  }
`;

export const Interaction = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: fit-content;
  padding-block: 0.25em;
  padding-inline: 0.25em 0.75em;
  border-radius: ${tokens.borderRadiusCircular};
  color: ${tokens.colorNeutralForeground2};
  line-height: 1.2;
`;
