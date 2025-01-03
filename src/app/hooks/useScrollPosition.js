'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * @returns {Object} scroll position object with x and y coordinates
 */
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY
      });
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
