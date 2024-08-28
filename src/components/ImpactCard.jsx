import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ImpactCard = ({ label, total, word }) => {
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
    <div
      ref={ref}
      className="flex justify-around pl-10 lg:justify-evenly lg:items-left flex-col py-4 w-full lg:pr-0"
    >
      <h1 className="text-white poppinsSemiBold text-lg tablet:text-3xl -ml-12 lg:ml-0 lg:justify-start lg:text-left">
        {displayedTotal} {word}
        <span className="text-color-gold poppinsRegular mt-5 lg:mt-0 w-full text:sm lg:body-2 -ml-15 lg:ml-0 lg:justify-start lg:text-left">
          {word}
        </span>
      </h1>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{
          delay: 0.6,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easein",
          duration: 1,
        }}
        className="poppinsRegular text-white text-[10px] md:text-[15px] max-w-20 md:max-w-[45%] lg:max-w-[50%] lg:body-2 -ml-12 lg:ml-0"
      >
        {label}
      </motion.p>
    </div>
  );
};

export default ImpactCard;
