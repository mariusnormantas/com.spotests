/** @format */

import { TextBaseProps } from "./TextBase";
import { TextBody1Props } from "./TextBody1";
import { TextBody2Props } from "./TextBody2";
import { TextCaption1Props } from "./TextCaption1";
import { TextCaption2Props } from "./TextCaption2";
import { TextDisplayProps } from "./TextDisplay";
import { TextSubtitle1Props } from "./TextSubtitle1";
import { TextTitle1Props } from "./TextTitle1";
import { TextTitle2Props } from "./TextTitle2";
import { TextTitle3Props } from "./TextTitle3";

// Text's available tag names.
export type TextRender =
  | "div"
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

// Text's presets.
export type TextPreset =
  | "body1"
  | "body1Strong"
  | "body1Stronger"
  //
  | "body2"
  | "body2Strong"
  | "body2Stronger"
  //
  | "subtitle1"
  | "subtitle1Strong"
  | "subtitle1Stronger"
  //
  | "caption1"
  | "caption1Strong"
  | "caption1Stronger"
  //
  | "caption2"
  | "caption2Strong"
  | "caption2Stronger"
  //
  | "title1"
  | "title2"
  | "title3"
  //
  | "largeTitle"
  | "display";

// Text component's weights.
export type TextWeight = "strong" | "stronger" | "bold";

// Text component's colors.
export type TextColor = "title" | "body" | "description" | "primary" | "link";

// Text component's props.
export type TextProps = {
  children?: React.ReactNode;
};

// Text component, including relative components.
export type TextComponent = React.FC<TextProps> & {
  Base: React.ForwardRefExoticComponent<TextBaseProps>;
  Caption1: React.ForwardRefExoticComponent<TextCaption1Props>;
  Caption2: React.ForwardRefExoticComponent<TextCaption2Props>;
  Body1: React.ForwardRefExoticComponent<TextBody1Props>;
  Body2: React.ForwardRefExoticComponent<TextBody2Props>;
  Subtitle1: React.ForwardRefExoticComponent<TextSubtitle1Props>;
  Title1: React.ForwardRefExoticComponent<TextTitle1Props>;
  Title2: React.ForwardRefExoticComponent<TextTitle2Props>;
  Title3: React.ForwardRefExoticComponent<TextTitle3Props>;
  Display: React.ForwardRefExoticComponent<TextDisplayProps>;
};
