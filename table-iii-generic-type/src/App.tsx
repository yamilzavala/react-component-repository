import DataTable from "./components/DataTale";
import { houses } from "./data/houses";
import { users } from "./data/users";
import { createColumns } from "./helper/utils";
import "./styles.css";

type User = (typeof users)[number];
type House = (typeof houses)[number];

const userColumns = createColumns<User>([
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
  { label: "Occupation", key: "occupation" },
]);

const houseColumns = createColumns<House>([
  { label: "ID", key: "id" },
  { label: "Street", key: "street" },
  { label: "City", key: "city" },
  { label: "State", key: "state" },
  { label: "Built Year", key: "built_year" },
]);

export default function App() {
  return (
    <div>
      <h2>Users</h2>
      <DataTable data={users} columns={userColumns} />
      <br />
      <h2>Houses</h2>
      <DataTable data={houses} columns={houseColumns} />
    </div>
  );
}
