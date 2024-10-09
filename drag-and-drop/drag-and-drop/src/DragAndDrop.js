import React, { useState } from "react";

export default function DragAndDrop() {
  const [items, setItems] = useState(["item 1", "item 2", "item 3", "item 4"]);
  const [droppedItems, setDroppedItems] = useState([]);

  function handleDragStart(e, item) {
    e.dataTransfer.setData("text/plain", item);
  }

  function handleDrop(e, target) {
    const item = e.dataTransfer.getData("text/plain");

    if (target === "list-2") {
      setDroppedItems((prev) => [...prev, item]);
      setItems((prev) => prev.filter((i) => i !== item));
    } else {
      setItems((prev) => [...prev, item]);
      setDroppedItems((prev) => prev.filter((i) => i !== item));
    }
  }

  return (
    <div>
      {/* list 1 */}
      <div
        className="list-1"
        onDrop={(e) => handleDrop(e, "list-1")}
        onDragOver={(e) => e.preventDefault()}
      >
        <p>Drop here</p>
        <ul>
          {items.map((currItem, idx) => {
            return (
              <li
                draggable
                onDragStart={(e) => handleDragStart(e, currItem)}
                key={idx}
              >
                {currItem}
              </li>
            );
          })}
        </ul>
      </div>
      {/* list 2 */}
      <div
        onDrop={(e) => handleDrop(e, "list-2")}
        onDragOver={(e) => e.preventDefault()}
        className="list-2"
      >
        <p>Drop here</p>
        <ul>
          {droppedItems.map((item, idx) => {
            return (
              <li
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                key={idx}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
