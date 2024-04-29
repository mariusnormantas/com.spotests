/** @format */

import { TextColor, TextPreset, TextRender, TextWeight } from "../types";

// Text base component's props.
export type TextBaseProps = React.HTMLAttributes<HTMLElement> & {
  render?: TextRender;
  preset: TextPreset;
  color?: TextColor;
  weight?: TextWeight;
  asLink?: boolean;
};
