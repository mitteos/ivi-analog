import { useEffect, useState } from 'react';

const useResize = (breakpoint: number) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < breakpoint
  );

  useEffect(() => {
    if (window.innerWidth > breakpoint) {
      setIsSmallScreen(false);
    } else if (window.innerWidth < breakpoint) {
      setIsSmallScreen(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > breakpoint) {
        setIsSmallScreen(false);
      } else if (window.innerWidth < breakpoint) {
        setIsSmallScreen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallScreen;
};

export default useResize;
