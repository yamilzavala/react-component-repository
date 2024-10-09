# Drag and Drop Component

This project features a **Drag and Drop** component built with **React**. It allows users to drag items between two lists.

## Features

- **Draggable Items**: Users can drag items from one list to another.
- **Two Lists**: Items can be moved between a source list and a target list.
- **Dynamic Updates**: The component updates the lists dynamically as items are dragged and dropped.

## Technologies Used

- **React**: For building the component.
- **JavaScript**: For handling drag and drop functionality and state management.

## Usage

1. **Drag Items**: Click and hold an item from the first list, then drag it over to the second list.
2. **Drop Items**: Release the mouse button to drop the item into the target list.
3. **Move Back**: You can also drag items from the second list back to the first.

### Example

Here’s how to use the `DragAndDrop` component:

```javascript
import DragAndDrop from './DragAndDrop';

function App() {
  return (
    <div>
      <DragAndDrop />
    </div>
  );
}

export default App;
