import "./selectableGrid.css";
import { useState, useCallback } from "react";
/*
  Map array one dimention in mapped in array two dimentions:
  row => Math.floor(position / col)
  col => position % col
  index => row * cols + col
*/
const SelectableGrid = ({ cols, rows }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const array = [...new Array(rows * cols).keys()];

  const handleMouseDown = (boxNumber) => {
    setIsMouseDown(true);
    setSelectedBoxes([boxNumber]);
  };

  const handleMouseEnter = useCallback(
    (boxNumber) => {
      if (isMouseDown) {
        const startBox = selectedBoxes[0];
        const endBox = boxNumber;

        const startRow = Math.floor(startBox / cols);
        const endRow = Math.floor(endBox / cols);

        const startCol = startBox % cols;
        const endCol = endBox % cols;

        const minRow = Math.min(startRow, endRow);
        const maxRow = Math.max(startRow, endRow);

        const minCol = Math.min(startCol, endCol);
        const maxCol = Math.max(startCol, endCol);

        const selected = [];
        for (let row = minRow; row <= maxRow; row++) {
          for (let col = minCol; col <= maxCol; col++) {
            selected.push(row * cols + col);
          }
        }

        setSelectedBoxes(selected);
      }
    },
    [isMouseDown]
  );

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div
      className="grid"
      style={{ "--cols": cols, "--rows": rows }}
      onMouseUp={handleMouseUp}
    >
      {array.map((_, i) => {
        return (
          <div
            key={i}
            className={`box ${selectedBoxes.includes(i) ? "selected" : ""}`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseDown={() => handleMouseDown(i)}
          >
            {i}
          </div>
        );
      })}
    </div>
  );
};

export default SelectableGrid;
