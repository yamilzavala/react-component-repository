import "./styles.css";
import { useState } from "react";
import Table from "./components/Table";

export default function App() {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const rowsVal = data.get("rows");
    setRows(Number(rowsVal));

    const colsVal = data.get("cols");
    setColumns(Number(colsVal));
  }

  return (
    <div className="wrapper">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="rows">Rows</label>
          <input type="number" id="rows" name="rows" min={1} />
        </div>
        <div>
          <label htmlFor="cols">Cows</label>
          <input type="number" id="cols" name="cols" min={1} />
        </div>
        <button type="submit">submit</button>
      </form>

      {Boolean(rows) && Boolean(columns) && (
        <Table cols={columns} rows={rows} />
      )}
    </div>
  );
}
