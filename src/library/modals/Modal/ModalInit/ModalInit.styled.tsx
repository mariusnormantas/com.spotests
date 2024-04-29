/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "@/library/core";
import { ModalSize } from "./types";

const styles: Record<ModalSize, CSSObject> = {
  "small": {
    width: "40em",
  },
  "medium": {
    width: "50em",
  },
  "large": {
    width: "60em",
  },
  "extra-large": {
    width: "70em",
  },
};

export const Component = styled.div<{
  $size: ModalSize;
}>`
  position: relative;
  z-index: 99;
  width: 100%;
  max-width: calc(100vw - 1.5em);
  height: 100%;
  max-height: calc(100vh - 1.5em);
  border-radius: ${tokens.borderRadiusExtraLarge};
  background-color: ${tokens.colorNeutralBackground1};
  box-shadow: ${tokens.shadow64Brand};
  overflow: hidden;

  // Size based styling.
  ${({ $size }) => css({ ...styles[$size] })}

  // Tabs is used outside body, to prevent from overflow while scrolling.
  > [data-component="tabs"] {
    [data-component="tabs-item"] {
      font-size: ${tokens.fontSizeBase400};
      font-weight: ${tokens.fontWeightSemibold};
    }
    [data-component="tabs-list"] {
      padding-block: 1.5em 0;
      [role="tablist"] {
        padding-inline: 2em;
      }
    }
    [data-component="modal-body"] {
      padding-block: 0;
    }
  }

  // Globally tabs styles in modal.
  [data-component="tabs"] {
    [data-component="tabs-panel"] {
      padding-block: 2em;
    }
  }
`;
