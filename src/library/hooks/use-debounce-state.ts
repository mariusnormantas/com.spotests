/** @format */

import React from "react";

export const useDebounceState = <T>(
  state: T,
  setState: React.Dispatch<React.SetStateAction<T>>,
  delay = 500
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  // Initializes component's states, hooks and etc.
  const timerRef = React.useRef<unknown>(null);
  const [debouncedState, setDebouncedState] = React.useState(state);

  // Effect which handles search value update with debounce.
  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      setState(debouncedState);
    }, delay);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current as number);
      }
    };
  }, [debouncedState, delay, setState]);

  return [debouncedState, setDebouncedState];
};
