import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const ProgressBar = ({
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      step: 1,
      color: "white",
    },
  ],
  totalSteps = 5,
}) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  const convertStepToProgress = (step) => `${(step / totalSteps) * 100}%`;

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item) => {
          return convertStepToProgress(item.step);
        })
      );
    });
  }, [visualParts]);

  return (
    <>
      <div className={styles.progressLabel}>{label}</div>
      <div
        className={styles.progressVisualFull}
        style={{
          backgroundColor,
        }}
      >
        {visualParts.map((item, index) => {
          return (
            <div
              /* eslint-disable-next-line react/no-array-index-key */
              key={index}
              style={{
                width: widths[index],

                backgroundColor: item.color,
              }}
              className={styles.progressVisualPart}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProgressBar;
