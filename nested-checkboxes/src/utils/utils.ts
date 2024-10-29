import { CheckboxItem, CheckboxValue } from "../types/types";

// Función para actualizar el estado de todos los hijos de un checkbox
export function updateChildren(checkbox: CheckboxItem, checked: CheckboxValue) {
  checkbox.checked = checked;
  if (checkbox.children) {
    checkbox.children.forEach((child) => updateChildren(child, checked));
  }
}

// Función para actualizar el estado del checkbox padre basado en sus hijos
export function updateParent(checkbox: CheckboxItem) {
  if (!checkbox.children) return;

  const allChecked = checkbox.children.every((child) => child.checked === true);
  const allUnchecked = checkbox.children.every(
    (child) => child.checked === false
  );

  if (allChecked) {
    checkbox.checked = true;
  } else if (allUnchecked) {
    checkbox.checked = false;
  } else {
    checkbox.checked = "indeterminate";
  }
}
