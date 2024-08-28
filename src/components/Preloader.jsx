import React, { useEffect, useState } from "react";
import logo from "../assets/logosMain.png";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
    }, 1000); // Start fade out before loader disappears

    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Enable scroll
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-color-darkBlue z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={logo}
        alt="Loading..."
        className="w-32 h-32 object-contain animate-pulse"
      />
    </div>
  );
};

export default Preloader;
