/** @format */

import React from "react";
import { CardListProps } from "./types";
import * as sc from "./CardList.styled";

const _CardList = React.forwardRef<HTMLUListElement, CardListProps>(
  ({ children }, ref: React.Ref<HTMLUListElement>) => {
    return (
      <sc.Component ref={ref} role="list" data-component="card-list">
        {children}
      </sc.Component>
    );
  }
);

export const CardList = React.memo(_CardList);
CardList.displayName = "@/library/core/CardList";
