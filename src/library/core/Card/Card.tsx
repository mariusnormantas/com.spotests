/** @format */

import { CardInit } from "./CardInit";
import { CardList } from "./CardList";
import { CardItem } from "./CardItem";
import { CardComponent } from "./types";

export const Card: CardComponent = ({ children }) => children;
Card.displayName = "@/library/core/Card";

Card.Init = CardInit;
Card.List = CardList;
Card.Item = CardItem;
