import { useState, useEffect, useRef } from 'react';

const useScrollDirection = () => {
  const [direction, setDirection] = useState('up');
  const [scrollY, setScrollY] = useState(0);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - prevScrollY.current;

      if (Math.abs(diff) > 5) {
        setDirection(diff > 0 ? 'down' : 'up');
        prevScrollY.current = currentScrollY;
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { direction, scrollY };
};

export default useScrollDirection;
