import React from "react";

export default function DraggableItemComponent({
  index,
  item,
  items,
  setItems,
}) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const draggedIndexItem = e.dataTransfer.getData("text");
    const newOrderItems = [...items];
    const itemDragged = newOrderItems.splice(draggedIndexItem, 1)[0];
    newOrderItems.splice(index, 0, itemDragged);
    setItems(newOrderItems);
  };

  return (
    <li
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {item}
    </li>
  );
}
