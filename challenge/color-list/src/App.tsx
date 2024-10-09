import "./styles.css";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useCallback } from "react";
import Square from "./Square";

export type Color = {
  id: number | string;
  value: string;
};

type Log = {
  value: string;
  date: Date;
};

const initialStateColors: Color[] = [
  { id: 1, value: "red" },
  { id: 2, value: "green" },
  { id: 3, value: "blue" },
  { id: 4, value: "orange" },
];

function App() {
  const [colorList, setColorList] = useState<Color[]>(initialStateColors);
  const [log, setLog] = useState<Log[]>([]);

  function createNewEl(colorValue: string) {
    return { id: +new Date().getTime(), value: colorValue };
  }

  function handleClick(color: Color) {
    if (color.value === "green") {
      const newEl = createNewEl("red");
      const newState = colorList.map((currColor) =>
        currColor.id === color.id ? { ...currColor, value: "red" } : currColor
      );
      newState.push(newEl);
      setColorList(newState);
      setLog([...log, { value: "update green", date: new Date() }]);
    } else if (color.value === "red") {
      const colorId = color.id;
      const newState = colorList.filter((color) => color.id !== colorId);
      setColorList(newState);
      setLog([...log, { value: "delete red", date: new Date() }]);
    }
  }

  const handleClickMemoized = useCallback(handleClick, [colorList]);

  function resetList() {
    setColorList(initialStateColors);
  }

  return (
    <div className="container">
      {colorList.map((color) => {
        return (
          <Square
            key={color.id}
            color={color}
            handleClick={handleClickMemoized}
          />
        );
      })}
      <button onClick={resetList}>reset list</button>
      {log.length ? (
        <div>
          <p>logs</p>
          {log.map((currLog) => (
            <p key={Math.random() * 1000}>
              {currLog.value} - {String(currLog.date)}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
