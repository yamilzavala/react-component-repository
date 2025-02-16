import React, { useState } from "react";
import CheckboxItem from "./CheckboxItem";
import BulkSelectionCheckbox from "./BulkSelectionCheckbox";
import {
  countSelectedItems,
  determineListSelectionState,
  setAllItemsSelectionState,
} from "../helpers/helpers";

function ItemList({ items, setItems }) {
  const [newItem, setNewItem] = useState("");
  const listState = determineListSelectionState(items);

  return (
    <div className="transfer-list__section">
      <form
        onSubmit={(event) => {
          // Prevent page reload on form submission.
          event.preventDefault();

          // Trim value.
          const newItemValue = newItem.trim();

          // No-op if input is empty.
          if (newItemValue === "") {
            return;
          }

          // Add new item to list.
          const newItems = new Map(items);
          newItems.set(newItem, false);
          setItems(newItems);

          setNewItem("");
        }}
      >
        <input
          type="text"
          value={newItem}
          onChange={(event) => {
            setNewItem(event.target.value);
          }}
        />
      </form>
      <hr />
      <BulkSelectionCheckbox
        selectedCount={countSelectedItems(items)}
        totalCount={items.size}
        state={listState}
        disabled={items.size === 0}
        onChange={() => {
          switch (listState) {
            case "none":
            case "partial":
              setItems(setAllItemsSelectionState(items, true));
              break;
            case "all":
              setItems(setAllItemsSelectionState(items, false));
              break;
          }
        }}
      />
      <hr />
      <ul className="transfer-list__section__items">
        {Array.from(items.entries()).map(([label, checked]) => (
          <li key={label}>
            <CheckboxItem
              label={label}
              checked={checked}
              onChange={() => {
                const newItems = new Map(items);
                newItems.set(label, !items.get(label));
                setItems(newItems);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
