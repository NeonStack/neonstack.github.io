import { useState, useEffect } from 'react';

function useScreenSize() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    function checkScreenSize() {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px is the default 'lg' breakpoint in Tailwind
    }

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isLargeScreen;
}

export default useScreenSize;