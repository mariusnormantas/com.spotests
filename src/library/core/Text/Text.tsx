/** @format */

import { TextBase } from "./TextBase";
import { TextBody1 } from "./TextBody1";
import { TextBody2 } from "./TextBody2";
import { TextCaption1 } from "./TextCaption1";
import { TextCaption2 } from "./TextCaption2";
import { TextDisplay } from "./TextDisplay";
import { TextSubtitle1 } from "./TextSubtitle1";
import { TextTitle1 } from "./TextTitle1";
import { TextTitle2 } from "./TextTitle2";
import { TextTitle3 } from "./TextTitle3";
import { TextComponent } from "./types";

export const Text: TextComponent = ({ children }) => children;
Text.Base = TextBase;
Text.Caption1 = TextCaption1;
Text.Caption2 = TextCaption2;
Text.Body1 = TextBody1;
Text.Body2 = TextBody2;
Text.Subtitle1 = TextSubtitle1;
Text.Title1 = TextTitle1;
Text.Title2 = TextTitle2;
Text.Title3 = TextTitle3;
Text.Display = TextDisplay;
Text.displayName = "@/library/core/Text";
