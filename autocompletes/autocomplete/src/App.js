import Autocomplete from "./components/Autocomplete";
import "./styles.css";

export default function App() {
  // const staticData = [
  //   "apple",
  //   "banana",
  //   "berrl",
  //   "orange",
  //   "grape",
  //   "mango",
  //   "melon",
  //   "berry",
  //   "peach",
  //   "cherry",
  //   "plum",
  // ];

  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.recipes;
  };

  return (
    <div className="App">
      <h1>Autocomplete / Typeahead</h1>
      <Autocomplete
        // staticData={staticData}
        fetchSuggestions={fetchSuggestions}
        placeholder="Enter recipe"
        dataKey="name"
        customLoading={<>Loading recipes...</>}
        onSelect={() => {
          console.log();
        }}
        onFocus={(e) => {}}
        onBlur={(e) => {}}
        onChange={(e) => {}}
        customStyles={{}}
      />
    </div>
  );
}
