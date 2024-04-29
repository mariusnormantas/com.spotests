/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Table = styled.div`
  [data-grid="true"] {
    grid-template-columns:
      minmax(4em, 1.25fr) minmax(4em, 2fr) minmax(4em, 1fr) minmax(4em, 1fr)
      12em;
  }
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const Initials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.75em;
  min-width: 2.75em;
  max-width: 2.75em;
  height: 2.75em;
  min-height: 2.75em;
  max-height: 2.75em;
  border: 1px solid ${tokens.colorNeutralStroke4};
  border-radius: ${tokens.borderRadiusCircular};
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightMedium};
  letter-spacing: 0.04em;
  color: ${tokens.colorNeutralForeground2};
  background-color: ${tokens.colorNeutralBackground4};
`;
