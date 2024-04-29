/** @format */

import styled from "styled-components";

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
