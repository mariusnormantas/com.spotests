/** @format */

import React from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useInteractions,
  size,
  limitShift,
  inline,
  hide,
  useHover,
  safePolygon,
  useTransitionStyles,
  arrow,
} from "@floating-ui/react";
import { PopoverProps } from "./types";

export function usePopover({
  initialOpen = false,
  placement = "bottom",
  modal = false,
  interactions: controlledInteractions,
  openDelay,
  closeDelay,
  width,
  matchWidth,
  open: controlledOpen,
  setOpen: setControlledOpen,
  offset: controlledOffset = 5,
}: PopoverProps = {}) {
  // Initializes component's states, hooks and etc.
  const arrowRef = React.useRef(null);
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  // Initialize floating element.
  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(controlledOffset),
      shift({
        padding: 5,
        limiter: limitShift({
          offset: ({ rects }) => rects.reference.width,
        }),
      }),
      flip(),
      size({
        apply({ availableHeight, elements, rects }) {
          const getWidth = () => {
            if (matchWidth) {
              return `${rects.reference.width}px`;
            }
            return typeof width === "string"
              ? width
              : width
              ? `${width}px`
              : "max-content";
          };
          Object.assign(elements.floating.style, {
            width: getWidth(),
            maxHeight: `calc(${Math.max(0, availableHeight)}px - 5px)`,
          });
        },
      }),
      inline(),
      hide(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  // Animated appearance of the popover.
  const { isMounted, styles: transitionStyles } = useTransitionStyles(
    data.context,
    {
      duration: {
        open: 200,
        close: 200,
      },
      initial: {
        opacity: 0,
        transform: data.context.placement.includes("bottom")
          ? "translateY(1.5em)"
          : "translateY(-1.5em)",
        transitionProperty: "opacity, transform",
        willChange: "opacity, transform",
      },
      open: {
        opacity: 1,
        transform: "translateY(0)",
        transitionProperty: "opacity, transform",
        willChange: "opacity, transform",
      },
      close: {
        opacity: 0,
        transform: data.context.placement.includes("bottom")
          ? "translateY(1.5em)"
          : "translateY(-1.5em)",
        transitionProperty: "opacity, transform",
        willChange: "opacity, transform",
      },
    }
  );

  // Merged common styles with animated styles.
  const style = React.useMemo(() => {
    return {
      position: data.strategy,
      top: data.y,
      left: data.x,
      ...transitionStyles,
    };
  }, [data, transitionStyles]);

  // Trigger floating element when trigger is clicked.
  const click = useClick(data.context, {
    enabled: controlledInteractions && controlledInteractions.includes("click"),
    event: "mousedown",
  });

  // Trigger floating element when trigger is hovered.
  const hover = useHover(data.context, {
    enabled: controlledInteractions && controlledInteractions.includes("hover"),
    delay: {
      open: openDelay,
      close: closeDelay,
    },
    handleClose: safePolygon(),
  });

  // Hide floating element when clicked outside of it or pressed ESC button.
  const dismiss = useDismiss(data.context, {
    enabled:
      controlledInteractions && controlledInteractions.includes("dismiss"),
  });

  // Initializes defined interactions to open/close and control popover.
  const interactions = useInteractions([click, hover, dismiss]);

  return {
    open,
    setOpen,
    modal,
    ...interactions,
    ...data,
    arrowRef,
    isMounted,
    style,
  };
}
