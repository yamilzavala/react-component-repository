import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    handleProgress();
  });

  function handleProgress() {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = Math.min(100, Math.max(prevProgress + 1, 0));
        return newProgress;
      });

      if (progress > 99) {
        setCompleted(true);
        clearInterval(timer);
      }
    }, 100);
  }

  return (
    <div className="container">
      <div className="bar">
        <div
          className="bar-contents"
          style={{ "--width-progress": `${progress}%` }}
        />

        <span
          className={["text", progress > 49 ? "white-text" : "black-text"]
            .filter(Boolean)
            .join(" ")}
        >
          {progress} %
        </span>
      </div>

      {completed ? "Completed" : "Loading..."}
    </div>
  );
}
