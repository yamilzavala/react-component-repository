import "./ProgressBar.css";

function ProgressBar({ progress }) {
  return (
    <div className="bar">
      <div
        className="bar-contents"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}

export default ProgressBar;
