import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as Scroll from "react-scroll";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        Scroll.animateScroll.scrollToTop({
            smooth: true,
            delay: 300,
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
