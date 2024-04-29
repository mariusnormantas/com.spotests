/** @format */

import React from "react";
import { UseButtonStateReturn } from "./types";

export const useButtonState = (): UseButtonStateReturn => {
  // Initializes component's states, hooks and etc.
  const ref = React.useRef<HTMLElement>(null);
  const [state, setState] = React.useState({
    isHovered: false,
    isPressed: false,
  });

  // Callback, which handles mouse enter the component.
  const handleMouseEnter = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isHovered: true }));
  }, []);

  // Callback, which handles mouse leave the component.
  const handleMouseLeave = React.useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      isHovered: false,
      isPressed: false,
    }));
  }, []);

  // Callback, which handles mouse down on the component.
  const handleMouseDown = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isPressed: true }));
  }, []);

  // Callback, which handles mouse up.
  const handleMouseUp = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isPressed: false }));
  }, []);

  // Layout's effect, which adds event listeners.
  React.useLayoutEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
      node.addEventListener("mousedown", handleMouseDown);
      node.addEventListener("mouseup", handleMouseUp);

      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
        node.removeEventListener("mousedown", handleMouseDown);
        node.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [handleMouseDown, handleMouseEnter, handleMouseLeave, handleMouseUp]);
  return { ...state, ref };
};
