import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as Scroll from 'react-scroll';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    Scroll.animateScroll.scrollToTop();
  }, [pathname]);

  return null;
}

export default ScrollToTop;