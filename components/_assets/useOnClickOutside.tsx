import React, { useEffect, useState } from 'react';

/* 
  ref: useRef.current || DOM HTML element
  handler: callback function
*/

const useOnClickOutside = (refs: HTMLElement[], handler: Function) => {
  useEffect(() => {
    const listener = (event) => {
      const isInner = refs.some((ref) => {
        if (ref && ref.contains(event.target)) {
          console.log(ref)
          return true
        };
      });
      if (!isInner) return handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
};

export const useDropdownDisplay = (refs: HTMLElement[]) => {
  const [display, setDisplay] = useState<boolean>();
  const handleDisplay = () => setDisplay(!display);
  useOnClickOutside(refs, () => setDisplay(false));
  return [display, handleDisplay];
};

export default useOnClickOutside;
