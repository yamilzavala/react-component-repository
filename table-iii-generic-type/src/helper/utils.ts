import { Columns, SortDirection } from "../types/types";

//columns
export function createColumns<T>(
  definitions: Array<{
    label: string;
    key: keyof T;
    comparator?: (a: T, b: T, direction: SortDirection) => number;
    renderCell?: (row: T) => React.ReactNode;
  }>
) {
  return definitions.map((def) => ({
    label: def.label,
    key: def.key as string,
    renderCell: def.renderCell ?? ((row) => row[def.key]),
    comparator:
      def.comparator ??
      ((a, b, direction) => {
        const valueA = a[def.key];
        const valueB = b[def.key];

        // Si ambos valores son números:
        if (typeof valueA === "number" && typeof valueB === "number") {
          return direction === "asc" ? valueA - valueB : valueB - valueA;
        }

        // Si ambos valores son strings:
        if (typeof valueA === "string" && typeof valueB === "string") {
          return direction === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        }

        // Si no son comparables, no alterar el orden:
        return 0;
      }),
  }));
}

//pagination
export function paginateData<T>(
  data: Array<T>,
  page: number,
  pageSize: number
) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const pageData = data.slice(start, end);
  const maxPages = Math.ceil(data.length / pageSize);
  return { pageData, maxPages };
}

//sorting
export function sortData<T>(
  data: Array<T>,
  columns: Columns<T>,
  field: string | null,
  direction: SortDirection
) {
  const dataClone = data.slice();
  const comparator = columns.find((column) => column.key === field)?.comparator;

  if (comparator == null) {
    return dataClone;
  }

  return dataClone.sort((a, b) => comparator(a, b, direction));
}
