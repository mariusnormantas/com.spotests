/** @format */

import React from "react";
import ReactDOM from "react-dom";

export const useFocusTrap = (ref: React.RefObject<HTMLElement>) => {
  // Callback, which unfocus any active element.
  return React.useCallback(() => {
    const rootNode = document.getElementById("root");
    const activeElement = document.activeElement;

    // Checks, if root node exists on page, so page is loaded.
    if (!rootNode || !ref.current) return;

    // Checks, if active element is inside root node, but not inside reference.
    if (
      rootNode.contains(activeElement) &&
      !ref.current.contains(activeElement)
    ) {
      (ReactDOM.findDOMNode(ref.current) as HTMLElement).focus();
    }
  }, [ref]);
};
