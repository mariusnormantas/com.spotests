/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "../Theme";
import { TextareaShape, TextareaVariant } from "./types";

const variantStyles: Record<
  TextareaVariant,
  Record<"valid" | "invalid", Record<"static" | "hover" | "focus", CSSObject>>
> = {
  default: {
    valid: {
      static: {
        borderColor: tokens.colorNeutralStroke3,
        backgroundColor: tokens.colorNeutralBackground1,
      },
      hover: {
        borderColor: tokens.colorPaletteBlueBackground1,
      },
      focus: {
        borderColor: tokens.colorPaletteBlueBackground1,
        boxShadow: `inset 0 0 0 1px ${tokens.colorPaletteBlueBackground1}`,
      },
    },
    invalid: {
      static: {
        borderColor: tokens.colorPaletteRedBackground1,
        backgroundColor: tokens.colorNeutralBackground1,
      },
      hover: {
        borderColor: tokens.colorPaletteRedBackground1,
      },
      focus: {
        borderColor: tokens.colorPaletteRedBackground1,
        boxShadow: `inset 0 0 0 1px ${tokens.colorPaletteRedBackground1}`,
      },
    },
  },
};

const shapeStyles: Record<TextareaShape, CSSObject> = {
  rounded: {
    borderRadius: tokens.borderRadiusMedium,
  },
  square: {
    borderRadius: tokens.borderRadiusNone,
  },
  circular: {
    borderRadius: tokens.borderRadiusCircular,
  },
};

export const Component = styled.div<{
  $variant: TextareaVariant;
  $shape: TextareaShape;
  $invalid: boolean;
}>`
  position: relative;
  width: 100%;
  padding-inline: 1em;
  border-width: 1px;
  border-style: solid;
  overflow: hidden;
  transition-property: color, border-color, background-color, box-shadow,
    opacity;
  transition-timing-function: ${tokens.curveDecelerateMin};
  transition-duration: ${tokens.durationNormal};

  // Variant based styles.
  ${({ $variant, $invalid }) => {
    if (!$invalid) {
      return css(variantStyles[$variant].valid.static);
    }
    return css(variantStyles[$variant].invalid.static);
  }}

  // Shape based styles.
  ${({ $shape }) => css(shapeStyles[$shape])}

  textarea {
    width: 100%;
    margin-block: 0.9em 0.75em;
    font-size: ${tokens.fontSizeBase300};
    font-weight: ${tokens.fontWeightSemimedium};
    color: ${tokens.colorNeutralForeground1};
    -webkit-text-fill-color: ${tokens.colorNeutralForeground1};
    line-height: 1.5;
  }

  textarea::placeholder {
    user-select: none;
    font-size: ${tokens.fontSizeBase200};
    font-weight: ${tokens.fontWeightRegular};
    color: ${tokens.colorNeutralForeground3};
    -webkit-text-fill-color: ${tokens.colorNeutralForeground3};
    line-height: 1.5;
    opacity: 1;
  }

  // Styles, when there is inner label.
  &[aria-labelledby] {
    textarea {
      padding-block: 0.85em 0;
    }
  }

  &[aria-disabled="false"] {
    &:hover {
      ${({ $variant, $invalid }) => {
        if (!$invalid) {
          return css(variantStyles[$variant].valid.hover);
        }
        return css(variantStyles[$variant].invalid.hover);
      }}
    }

    &:focus-within {
      ${({ $variant, $invalid }) => {
        if (!$invalid) {
          return css(variantStyles[$variant].valid.focus);
        }
        return css(variantStyles[$variant].invalid.focus);
      }}
    }

    // Hides textarea's placeholder when focused.
    textarea:focus-visible {
      &::placeholder {
        visibility: hidden;
      }
    }
  }

  &[aria-disabled="true"] {
    user-select: none;
    pointer-events: none;
    color: ${tokens.colorNeutralForeground3};
    border-color: ${tokens.colorNeutralStroke4};
    background-color: ${tokens.colorNeutralBackground4};
    opacity: 0.5;

    textarea {
      -webkit-text-fill-color: ${tokens.colorNeutralForeground3};
    }

    textarea::placeholder {
      color: ${tokens.colorNeutralForeground3};
      -webkit-text-fill-color: ${tokens.colorNeutralForeground3};
    }

    textarea:-webkit-autofill {
      -webkit-text-fill-color: ${tokens.colorNeutralForeground3};
      opacity: 1;
    }
  }

  textarea::-ms-reveal,
  textarea::-ms-clear {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75em;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
  position: absolute;
  top: 0.6em;
  left: 0;
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForeground2};
  line-height: 1.2;
  transition-property: opacity;
  transition-timing-function: ${tokens.curveDecelerateMin};
  transition-duration: ${tokens.durationNormal};

  span {
    margin-inline: 0.25em 0;
    color: ${tokens.colorPaletteRedForeground1};
  }

  &[aria-disabled="true"] {
    color: ${tokens.colorNeutralForeground3};
  }
`;
