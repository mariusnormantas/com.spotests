/** @format */

import React from "react";
import { CardItemProps } from "./types";
import * as sc from "./CardItem.styled";

const _CardItem = React.forwardRef<HTMLLIElement, CardItemProps>(
  (
    {
      title,
      description,
      spaceBetween,
      sectionStart,
      sectionEnd,
      children,
      ...rest
    },
    ref: React.Ref<HTMLLIElement>
  ) => {
    return (
      <sc.Component
        ref={ref}
        {...rest}
        role="listitem"
        data-component="card-item">
        {sectionStart}
        <sc.Container>
          <sc.Row $spaceBetween={spaceBetween}>
            <span>{title}</span>
            <sc.Grid>{children}</sc.Grid>
          </sc.Row>
          {description && (
            <sc.Row as={sc.Description}>
              <p>{description}</p>
            </sc.Row>
          )}
        </sc.Container>
        {sectionEnd}
      </sc.Component>
    );
  }
);

export const CardItem = React.memo(_CardItem);
CardItem.displayName = "@/library/core/CardItem";
