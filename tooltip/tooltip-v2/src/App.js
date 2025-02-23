import "./styles.css";
import Tooltip from "./components/Tooltip";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Tooltip text="Add to library" position="top">
          <button className="hover-button">Hover</button>
        </Tooltip>
      </div>
    </div>
  );
}
