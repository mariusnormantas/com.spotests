/** @format */

import React from "react";
import { PiCaretDownFill, PiCaretUpFill } from "react-icons/pi";
import { Input } from "../Input";
import { Button } from "../Button";
import { NumberInputProps } from "./types";
import * as sc from "./NumberInput.styled";

// Regex.
const REGEX_NO_DECIMALS = /^-?[0-9]+?[0-9]*$/;
const REGEX_DECIMALS = /^-?[0-9]+\.?[0-9]*$/;

const _NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      name,
      value,
      disabled,
      setValue,
      min,
      max,
      step = 1,
      decimals,
      hideControls,
      sectionEnd,
      onBlur,
      ...rest
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    // Callback, which adjusts decimals to the value.
    const adjustChange = React.useCallback(
      (adjustable: number) => {
        let current: string | number = adjustable;

        // Checks, number input's min and max values.
        if (typeof min === "number" && current < min) {
          current = min;
        } else if (typeof max === "number" && current > max) {
          current = max;
        }

        // Rounds decimals, if needed.
        if (current && typeof decimals === "number") {
          const rounded = Number(
            Math.round(Number(current + "e" + decimals)) + "e-" + decimals
          ).toFixed(decimals);
          current = rounded;
        }
        setValue(current.toString());
      },
      [min, max, decimals, setValue]
    );

    // Callback, which handles input's change event.
    const handleInput = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!value.length) {
          setValue("");
        } else if (value === "-") {
          setValue("-");
        }
        if (!decimals && REGEX_NO_DECIMALS.test(value)) {
          setValue(value);
        } else if (decimals && REGEX_DECIMALS.test(value)) {
          setValue(value);
        }
      },
      [decimals, setValue]
    );

    // Callback, which handles input's focus event.
    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value
          ? parseFloat(e.target.value)
          : min
          ? min
          : "";
        if (value && typeof value === "number") {
          adjustChange(value);
        }
        onBlur?.(e);
      },
      [min, onBlur, adjustChange]
    );

    // Callback which handles plus button click.
    const handlePlus = React.useCallback(() => {
      let current = (value ? parseFloat(value as string) : 0) + step;
      if (min && max && current > max) current = min;
      adjustChange(current);
    }, [value, step, min, max, adjustChange]);

    // Callback which handles minus button click.
    const handleMinus = React.useCallback(() => {
      let current = (value ? parseFloat(value as string) : 0) - step;
      if (min && max && current < min) current = max;
      adjustChange(current);
    }, [value, step, min, max, adjustChange]);

    return (
      <sc.Component
        as={Input}
        ref={ref}
        name={name}
        value={value}
        disabled={disabled}
        onInput={handleInput}
        onBlur={handleBlur}
        min={min}
        max={max}
        spellCheck={false}
        sectionEnd={
          (sectionEnd || !hideControls) && (
            <React.Fragment>
              {sectionEnd}
              {!hideControls && (
                <sc.Controllers>
                  <Button
                    tabIndex={-1}
                    type="button"
                    variant="subtle"
                    size="extra-small"
                    iconStart={PiCaretUpFill}
                    disabled={disabled}
                    onClick={handlePlus}
                    counter
                  />
                  <Button
                    tabIndex={-1}
                    type="button"
                    variant="subtle"
                    size="extra-small"
                    iconStart={PiCaretDownFill}
                    disabled={disabled}
                    onClick={handleMinus}
                    counter
                  />
                </sc.Controllers>
              )}
            </React.Fragment>
          )
        }
        {...rest}
        $hasControls={!hideControls}
      />
    );
  }
);

export const NumberInput = React.memo(_NumberInput);
NumberInput.displayName = "@/library/core/NumberInput";
