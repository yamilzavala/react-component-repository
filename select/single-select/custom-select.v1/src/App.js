import CustomSelect from "./CustomSelect";
import "./styles.css";

const options = [
  "bread",
  "tomato",
  "carrot",
  "potatoes",
  "strawberry",
  "cherry",
  "coconut",
];

export default function App() {
  return (
    <div className="App">
      <h1>Custom Select</h1>
      <CustomSelect options={options} />
    </div>
  );
}
