export type SortDirection = "asc" | "desc";

type ColumnDef<T> = Readonly<{
  label: string;
  key: string;
  renderCell: (row: T) => React.ReactNode;
  comparator: (a: T, b: T, sortDirection: SortDirection) => number;
}>;

export type Columns<T> = ReadonlyArray<ColumnDef<T>>;
