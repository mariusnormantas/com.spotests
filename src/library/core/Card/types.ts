/** @format */

import React from "react";
import { CardInitProps } from "./CardInit";
import { CardListProps } from "./CardList";
import { CardItemProps } from "./CardItem";

// Card component's props.
export type CardProps = {
  children: React.ReactNode;
};

// Card component, including relative components.
export type CardComponent = React.FC<CardProps> & {
  Init: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      CardInitProps & React.RefAttributes<HTMLDivElement>
    >
  >;
  List: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      CardListProps & React.RefAttributes<HTMLUListElement>
    >
  >;
  Item: React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      CardItemProps & React.RefAttributes<HTMLLIElement>
    >
  >;
};
