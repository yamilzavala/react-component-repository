# Autocomplete Component

This is a simple **autocomplete** component built with **React**. As the user types into the input field, suggestions based on a predefined list are filtered and displayed. The user can select one of the suggestions to auto-fill the input.

## Features

- **Real-time Suggestions**: The component filters and displays suggestions as the user types.
- **Selectable Suggestions**: Users can select a suggestion from the list to fill the input field.
- **Dynamic Filtering**: The list of suggestions is dynamically filtered based on the input.

## Technologies Used

- **React**: For building the functional component.
- **CSS**: For styling the suggestions dropdown and layout.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/autocomplete-component.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd autocomplete-component
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Usage

1. **Start typing**: As you type into the input field, the component will display a list of matching suggestions.
2. **Select a suggestion**: Click on any of the suggestions to auto-fill the input field with the selected value.
3. **Suggestions filter**: The suggestions list filters in real-time, based on the input value.

## Customization

- **Custom Suggestions**: The predefined suggestions list can be customized by modifying the `suggestions` array in the component.

Example:
```javascript
const suggestions = ["Orange", "Pineapple", "Mango", "Papaya"];
