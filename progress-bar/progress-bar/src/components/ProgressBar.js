import { useState, useEffect } from "react";
import { MIN, MAX } from "../constants/constants";
const ProgressBar = ({ value = MIN }) => {
  const [percentage, setPercentage] = useState(value.toFixed());
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    handleProgress();
  }, []);

  const handleProgress = () => {
    const timer = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = Math.min(
          100,
          Math.max(Number(prevPercentage) + 1, 0)
        );
        if (newPercentage > 98) {
          clearInterval(timer);
          setCompleted(true);
        }
        return newPercentage;
      });
    }, 50);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ "--width-progress": `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
        />
        <span
          className="text-progress"
          style={{ color: percentage > 49 ? "white" : "black" }}
        >
          {percentage}%
        </span>
      </div>
      {completed ? <span>Commpleted</span> : <span>Loading...</span>}
    </div>
  );
};

export default ProgressBar;
