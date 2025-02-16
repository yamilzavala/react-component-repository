import "./styles.css";
import { useState } from "react";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [bars, setBars] = useState(0);

  return (
    <div className="wrapper">
      <div>
        <button
          onClick={() => {
            setBars(bars + 1);
          }}
        >
          add
        </button>
      </div>

      <div className="bars">
        {Array.from({ length: bars }, (_, i) => null).map((_, idx) => (
          <ProgressBar key={idx} />
        ))}
      </div>
    </div>
  );
}
