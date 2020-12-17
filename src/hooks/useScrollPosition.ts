import { useEffect, useState } from 'react';

const getPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});

export const useScrollPosition = () => {
  const [position, setPosition] = useState(getPosition());

  useEffect(() => {
    const handleScroll = () => {
      setPosition(getPosition());
    };

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return position;
};
