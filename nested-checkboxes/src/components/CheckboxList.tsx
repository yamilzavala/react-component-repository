import { CheckboxItem } from "../types/types";
import CheckboxItemComponent from "./CheckboxItemComponent";

// Componente CheckboxList para renderizar recursivamente la lista de checkboxes
function CheckboxList({
  items,
  onCheck,
}: {
  items: CheckboxItem[];
  onCheck: (checkbox: CheckboxItem) => void;
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <CheckboxItemComponent item={item} onCheck={onCheck} />
          {item.children && (
            <CheckboxList items={item.children} onCheck={onCheck} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default CheckboxList;
