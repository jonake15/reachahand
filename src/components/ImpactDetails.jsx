import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ImpactDetails = ({ label, total }) => {
  const [displayedTotal, setDisplayedTotal] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 3000; // 3 seconds
    const fps = 60; // frames per second
    const totalFrames = Math.round(duration / (1000 / fps));
    const incrementValue = total / totalFrames;

    let currentTotal = 0;
    const intervalId = setInterval(() => {
      currentTotal += incrementValue;
      setDisplayedTotal(Math.floor(currentTotal));

      if (currentTotal >= total) {
        setDisplayedTotal(total);
        clearInterval(intervalId);
      }
    }, 1000 / fps);

    return () => clearInterval(intervalId);
  }, [isInView, total]);

  return (
    <div ref={ref} className="flex flex-col justify-between w-full">
      <h1 className="text-color-darkBlue poppinsBold h3 text-left">
        {displayedTotal}
      </h1>
      <p className="poppinsRegular text-color-darkBlue body-2 laptop-sm:mr-20">
        {label}
      </p>
    </div>
  );
};

export default ImpactDetails;
