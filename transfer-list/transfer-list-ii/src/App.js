import "./styles.css";

import { useState } from "react";
import {
  determineListSelectionState,
  generateItemsMap,
  transferSelectedItems,
} from "./helpers/helpers";
import { DEFAULT_ITEMS_LEFT, DEFAULT_ITEMS_RIGHT } from "./const/const";
import ItemList from "./components/ItemList";

export default function App() {
  const [itemsLeft, setItemsLeft] = useState(
    generateItemsMap(DEFAULT_ITEMS_LEFT)
  );
  const [itemsRight, setItemsRight] = useState(
    generateItemsMap(DEFAULT_ITEMS_RIGHT)
  );

  return (
    <div className="transfer-list">
      <ItemList items={itemsLeft} setItems={setItemsLeft} />
      <div className="transfer-list__actions">
        <button
          aria-label="Transfer selected items to left list"
          disabled={determineListSelectionState(itemsRight) === "none"}
          onClick={() => {
            transferSelectedItems(
              itemsRight,
              setItemsRight,
              itemsLeft,
              setItemsLeft
            );
          }}
        >
          <span aria-hidden={true}>&lt;</span>
        </button>
        <button
          aria-label="Transfer selected items to right list"
          disabled={determineListSelectionState(itemsLeft) === "none"}
          onClick={() => {
            transferSelectedItems(
              itemsLeft,
              setItemsLeft,
              itemsRight,
              setItemsRight
            );
          }}
        >
          <span aria-hidden={true}>&gt;</span>
        </button>
      </div>
      <ItemList items={itemsRight} setItems={setItemsRight} />
    </div>
  );
}
