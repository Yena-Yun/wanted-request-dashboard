import { useEffect } from 'react';

export const useOnClickOutside = (ref: React.RefObject<HTMLDivElement>, handler: () => void) => {
  
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement
      if (!ref.current || ref.current.contains(target)) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};