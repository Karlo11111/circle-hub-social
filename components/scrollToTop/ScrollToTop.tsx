"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  const goToTopHandler = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  const goToTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", goToTop);
    return () => {
      window.removeEventListener("scroll", goToTop);
    };
  }, []);

  return (
    <button
      className={`scrollToTop d-none d-lg-block ${
        windowHeight > 200 && "active"
      }`}
    >
      <i className="mat-icon fas fa-angle-double-up"></i>
    </button>
  );
};

export default ScrollToTop;
