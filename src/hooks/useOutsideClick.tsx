import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = (event: globalThis.MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
