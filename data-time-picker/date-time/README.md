# DateTime Picker Component

This project features a **DateTime Picker** component built with **React**. It allows users to select a date and time, combining them into a single Date object.

## Features

- **Date Selection**: Users can choose a date using a date input.
- **Time Selection**: Users can select a time using a time input.
- **Combined DateTime**: Displays the combined DateTime value once both date and time are selected.

## Technologies Used

- **React**: For building the component.
- **JavaScript**: For functionality and state management.

## Usage

1. **Select Date**: Use the date input to select a date.
2. **Select Time**: Use the time input to select a time.
3. **View Combined DateTime**: The combined DateTime will be displayed below the inputs.

### Example

Here’s how to use the `DateTimePickerComponent`:

```javascript
import DateTimePickerComponent from './DateTimePickerComponent';

function App() {
  return (
    <div>
      <DateTimePickerComponent />
    </div>
  );
}

export default App;
