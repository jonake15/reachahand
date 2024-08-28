import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Counter({ from, to }) {
  const ref = useRef();
  const controlsRef = useRef(null); // Ref to hold the controls object

  useEffect(() => {
    // Start the animation and store the controls object
    controlsRef.current = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        // Ensure value is a number before calling toFixed()
        if (typeof value === "number") {
          ref.current.textContent = value.toFixed(1);
        }
      },
    });

    // Cleanup function
    return () => {
      // Check if controlsRef.current is defined before calling stop
      if (controlsRef.current) {
        controlsRef.current.stop();
      }
    };
  }, [from, to]);

  return <p ref={ref} />;
}

export default Counter;
