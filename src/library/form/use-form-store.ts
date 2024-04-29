/** @format */

import React from "react";
import {
  FormValues,
  UseFormStoreReturn,
  FormError,
  FormKey,
  FormValue,
  FormErrors,
  FormTouches,
  UseFormStoreProps,
} from "./types";

export const useFormStore = ({
  initialValues,
}: UseFormStoreProps): UseFormStoreReturn => {
  // Initializes component's states, hooks and etc.
  const values = React.useRef<FormValues>(initialValues);
  const errors = React.useRef<FormErrors>({});
  const touched = React.useRef<FormTouches>([]);
  const subscribers = React.useRef(new Set<() => void>());

  // Callback, which subscribes to referenced form's values to keep it updated.
  const subscribe = React.useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  // Callback which updates form's value for key.
  const setValue = React.useCallback((key: FormKey, value: FormValue): void => {
    values.current = { ...values.current, [key]: value };
    subscribers.current.forEach((callback) => callback());
  }, []);

  // Callback, which gets form's single value by key.
  const getValue = React.useCallback((key: FormKey): FormValue => {
    return values.current[key] ?? "";
  }, []);

  // Callback, which gets form's values.
  const getValues = React.useCallback((): FormValues => {
    return values.current;
  }, []);

  // Callback, which clears all the values of the form.
  const clearValues = React.useCallback(
    (keys?: FormKey[]): void => {
      if (!keys) {
        values.current = initialValues;
        return;
      }
      keys.forEach((key) => {
        values.current[key] = initialValues[key] ?? "";
      });
      subscribers.current.forEach((callback) => callback());
    },
    [initialValues]
  );

  // Callback which updates form's error for key.
  const setError = React.useCallback((key: FormKey, error: FormError): void => {
    errors.current = { ...errors.current, [key]: error };
    subscribers.current.forEach((callback) => callback());
  }, []);

  // Callback, which gets form's values or single value by key.
  const getError = React.useCallback((key: FormKey): FormError => {
    return errors.current[key] ?? "";
  }, []);

  // Callback, which gets form's values or single value by key.
  const getErrors = React.useCallback((): FormErrors => {
    return errors.current;
  }, []);

  // Callback, which clears all the errors of the form.
  const clearErrors = React.useCallback((keys?: string[]): void => {
    if (!keys) {
      errors.current = {};
      return;
    }
    keys.forEach((key) => {
      if (errors.current[key]) {
        const currentErrors = errors.current;
        delete currentErrors[key];
        errors.current = currentErrors;
      }
    });
    subscribers.current.forEach((callback) => callback());
  }, []);

  // Callback which updates form's value for key.
  const setTouched = React.useCallback((key: FormKey): void => {
    touched.current = [...touched.current, key];
    subscribers.current.forEach((callback) => callback());
  }, []);

  // Callback which updates form's value for key.
  const touchAll = React.useCallback((): void => {
    Object.keys(values.current).forEach((key) => {
      setTouched(key);
    });
    subscribers.current.forEach((callback) => callback());
  }, [setTouched]);

  // Callback, which gets form's values or single value by key.
  const isTouched = React.useCallback((key: FormKey): boolean => {
    return touched.current.indexOf(key) !== -1;
  }, []);

  // Callback, which clears all the touched values of the form.
  const clearTouched = React.useCallback(
    (keys?: string[]): void => {
      if (!keys) {
        touched.current = [];
      } else {
        keys.forEach((key) => {
          if (isTouched(key)) {
            touched.current = touched.current.filter((item) => key !== item);
          }
        });
      }
      subscribers.current.forEach((callback) => callback());
    },
    [isTouched]
  );

  // Callback, which resets form's store to default values.
  const clear = React.useCallback(
    (keys?: string[]): void => {
      // Checks, if keys has been defined, so we should clear only defined keys.
      clearTouched(keys);
      clearErrors(keys);
      clearValues(keys);
      subscribers.current.forEach((callback) => callback());
    },
    [clearErrors, clearTouched, clearValues]
  );

  return {
    subscribe,
    setValue,
    getValue,
    getValues,
    clearValues,
    setError,
    getError,
    getErrors,
    clearErrors,
    setTouched,
    touchAll,
    isTouched,
    clearTouched,
    clear,
  };
};
