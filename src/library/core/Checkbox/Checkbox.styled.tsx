/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "../Theme";
import { CheckboxSize, CheckboxVariant } from "./types";

const sizeStyles: Record<CheckboxSize, CSSObject> = {
  small: {
    fontSize: tokens.fontSizeBase200,
  },
  medium: {
    fontSize: tokens.fontSizeBase300,
  },
  large: {
    fontSize: tokens.fontSizeBase400,
  },
};

const variantStyles: Record<
  CheckboxVariant,
  Record<
    "checked" | "unchecked",
    Record<"static" | "hover" | "focus" | "disabled", CSSObject>
  >
> = {
  default: {
    unchecked: {
      static: {
        borderColor: tokens.colorNeutralStroke4,
        backgroundColor: tokens.colorNeutralBackground1,
      },
      hover: {
        borderColor: tokens.colorPaletteBlueStroke1,
      },
      focus: {
        borderColor: tokens.colorPaletteBlueBackground1,
      },
      disabled: {
        borderColor: tokens.colorNeutralStroke4,
        backgroundColor: tokens.colorNeutralBackground4,
      },
    },
    checked: {
      static: {
        borderColor: tokens.colorPaletteBlueBackground1,
        backgroundColor: tokens.colorPaletteBlueBackground1,
      },
      hover: {
        borderColor: tokens.colorPaletteBlueStroke1Hover,
        backgroundColor: tokens.colorPaletteBlueBackground1Hover,
      },
      focus: {
        borderColor: tokens.colorPaletteBlueStroke1Pressed,
      },
      disabled: {
        opacity: 0.5,
      },
    },
  },
};

export const Component = styled.div<{
  $size: CheckboxSize;
  $hidden?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: fit-content;

  &[aria-disabled="true"] {
    pointer-events: none;
    color: ${tokens.colorNeutralForeground3};
  }

  // Size based styles.
  ${({ $size }) => css({ ...sizeStyles[$size] })}

  // Hidden based styles.
  ${({ $hidden }) =>
    $hidden &&
    css`
      visibility: hidden;
    `}
`;

export const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  [data-component="icon"] {
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    color: ${tokens.colorNeutralForegroundInvertedAlpha2};

    svg {
      stroke-width: 1.5px;
    }
  }
`;

export const Checker = styled.input<{
  $variant: CheckboxVariant;
  $size: CheckboxSize;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75em;
  min-width: 1.75em;
  max-width: 1.75em;
  height: 1.75em;
  min-height: 1.75em;
  max-height: 1.75em;
  margin: unset;
  border-width: 1px;
  border-style: solid;
  border-radius: ${tokens.borderRadiusExtraSmall};
  transition-property: color, border-color, background-color, box-shadow,
    opacity;
  transition-timing-function: ${tokens.curveDecelerateMin};
  transition-duration: ${tokens.durationFast};

  // Variant based styles.
  ${({ $variant }) => css({ ...variantStyles[$variant].unchecked.static })}

  // Size based styles.
  ${({ $size }) => css({ ...sizeStyles[$size] })}

  &:not(:checked) {
    ${({ $variant }) => css({ ...variantStyles[$variant].unchecked.static })}

    &:disabled {
      ${({ $variant }) =>
        css({ ...variantStyles[$variant].unchecked.disabled })}
    }

    &:not(:disabled) {
      &:hover {
        cursor: pointer;
        ${({ $variant }) => css({ ...variantStyles[$variant].unchecked.hover })}
      }
      &:focus-visible {
        ${({ $variant }) => css({ ...variantStyles[$variant].unchecked.focus })}
      }
    }
  }
  &:checked {
    ${({ $variant }) => css({ ...variantStyles[$variant].checked.static })}

    &:disabled {
      ${({ $variant }) => css({ ...variantStyles[$variant].checked.disabled })}
    }

    &:not(:disabled) {
      &:hover {
        cursor: pointer;
        ${({ $variant }) => css({ ...variantStyles[$variant].checked.hover })}
      }
      &:focus-visible {
        ${({ $variant }) => css({ ...variantStyles[$variant].checked.focus })}
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
`;

export const Label = styled.label`
  cursor: default;
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutralForeground2};
  line-height: 1.2;
  transition-property: color;
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
