import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as Scroll from 'react-scroll';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const scroll = Scroll.animateScroll;
  
  useEffect(() => {
    scroll.scrollToTop();
  }, [pathname]);

  return null;
}

export default ScrollToTop;