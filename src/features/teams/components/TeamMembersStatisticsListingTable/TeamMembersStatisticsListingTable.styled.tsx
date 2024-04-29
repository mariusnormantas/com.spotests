/** @format */

import styled from "styled-components";

export const Table = styled.div`
  [data-grid="true"] {
    grid-template-columns: minmax(4em, 1.5fr) minmax(4em, 2fr) minmax(4em, 1fr);
  }
`;

export const Manage = styled.button`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.5em;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
