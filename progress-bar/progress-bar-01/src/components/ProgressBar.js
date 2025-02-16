import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar() {
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    if (startTransition) return;
    setStartTransition(true);
  });

  return (
    <div className="bar">
      <div
        className={["bar-contents", startTransition && "bar-contents--filled"]
          .filter(Boolean)
          .join(" ")}
      />
    </div>
  );
}
