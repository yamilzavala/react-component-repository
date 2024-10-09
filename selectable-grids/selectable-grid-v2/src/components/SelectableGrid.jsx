import { useState, useCallback } from "react";
import "./selectableGrid.css";
//notes for map one dimention array into two dimention array
//matrix = rows*cols
//indexValue = row * cols + col
//row = Math.floor(index / cols)
//col = index % cols

const SelectableGrid = ({ rows, cols }) => {
  const [selectedCells, setSelectedCells] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (cellNumber) => {
    setIsMouseDown(true);
    setSelectedCells([cellNumber]);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseEnter = useCallback(
    (cellNumber) => {
      if (isMouseDown) {
        //start and end points
        const startBox = selectedCells[0];
        const endBox = cellNumber;

        //horizontal bounderies
        const startRowBoundery = Math.floor(startBox / cols);
        const endRowBoundery = Math.floor(endBox / cols);

        //vertical bounderies
        const startColBoundery = startBox % cols;
        const endColBoundery = endBox % cols;

        //order selection
        const maxRowBoundery = Math.max(startRowBoundery, endRowBoundery);
        const minRowBoundery = Math.min(startRowBoundery, endRowBoundery);

        const maxColBoundery = Math.max(startColBoundery, endColBoundery);
        const minColBoundery = Math.min(startColBoundery, endColBoundery);

        //selection
        const selectedBoxes = [];
        for (let row = minRowBoundery; row <= maxRowBoundery; row++) {
          for (let col = minColBoundery; col <= maxColBoundery; col++) {
            selectedBoxes.push(row * cols + col);
          }
        }
        setSelectedCells(selectedBoxes);
      }
    },
    [isMouseDown]
  );

  const renderedTable = [...new Array(rows * cols).keys()].map((_, i) => {
    return (
      <div
        onMouseDown={() => handleMouseDown(i)}
        onMouseEnter={() => handleMouseEnter(i)}
        className={`box ${selectedCells.includes(i) ? "selected" : ""}`}
      >
        {i}
      </div>
    );
  });

  return (
    <div
      onMouseUp={() => handleMouseUp()}
      className="grid"
      style={{ "--cols": cols, "--rows": rows }}
    >
      {renderedTable}
    </div>
  );
};

export default SelectableGrid;
