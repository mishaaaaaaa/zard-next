import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const ProgressBar = ({
  label,
  backgroundColor = "#e5e5e5",
  progressInfo = {
    step: 1,
    color: "white",
  },
  totalSteps = 5,
}) => {
  const [width, setWidth] = useState(0);

  const convertStepToProgress = (step) => `${(step / totalSteps) * 100}%`;

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidth(convertStepToProgress(progressInfo.step));
    });
  }, [progressInfo]);

  return (
    <>
      <div className={styles.progressLabel}>{label}</div>
      <div
        className={styles.progressVisualFull}
        style={{
          backgroundColor,
        }}
      >
        <div
          style={{
            width,
            backgroundColor: progressInfo.color,
          }}
          className={styles.progressVisualPart}
        />
      </div>
    </>
  );
};

export default ProgressBar;
