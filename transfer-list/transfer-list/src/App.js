import { useState } from "react";
import {
  generateItemsMap,
  hasNoSelectedItems,
  transferAllItems,
  transferSelectedItems,
} from "./helpers/helpers";
import { DEFAULT_ITEMS_LEFT, DEFAULT_ITEMS_RIGHT } from "./consts/const";
import ItemList from "./components/ItemList";
import "./styles.css";

const App = () => {
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
        {/* << */}
        <button
          aria-label="Transfer all items to left list"
          disabled={itemsRight.size === 0}
          onClick={() => {
            transferAllItems(
              itemsRight,
              setItemsRight,
              itemsLeft,
              setItemsLeft
            );
          }}
        >
          <span aria-hidden={true}>&lt;&lt;</span>
        </button>

        {/* < */}
        <button
          aria-label="Transfer selected items to left list"
          disabled={hasNoSelectedItems(itemsRight)}
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

        {/* > */}
        <button
          aria-label="Transfer selected items to right list"
          disabled={hasNoSelectedItems(itemsLeft)}
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

        {/* >> */}
        <button
          aria-label="Transfer all items to right list"
          disabled={itemsLeft.size === 0}
          onClick={() => {
            transferAllItems(
              itemsLeft,
              setItemsLeft,
              itemsRight,
              setItemsRight
            );
          }}
        >
          <span aria-hidden={true}>&gt;&gt;</span>
        </button>
      </div>
      <ItemList items={itemsRight} setItems={setItemsRight} />
    </div>
  );
};

export default App;
