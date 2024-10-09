# Modal Component

This project features a **Modal** component built with **React**. It allows you to display content in a dialog box that overlays the main content of the application.

## Features

- **Open/Close Functionality**: Users can open and close the modal using a button.
- **Overlay Effect**: The modal dims the background content, drawing attention to the modal content.
- **Customizable Content**: You can pass any content as children to the modal.

## Technologies Used

- **React**: For building the component.
- **TypeScript**: For type safety and improved developer experience.
- **CSS**: For styling the modal and its overlay.

## Usage

1. **Open Modal**: Click the "open modal" button to display the modal.
2. **Close Modal**: Click the close button (`x`) or click outside the modal to close it.

### Example

Here’s how to use the `ContainerModal` component:

```javascript
import ContainerModal from './ContainerModal';

function App() {
  return (
    <div>
      <ContainerModal />
    </div>
  );
}

export default App;
