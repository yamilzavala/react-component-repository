// Define el tipo para el estado del checkbox, que puede ser true, false o 'indeterminate'
export type CheckboxValue = boolean | "indeterminate";

// Define la estructura de cada checkbox en la jerarquía
export interface CheckboxItem {
  id: number;
  name: string;
  checked: CheckboxValue;
  children?: CheckboxItem[];
}
