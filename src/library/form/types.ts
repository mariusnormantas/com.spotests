/** @format */

import * as Yup from "yup";
import { UseMutationResult } from "react-query";
import { FormInitProps } from "./FormInit";
import { FormFieldProps } from "./FormField";
import { FormInputProps } from "./FormInput";
import { FormPasswordInputProps } from "./FormPasswordInput";
import { FormNumberInputProps } from "./FormNumberInput";
import { FormTextareaProps } from "./FormTextarea";
import { FormCheckboxProps } from "./FormCheckbox";

// Type of form value's key.
export type FormKey = string;

// Type of form value.
export type FormValue =
  | string
  | boolean
  | number
  | object
  | Array<string | boolean | number | object>;

// Type of form error.
export type FormError = string;

// Type of form touched state.
export type FormTouched = boolean;

// Type of form values collection.
export type FormValues = {
  [key: FormKey]: FormValue;
};

// Type of form errors collection.
export type FormErrors = {
  [key: FormKey]: FormError;
};

// Type of form touched collection.
export type FormTouches = string[];

// Type of arguments, which is passed in some of the callbacks.
export type UseFormCallbackArgs = {
  store: UseFormStoreReturn;
};

// Type of useForm hook props.
export type UseFormProps = {
  values: FormValues;
  validation?: Yup.ObjectSchema<object, Yup.AnyObject, object, "">;
  initialValidation?: boolean;
  onValidation?: (args: UseFormCallbackArgs) => void;
  onSubmit?: (args: UseFormCallbackArgs) => void;
  mutationData?: (values: FormValues) => object;
  useMutation?: UseMutationResult<any, any, any>;
};

// Type of useForm hook return.
export type UseFormReturn = {
  id: string;
  store: UseFormStoreReturn;
  isSubmitting: boolean;
  isValid: boolean;
  validate: () => void;
  handleChange: (key: FormKey, value?: FormValue) => void;
  handleBlur: (key: FormKey) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<null | undefined>;
};

// Type of useFormStore hook props.
export type UseFormStoreProps = {
  initialValues: FormValues;
};

// Type of useFormStore hook return.
export type UseFormStoreReturn = {
  subscribe: (callback: () => void) => () => boolean;
  setValue: (key: FormKey, value: FormValue) => void;
  getValue: (key: FormKey) => FormValue;
  getValues: () => FormValues;
  clearValues: (keys?: string[]) => void;
  setError: (key: FormKey, value: FormError) => void;
  getError: (key: FormKey) => FormError;
  getErrors: () => FormErrors;
  clearErrors: () => void;
  setTouched: (key: FormKey) => void;
  touchAll: () => void;
  isTouched: (key: FormKey) => boolean;
  clearTouched: () => void;
  clear: (keys?: string[]) => void;
};

// Type of useFormKey hook props.
export type UseFormKeyProps = {
  name: FormKey;
};

// Type of useFormKey hook return.
export type UseFormKeyReturn = {
  value: FormValue;
  error: FormError;
  isTouched: FormTouched;
};

// Form component's props.
export type FormProps = {
  children: React.ReactNode;
};

// Form component.
export type FormComponent = React.FC<FormProps> & {
  Init: React.ForwardRefExoticComponent<FormInitProps>;
  Field: React.FC<FormFieldProps>;
  Input: React.ForwardRefExoticComponent<FormInputProps>;
  NameInput: React.ForwardRefExoticComponent<FormInputProps>;
  PasswordInput: React.ForwardRefExoticComponent<FormPasswordInputProps>;
  NumberInput: React.ForwardRefExoticComponent<FormNumberInputProps>;
  Textarea: React.ForwardRefExoticComponent<FormTextareaProps>;
  Checkbox: React.ForwardRefExoticComponent<FormCheckboxProps>;
};
