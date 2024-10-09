import "./styles.css";

const ConfirmButton = ({ onConfirm }) => {
  const handleClick = () => {
    if (window.confirm("Are you sure?")) {
      onConfirm();
    }
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default function App() {
  const handleDelete = () => {
    alert("Item deleted");
  };
  return (
    <div className="App">
      <h1>Confirmation</h1>
      <ConfirmButton onConfirm={handleDelete} />
    </div>
  );
}
