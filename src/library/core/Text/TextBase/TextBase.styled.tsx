/** @format */

import styled, { CSSObject, css } from "styled-components";
import { tokens } from "../../Theme";
import { TextColor, TextPreset, TextWeight } from "../types";

const colorStyles: Record<TextColor, CSSObject> = {
  title: {
    color: tokens.colorNeutralForeground1,
  },
  body: {
    color: tokens.colorNeutralForeground2,
  },
  description: {
    color: tokens.colorNeutralForeground3,
  },
  primary: {
    color: tokens.colorBrandForeground1,
  },
  link: {
    color: tokens.colorPaletteBlueForeground1,
  },
};

const linkStyles: CSSObject = {
  "width": "fit-content",
  "height": "fit-content",
  "transitionProperty": "color",
  "transitionTimingFunction": tokens.curveDecelerateMin,
  "transitionDuration": tokens.durationNormal,
  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
  "&:focus-visible": {
    textDecoration: "underline",
    textDecorationStyle: "dashed",
  },
};

const linkColorStyles: Record<TextColor, CSSObject> = {
  title: {
    "color": tokens.colorNeutralForeground1,
    "&:hover, &[aria-expanded='true']": {
      color: tokens.colorLinkForeground1Hover,
    },
    "&:active": {
      color: tokens.colorLinkForeground1Pressed,
    },
  },
  body: {
    "color": tokens.colorNeutralForeground2,
    "&:hover, &[aria-expanded='true']": {
      color: tokens.colorLinkForeground1Hover,
    },
    "&:active": {
      color: tokens.colorLinkForeground1Pressed,
    },
  },
  description: {
    "color": tokens.colorNeutralForeground3,
    "&:hover, &[aria-expanded='true']": {
      color: tokens.colorLinkForeground1Hover,
    },
    "&:active": {
      color: tokens.colorLinkForeground1Pressed,
    },
  },
  primary: {
    "color": tokens.colorBrandForeground1,
    "&:hover, &[aria-expanded='true']": {
      color: tokens.colorBrandForeground1Hover,
    },
    "&:active": {
      color: tokens.colorBrandForeground1Pressed,
    },
  },
  link: {
    "color": tokens.colorLinkForeground1,
    "&:hover, &[aria-expanded='true']": {
      color: tokens.colorLinkForeground1Hover,
    },
    "&:active": {
      color: tokens.colorLinkForeground1Pressed,
    },
  },
};

const tokenizePreset = (preset: TextPreset, weight?: TextWeight) => {
  // Combines preset with defined weight.
  const combinedPreset = `${preset}${weight ? weight.capitalize() : ""}`;
  switch (combinedPreset) {
    case "caption1":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase100,
        fontWeight: tokens.fontWeightRegular,
        lineHeight: tokens.lineHeightBase100,
      });
    case "caption1Strong":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase100,
        fontWeight: tokens.fontWeightMedium,
        lineHeight: tokens.lineHeightBase100,
      });
    case "caption1Stronger":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase100,
        fontWeight: tokens.fontWeightSemibold,
        lineHeight: tokens.lineHeightBase100,
      });
    case "caption1Bold":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase100,
        fontWeight: tokens.fontWeightBold,
        lineHeight: tokens.lineHeightBase100,
      });
    case "caption2":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase200,
        fontWeight: tokens.fontWeightRegular,
        lineHeight: tokens.lineHeightBase200,
      });
    case "caption2Strong":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase200,
        fontWeight: tokens.fontWeightMedium,
        lineHeight: tokens.lineHeightBase200,
      });
    case "caption2Stronger":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase200,
        fontWeight: tokens.fontWeightSemibold,
        lineHeight: tokens.lineHeightBase200,
      });
    case "caption2Bold":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase200,
        fontWeight: tokens.fontWeightBold,
        lineHeight: tokens.lineHeightBase200,
      });
    case "body1":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase300,
        fontWeight: tokens.fontWeightRegular,
        lineHeight: tokens.lineHeightBase300,
      });
    case "body1Strong":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase300,
        fontWeight: tokens.fontWeightMedium,
        lineHeight: tokens.lineHeightBase300,
      });
    case "body1Stronger":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase300,
        fontWeight: tokens.fontWeightSemibold,
        lineHeight: tokens.lineHeightBase300,
      });
    case "body1Bold":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase300,
        fontWeight: tokens.fontWeightBold,
        lineHeight: tokens.lineHeightBase300,
      });
    case "body2":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase400,
        fontWeight: tokens.fontWeightRegular,
        lineHeight: tokens.lineHeightBase400,
      });
    case "body2Strong":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase400,
        fontWeight: tokens.fontWeightMedium,
        lineHeight: tokens.lineHeightBase400,
      });
    case "body2Stronger":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase400,
        fontWeight: tokens.fontWeightSemibold,
        lineHeight: tokens.lineHeightBase400,
      });
    case "body2Bold":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase400,
        fontWeight: tokens.fontWeightBold,
        lineHeight: tokens.lineHeightBase400,
      });
    case "subtitle1":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase500,
        fontWeight: tokens.fontWeightRegular,
        lineHeight: tokens.lineHeightBase500,
      });
    case "subtitle1Strong":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase500,
        fontWeight: tokens.fontWeightMedium,
        lineHeight: tokens.lineHeightBase500,
      });
    case "subtitle1Stronger":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase500,
        fontWeight: tokens.fontWeightSemibold,
        lineHeight: tokens.lineHeightBase500,
      });
    case "subtitle1Bold":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase500,
        fontWeight: tokens.fontWeightBold,
        lineHeight: tokens.lineHeightBase500,
      });
    case "title1":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase600,
        fontWeight: tokens.fontWeightBold,
        lineHeight: tokens.lineHeightBase600,
      });
    case "title2":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeHero700,
        fontWeight: tokens.fontWeightBold,
        lineHeight: tokens.lineHeightHero700,
      });
    case "title3":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeHero800,
        fontWeight: tokens.fontWeightBold,
        lineHeight: tokens.lineHeightHero800,
      });
    case "display":
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeHero900,
        fontWeight: tokens.fontWeightBold,
        lineHeight: tokens.lineHeightHero900,
      });
    default:
      return css({
        fontFamily: tokens.fontFamilyBase,
        fontSize: tokens.fontSizeBase300,
        fontWeight: tokens.fontWeightRegular,
        lineHeight: tokens.lineHeightBase300,
      });
  }
};

export const Component = styled.div<{
  $preset: TextPreset;
  $color?: TextColor;
  $weight?: TextWeight;
  $asLink?: boolean;
}>`
  ${({ $preset, $weight }) => tokenizePreset($preset, $weight)}
  ${({ $color }) => $color && css(colorStyles[$color])}
  ${({ $asLink, $color }) =>
    $asLink && css({ ...linkStyles, ...linkColorStyles[$color ?? "link"] })}
`;
