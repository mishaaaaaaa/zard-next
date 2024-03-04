import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

function CircularProgressBar(props) {
  const { sqSize = 300, strokeWidth = 15, customClass, afterAction } = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const percentage = Math.min((elapsedTime / 5000) * 100, 100); // Limit progress to 100%
      setProgress(percentage);
      if (elapsedTime >= 5000) {
        clearInterval(interval);
        afterAction();
      } // Stop the interval after 5 seconds
    }, 10);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {}, []);

  const radius = (sqSize - strokeWidth) / 2;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * progress) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={`0 0 ${sqSize} ${sqSize}`} className={customClass}>
      <circle
        className={styles.circleBackground}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className={styles.circleProgress}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text className={styles.circleText} x="50%" y="50%" dy=".3em" textAnchor="middle">
        {`${Math.round(progress)}%`}
      </text>
    </svg>
  );
}

export default CircularProgressBar;
