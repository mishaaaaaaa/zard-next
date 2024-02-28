import { useEffect } from "react";

const ProgressBar = () => {
  useEffect(() => {
    console.log("ProgressBar rerendered");
  });
  return <div>Progress Bar</div>;
};

export default ProgressBar;
