import "./styles.css";
import { useState, useEffect, useCallback } from "react";
import ProgressBar from './components/ProgressBar';

const INITIAL_PROGRESSION = [0];
const CONCURRENCY_LIMIT = 3;
const INCREMENT_VALUE = 0.5;
const INTERVAL_MS = 10;

export default function App() {
  const [progression, setProgression] = useState(INITIAL_PROGRESSION);
  const [isRunning, setIsRunning] = useState(false);

  // Función para actualizar la progresión con concurrencia limitada
  const updateProgress = useCallback(() => {
    setProgression((prev) => {
      // Obtener las barras que aún no han llegado a 100%
      const nonFullBars = prev
        .map((value, index) => ({ value, index }))
        .filter(({ value }) => value < 100);

      // Si todas están llenas, no hacemos nada
      if (nonFullBars.length === 0) return prev;

      // Seleccionamos las primeras `CONCURRENCY_LIMIT` barras para avanzar
      const barsToIncrement = nonFullBars.slice(0, CONCURRENCY_LIMIT);

      // Creamos un nuevo array actualizando solo las barras seleccionadas
      return prev.map((value, index) =>
        barsToIncrement.some((bar) => bar.index === index)
          ? Math.min(value + INCREMENT_VALUE, 100) // Evitar que pase del 100%
          : value
      );
    });
  }, []);

  // Manejo del temporizador con useEffect
  useEffect(() => {
    if (!isRunning) return;
    
    const timer = setInterval(updateProgress, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isRunning, updateProgress]);

  // Función para agregar una nueva barra de progreso
  const appendBar = () => setProgression((prev) => [...prev, 0]);

  // Función para resetear todo
  const reset = () => {
    setIsRunning(false);
    setProgression(INITIAL_PROGRESSION);
  };

  return (
    <div className="wrapper">
      <div className="buttons">
        <button onClick={appendBar}>Add</button>
        <button onClick={() => setIsRunning((prev) => !prev)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="bars">
        {progression.map((progress, index) => (
          <ProgressBar key={index} progress={progress} />
        ))}
      </div>
      <pre>{JSON.stringify({ isRunning, progression }, null, 2)}</pre>
    </div>
  );
}
