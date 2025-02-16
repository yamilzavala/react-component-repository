// Convert the default array of items into a map with the item
// name as a key and the value as a boolean.
export function generateItemsMap(items) {
  return new Map(items.map((label) => [label, false]));
}

// Determine if the list has no selected items.
export function hasNoSelectedItems(items) {
  return Array.from(items.values()).filter((val) => Boolean(val)).length === 0;
}

// Transfer all items from a source list to a destination list.
export function transferAllItems(itemsSrc, setItemsSrc, itemsDst, setItemsDst) {
  setItemsDst(new Map([...itemsDst, ...itemsSrc]));
  setItemsSrc(new Map());
}

// Transfer selected items from a source list to a destination list.
export function transferSelectedItems(
  itemsSrc,
  setItemsSrc,
  itemsDst,
  setItemsDst
) {
  const newItemsSrc = new Map(itemsSrc);
  const newItemsDst = new Map(itemsDst);

  // Remove selected items from source list and add to the destination list.
  itemsSrc.forEach((value, key) => {
    if (!value) {
      return;
    }

    newItemsDst.set(key, value);
    newItemsSrc.delete(key);
  });
  setItemsSrc(newItemsSrc);
  setItemsDst(newItemsDst);
}
