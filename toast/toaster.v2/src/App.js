import "./styles.css";
import Toaster from "./components/Toaster";

export default function App() {
  return (
    <div className="wrapper">
      <Toaster
        title="Scheduled: Catch up"
        message="Friday, February 10, 2023 at 5:57 PM"
        buttonText="Undo"
        duration={5000} // Se cierra después de 5 segundos
      />
    </div>
  );
}
