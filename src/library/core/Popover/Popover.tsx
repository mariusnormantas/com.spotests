/** @format */

import { PopoverTrigger } from "./PopoverTrigger";
import { PopoverFloating } from "./PopoverFloating";
import { usePopover } from "./use-popover";
import { PopoverContext } from "./PopoverProvider";
import { PopoverComponent } from "./types";

export const Popover: PopoverComponent = ({ children, ...rest }) => {
  // Initializes component's states, hooks and etc.
  const popover = usePopover({ ...rest });
  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Floating = PopoverFloating;
Popover.displayName = "@/library/core/Popover";
