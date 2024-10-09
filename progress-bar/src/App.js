import ProgressBar from "./components/ProgressBar";
import { MIN } from "./constants/constants";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [progressArr, setProgressArr] = useState([]);
  const handleAddProgressBar = () => {
    const newProgress = <ProgressBar value={MIN} />;
    setProgressArr([...progressArr, newProgress]);
  };

  return (
    <div className="container">
      <button className="btn" type="button" onClick={handleAddProgressBar}>
        add
      </button>
      {progressArr.map((progress, idx) => {
        return <div key={idx}>{progress}</div>;
      })}
    </div>
  );
}
