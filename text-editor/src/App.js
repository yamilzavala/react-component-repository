import "./styles.css";

//import TextEditorExecuteCommand from "./TextEditorExecuteCommand";
import TextEditorWithSelection from "./TextEditorWithSelection";

export default function App() {
  return (
    <div className="App">
      <h1>Text Editor</h1>
      {/* <TextEditorExecuteCommand /> */}
      <TextEditorWithSelection />
    </div>
  );
}
