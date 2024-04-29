/** @format */

import { LinkProps, Path } from "react-router-dom";

// Logo component's variant.
export type LogoVariant = "dark" | "light";

// Logo component's size.
export type LogoSize = "small" | "medium";

// Logo component's props.
export interface LogoProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, "title">,
    Omit<LinkProps, "to" | "title"> {
  to?: string | Partial<Path>;
  variant?: LogoVariant;
  size?: LogoSize;
  title?: boolean | string;
  description?: boolean | string;
}
