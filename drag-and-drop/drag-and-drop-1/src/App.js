import React, { useState } from "react";
import DraggableItemComponent from "./DraggableItemComponent";
import "./styles.css";

const itemList = ["Item 1", "Item 2", "Item 3", "Item 4"];

export default function App() {
  const [items, setItems] = useState(itemList);

  return (
    <div className="App container">
      <h1>Drag and Drop List</h1>
      <ul className="list">
        {items.map((item, idx) => (
          <DraggableItemComponent
            index={idx}
            item={item}
            items={items}
            setItems={setItems}
            key={idx}
          />
        ))}
      </ul>
    </div>
  );
}
