"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [isLoded, setIsLoded] = useState<any>(null);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoded("loaded");
    });

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return showLoader ? (
    <div
      className={`preloader align-items-center justify-content-center ${isLoded}`}
    >
      <span className="loader"></span>
    </div>
  ) : (
    <></>
  );
};

export default Preloader;
