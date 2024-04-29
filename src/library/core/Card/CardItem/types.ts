/** @format */

import React from "react";

// Card item component's props.
export interface CardItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  spaceBetween?: boolean;
  sectionStart?: React.ReactNode;
  sectionEnd?: React.ReactNode;
  children?: React.ReactNode;
}
