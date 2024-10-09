import "./styles.css";
import DynamicFormComponent from "./DynamicFormComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Dynamic Form Validation</h1>
      <h2>
        Descripción: Un formulario que permita agregar campos dinámicamente con
        validación.
      </h2>
      <DynamicFormComponent />
    </div>
  );
}
