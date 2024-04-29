/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "../Theme";
import { InputShape, InputSize, InputVariant } from "./types";

const variantStyles: Record<
  InputVariant,
  Record<"valid" | "invalid", Record<"static" | "hover" | "focus", CSSObject>>
> = {
  default: {
    valid: {
      static: {
        "borderColor": tokens.colorNeutralStroke3,
        "backgroundColor": tokens.colorNeutralBackground1,
        "input::placeholder": {
          fontSize: tokens.fontSizeBase200,
          fontWeight: tokens.fontWeightRegular,
        },
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
        "borderColor": tokens.colorPaletteRedBackground1,
        "backgroundColor": tokens.colorNeutralBackground1,
        "input::placeholder": {
          fontSize: tokens.fontSizeBase200,
          fontWeight: tokens.fontWeightRegular,
        },
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
  filled: {
    valid: {
      static: {
        "borderColor": tokens.colorNeutralStroke2,
        "backgroundColor": tokens.colorNeutralBackground3,
        "input::placeholder": {
          fontSize: tokens.fontSizeBase200,
          fontWeight: tokens.fontWeightMedium,
        },
      },
      hover: {
        borderColor: tokens.colorNeutralStroke2Hover,
        backgroundColor: tokens.colorNeutralBackground3Hover,
      },
      focus: {
        borderColor: tokens.colorPaletteBlueBackground1,
        backgroundColor: tokens.colorNeutralBackground3,
        boxShadow: `inset 0 0 0 1px ${tokens.colorPaletteBlueBackground1}`,
      },
    },
    invalid: {
      static: {
        "borderColor": tokens.colorPaletteRedBackground1,
        "backgroundColor": tokens.colorNeutralBackground3,
        "input::placeholder": {
          fontSize: tokens.fontSizeBase200,
          fontWeight: tokens.fontWeightMedium,
        },
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
  outline: {
    valid: {
      static: {
        "borderColor": tokens.colorNeutralStroke3,
        "backgroundColor": tokens.colorNeutralBackground1,
        "boxShadow": tokens.shadow2Dimmed,
        "input::placeholder": {
          fontSize: tokens.fontSizeBase200,
          fontWeight: tokens.fontWeightMedium,
        },
      },
      hover: {
        borderColor: tokens.colorBrandStroke3Hover,
      },
      focus: {
        borderColor: tokens.colorBrandStroke1,
        boxShadow: tokens.shadow4Dimmed,
      },
    },
    invalid: {
      static: {
        "borderColor": tokens.colorPaletteRedBackground1,
        "backgroundColor": tokens.colorNeutralBackground3,
        "boxShadow": tokens.shadow2Dimmed,
        "input::placeholder": {
          fontSize: tokens.fontSizeBase200,
          fontWeight: tokens.fontWeightMedium,
        },
      },
      hover: {
        borderColor: tokens.colorPaletteRedBackground1,
      },
      focus: {
        borderColor: tokens.colorPaletteRedBackground1,
        boxShadow: tokens.shadow4Dimmed,
      },
    },
  },
};

const sizeStyles: Record<InputSize, CSSObject> = {
  small: {
    height: "2.5em",
    minHeight: "2.5em",
    maxHeight: "2.5em",
  },
  medium: {
    height: "3.25em",
    minHeight: "3.25em",
    maxHeight: "3.25em",
  },
  large: {
    height: "3.75em",
    minHeight: "3.75em",
    maxHeight: "3.75em",
  },
};

const labelledSizeStyles: Record<InputSize, CSSObject> = {
  small: {
    height: "3.25em",
    minHeight: "3.25em",
    maxHeight: "3.25em",
    label: {
      top: "0.4em",
    },
    input: {
      paddingBlock: "1.25em 0",
    },
  },
  medium: {
    height: "3.75em",
    minHeight: "3.75em",
    maxHeight: "3.75em",
    label: {
      top: "0.6em",
    },
    input: {
      paddingBlock: "1.35em 0",
    },
  },
  large: {
    height: "4.25em",
    minHeight: "4.25em",
    maxHeight: "4.25em",
    label: {
      top: "0.6em",
    },
    input: {
      paddingBlock: "1.35em 0",
    },
  },
};

const shapeStyles: Record<InputShape, CSSObject> = {
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
  $variant: InputVariant;
  $size: InputSize;
  $shape: InputShape;
  $invalid: boolean;
}>`
  position: relative;
  width: 100%;
  min-width: 8em;
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

  // Size base styles (font $size prop).
  ${({ $size }) => css(sizeStyles[$size])}

  input {
    width: 100%;
    height: 100%;
    font-size: ${tokens.fontSizeBase300};
    font-weight: ${tokens.fontWeightSemimedium};
    color: ${tokens.colorNeutralForeground1};
    -webkit-text-fill-color: ${tokens.colorNeutralForeground1};
    line-height: 1.2;
    appearance: input;
    outline-offset: -2px;

    // Search decorations, safari's password decoration.
    &::-webkit-contacts-auto-fill-button,
    &::-webkit-credentials-auto-fill-button, // hides safari's decoration
    &::-webkit-search-cancel-button,
    &::-webkit-search-decoration {
      visibility: hidden;
      appearance: none;
      display: none !important;
      pointer-events: none;
      position: absolute;
      right: 0;
    }
  }

  input::placeholder {
    user-select: none;
    color: ${tokens.colorNeutralForeground3};
    -webkit-text-fill-color: ${tokens.colorNeutralForeground3};
    line-height: 1.2;
    opacity: 1;
  }

  // Styles, when there is inner label.
  &[aria-labelledby] {
    ${({ $size }) => css(labelledSizeStyles[$size])}
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

    // Hides input's placeholder when focused.
    input:focus-visible {
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

    input {
      -webkit-text-fill-color: ${tokens.colorNeutralForeground3};
    }

    input::placeholder {
      color: ${tokens.colorNeutralForeground3};
      -webkit-text-fill-color: ${tokens.colorNeutralForeground3};
    }

    input:-webkit-autofill {
      -webkit-text-fill-color: ${tokens.colorNeutralForeground3};
      opacity: 1;
    }

    [data-component="icon"] {
      color: ${tokens.colorNeutralForeground3};
      opacity: 0.5;
    }

    [data-section] {
      opacity: 0.5;
    }
  }

  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  width: 100%;
  height: 100%;

  [data-component="icon"] {
    width: 1.25em;
    min-width: 1.25em;
    height: 1.25em;
    min-height: 1.25em;
    color: ${tokens.colorNeutralForeground1};

    svg {
      width: 1.25em;
      min-width: 1.25em;
      height: 1.25em;
      min-height: 1.25em;
    }
  }
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
  position: absolute;
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

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  height: 100%;
  font-size: ${tokens.fontSizeBase200};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForeground3};
  white-space: nowrap;

  [data-component="icon"] {
    transition-property: color;
    transition-timing-function: ${tokens.curveDecelerateMin};
    transition-duration: ${tokens.durationNormal};

    &:hover {
      cursor: pointer;
      color: ${tokens.colorPaletteBlueForeground1Hover};
    }
  }
`;
