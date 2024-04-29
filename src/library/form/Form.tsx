/** @format */

import { FormInit } from "./FormInit";
import { FormField } from "./FormField";
import { FormInput } from "./FormInput";
import { FormNameInput } from "./FormNameInput";
import { FormPasswordInput } from "./FormPasswordInput";
import { FormNumberInput } from "./FormNumberInput";
import { FormTextarea } from "./FormTextarea";
import { FormCheckbox } from "./FormCheckbox";
import { FormComponent } from "./types";

export const Form: FormComponent = ({ children }) => children;

Form.Init = FormInit;
Form.Field = FormField;
Form.Input = FormInput;
Form.NameInput = FormNameInput;
Form.PasswordInput = FormPasswordInput;
Form.NumberInput = FormNumberInput;
Form.Textarea = FormTextarea;
Form.Checkbox = FormCheckbox;
Form.displayName = "@/library/form/Form";
