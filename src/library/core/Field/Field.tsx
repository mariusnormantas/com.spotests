/** @format */

import React from "react";
import { PiWarningCircleDuotone } from "react-icons/pi";
import { FieldProps } from "./types";
import * as sc from "./Field.styled";

const _Field: React.FC<FieldProps> = React.forwardRef(
  (
    {
      direction = "column",
      label,
      afterLabel,
      asterisk,
      description,
      validation,
      hideValidation,
      children,
      ...rest
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    // Initializes component's states, hooks and etc.
    const useId = React.useId();
    const id = `field${useId}id`;

    // Input's attribute.
    const { id: controlledId, disabled } = children.props;

    // Memoized label's node, to prevent re-renders.
    const labelNode = React.useMemo(
      () =>
        (label || afterLabel) && (
          <sc.Label.Container>
            <sc.Label.Content htmlFor={controlledId ?? id}>
              {label}
              {asterisk && <span>*</span>}
            </sc.Label.Content>
            {afterLabel}
          </sc.Label.Container>
        ),
      [label, controlledId, id, asterisk, afterLabel]
    );

    // Memoized label's node, to prevent re-renders.
    const descriptionNode = React.useMemo(
      () => description && <sc.Description>{description}</sc.Description>,
      [description]
    );

    // Memoized validation's node, to prevent re-renders.
    const validationNode = React.useMemo(
      () =>
        validation &&
        !hideValidation &&
        !disabled && (
          <sc.Validation>
            <PiWarningCircleDuotone />
            {validation}
          </sc.Validation>
        ),
      [validation, hideValidation, disabled]
    );

    // Checks, if children element is valid.
    if (!React.isValidElement(children)) return null;

    // Clones field's children (any input) and adds id to match with label.
    const clonedChild = React.cloneElement(children, {
      id,
      invalid: !!validation,
      hideValidation,
      ...children.props,
    });

    return (
      <sc.Component ref={ref} {...rest} data-component="field">
        {direction === "column" ? (
          <sc.Column>
            {labelNode}
            {clonedChild}
            {validationNode}
            {descriptionNode}
          </sc.Column>
        ) : (
          <sc.Column>
            <sc.Row data-grid="true">
              {labelNode}
              {clonedChild}
            </sc.Row>
            {validationNode && (
              <sc.Row data-grid="true">
                <div />
                {validationNode}
              </sc.Row>
            )}
            {descriptionNode && (
              <sc.Row data-grid="true">
                <div />
                {descriptionNode}
              </sc.Row>
            )}
          </sc.Column>
        )}
      </sc.Component>
    );
  }
);

export const Field = React.memo(_Field);
Field.displayName = "@/library/core/Field";
