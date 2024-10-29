import "./styles.css";
import { useState } from "react";
import { initialData } from "./data/data";
import { CheckboxItem } from "./types/types";
import CheckboxList from "./components/CheckboxList";
import { updateChildren, updateParent } from "./utils/utils";

// Componente principal
export default function App() {
  const [checkboxData, setCheckboxData] = useState<CheckboxItem[]>(initialData);

  const handleCheck = (checkbox: CheckboxItem) => {
    // Clonamos los datos para evitar modificar el estado directamente
    const newData = JSON.parse(JSON.stringify(checkboxData)) as CheckboxItem[];

    // Función para encontrar y actualizar el checkbox en la estructura clonada
    function findAndUpdate(data: CheckboxItem[]): CheckboxItem | undefined {
      for (let item of data) {
        if (item.id === checkbox.id) {
          const isChecked = !item.checked;
          updateChildren(item, isChecked); // Actualizamos los hijos
          return item;
        } else if (item.children) {
          const found = findAndUpdate(item.children);
          if (found) {
            updateParent(item); // Actualizamos el estado del padre
            return found;
          }
        }
      }
    }

    findAndUpdate(newData);
    setCheckboxData(newData);
  };

  return <CheckboxList items={checkboxData} onCheck={handleCheck} />;
}
