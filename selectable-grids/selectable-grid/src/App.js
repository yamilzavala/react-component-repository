import SelectableGrid from "./components/SelectableGrid";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <SelectableGrid cols={10} rows={10} />
    </div>
  );
}
