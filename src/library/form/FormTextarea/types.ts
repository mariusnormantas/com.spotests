/** @format */

import { TextareaProps } from "@/library/core";

// Form text area component's props.
export interface FormTextareaProps
  extends Omit<TextareaProps, "name" | "value"> {
  name: string;
}
