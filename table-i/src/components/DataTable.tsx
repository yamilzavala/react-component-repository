import { useState } from "react";
import { SortDirection, SortField } from "../types/types";
import { paginateUsers, sortUsers } from "../helpers/utils";
import { users } from "../data/users";

const columns = [
  { key: "id", label: "Id" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "occupation", label: "Occupation" },
] as const;

const DataTable = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  //sorting
  const sortedUsers = sortUsers(users, sortField!, sortDirection);

  //pagination
  const { totalPages, pageUsers } = paginateUsers(sortedUsers, page, pageSize);

  return (
    <div>
      {/* table */}
      <table>
        <thead>
          <tr>
            {columns.map(({ key, label }) => {
              return (
                <th key={key}>
                  <button
                    onClick={() => {
                      if (key !== sortField) {
                        setSortField(key);
                        setSortDirection("asc");
                      } else {
                        setSortDirection(
                          sortDirection === "asc" ? "desc" : "asc"
                        );
                        setPage(1);
                      }
                    }}
                  >
                    {label}
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {pageUsers.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      {/* pagination */}
      <div className="pagination">
        <select
          aria-label="Page size"
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setPage(1);
          }}
        >
          {[5, 10, 15].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>

        <div className="pages">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <span aria-label="Page number">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
