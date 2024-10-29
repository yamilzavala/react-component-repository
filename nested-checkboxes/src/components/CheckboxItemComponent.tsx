import { CheckboxItem } from "../types/types";

// Componente CheckboxItemComponent para manejar el estado de cada checkbox individual
function CheckboxItemComponent({
  item,
  onCheck,
}: {
  item: CheckboxItem;
  onCheck: (checkbox: CheckboxItem) => void;
}) {
  return (
    <div>
      <input
        type="checkbox"
        checked={item.checked === true}
        ref={(el) =>
          el && (el.indeterminate = item.checked === "indeterminate")
        }
        onChange={() => onCheck(item)}
      />
      {item.name}
    </div>
  );
}

export default CheckboxItemComponent;
