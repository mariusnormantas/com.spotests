/** @format */

import * as Yup from "yup";
import React from "react";
import { useFormStore } from "./use-form-store";
import { FormKey, FormValue, UseFormProps, UseFormReturn } from "./types";

export const useForm = ({
  values: initialValues = {},
  validation = Yup.object().shape({}),
  initialValidation = false,
  onValidation,
  onSubmit,
  mutationData,
  useMutation,
}: UseFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [isValid, setValid] = React.useState(false);
  const useId = React.useId();
  const id = `form${useId}id`;
  const store = useFormStore({ initialValues });

  // Callback, which transforms yup errors to more friendly form's object of errors.
  const updateValidationErrors = React.useCallback(
    (errors?: Yup.ValidationError) => {
      store.clearErrors();
      if (!errors) {
        setValid(true);
        return;
      }
      setValid(false);
      errors.inner.forEach((error: Yup.ValidationError) => {
        if (error.path) {
          store.setError(error.path, error.message);
        }
      });
    },
    [store]
  );

  // Callback, which validates form's values.
  const validate = React.useCallback(() => {
    validation
      .validate(store.getValues(), { abortEarly: false })
      .then(() => {
        updateValidationErrors();
        onValidation?.({ store });
      })
      .catch((errors) => {
        updateValidationErrors(errors);
        onValidation?.({ store });
      });
  }, [validation, store, updateValidationErrors, onValidation]);

  // Callback, which handles form's submit event.
  const handleSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validates form as retrieves form's values and errors.
      validate();
      store.touchAll();

      // Blurs active document's element, prevent multiple "Enter" pressing.
      if (document.activeElement) {
        (document.activeElement as HTMLElement).blur();
      }

      // Checks, if form is already submitting.
      if (isSubmitting || !isValid) return null;

      // Updating form's state, that it is submitting and starts submit's event.
      setSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      onSubmit?.({ store });

      // Processes form values to mutation data, if needed.
      const data = mutationData?.(store.getValues()) ?? store.getValues();

      // When form has attached mutation, we should mutate it.
      useMutation?.mutate(data, {
        onSettled: () => {
          setValid(false);
          setSubmitting(false);
        },
      });

      // When there is no mutation, we should reset form's state.
      if (!useMutation) {
        setValid(false);
        setSubmitting(false);
      }
    },
    [
      validate,
      store,
      isSubmitting,
      isValid,
      onSubmit,
      mutationData,
      useMutation,
    ]
  );

  // Callback, which handles value's change.
  const handleChange = React.useCallback(
    (key: FormKey, value?: FormValue) => {
      // Stringifies values to compare.
      const initialValue = (initialValues[key] as FormValue).toString();
      store.setValue(key, value ?? initialValue);

      // Checks, if current form's values is different than initial.
      if (initialValue && (value !== initialValue || store.isTouched(key))) {
        validate();
      }

      // When key do not have initial value, we should validate always.
      else if (!initialValue) {
        validate();
      }
    },
    [initialValues, store, validate]
  );

  // Callback, which handles value's focus lost.
  const handleBlur = React.useCallback(
    (key: FormKey) => {
      // Stringifies values to compare.
      const value = store.getValue(key).toString();
      const initialValue = (initialValues[key] as FormValue).toString();

      // Checks, if current form's values is different than initial.
      if (initialValue && value !== initialValue) {
        validate();
        if (!store.isTouched(key)) {
          store.setTouched(key);
        }
      }

      // Checks, when initial value does not exist, but now key has value.
      else if (!initialValue && value) {
        validate();
        if (!store.isTouched(key)) {
          store.setTouched(key);
        }
      }
    },
    [initialValues, store, validate]
  );

  // Effect, which handles initial form's validation.
  React.useEffect(() => {
    if (initialValidation) {
      validate();
    }
  }, [initialValidation, validate]);

  return {
    id,
    store,
    isSubmitting,
    isValid,
    validate,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
