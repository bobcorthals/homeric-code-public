import React, { useState, useEffect } from 'react';
import { ScrollBtn, ArrowUp } from './scrollElements';
import { goToTop } from './scrollElements';

// https://www.freecodecamp.org/news/scroll-to-top-bottom-and-particular-section-with-react/

const ScrollToTop = () => {

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <ScrollBtn>
      {showTopBtn && (
        <ArrowUp onClick={goToTop} />
      )}
    </ScrollBtn>
  );
};
export default ScrollToTop;