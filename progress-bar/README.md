# Frontend Technical Interview - Progress Bar Component

## Project Overview

In this technical exercise, you will be tasked with implementing a **Progress Bar** component in React. The progress bar will dynamically update its value from a starting point until completion, providing both visual and textual feedback to the user. You will need to ensure that the progress bar is accessible and responsive.

## Task Requirements

### 1. Progress Bar Component
- **Objective**: Implement a progress bar that gradually increases its percentage value and indicates when the process is completed.
- **Details**:
  - The progress bar should start from a specified minimum value (`MIN`) and increment until it reaches 100%.
  - Use the `useState` and `useEffect` hooks to manage the progress state and trigger the updates.
  - A progress value is updated every 50 milliseconds and should increase by 1% until it reaches 100%. If the progress surpasses 98%, the completion message should be displayed.
  - The progress bar should visually represent the current percentage, adjusting its width dynamically.
  - Ensure that the progress bar's background and text color change based on the progress value (e.g., if the percentage is greater than 49%, change the text color to white).

- **Accessibility**:
  - The progress bar must be keyboard and screen-reader accessible. Utilize `role="progressbar"` and `aria` attributes to ensure proper accessibility.

### 2. Implementation Guidance
- **Dynamic Styles**:
  - The width of the progress bar should be updated dynamically using CSS custom properties (`--width-progress`) to reflect the current progress value.
  - The text color within the progress bar should switch between black and white depending on the percentage.

- **Completion State**:
  - Once the progress reaches or exceeds 98%, stop the progress and display a message indicating the process is completed.
  - If the progress is still running, display a "Loading..." message.

- **Edge Cases**:
  - Ensure the progress cannot exceed 100% or drop below 0%.
  - The component should gracefully handle edge cases where the `value` prop is outside the valid range (`MIN` to `MAX`).

### Bonus:
- Allow the progress bar to accept an optional `value` prop that can be set manually (if not provided, the progress will start from `MIN`).
- Add a reset button that allows the user to restart the progress bar from its initial state.

### Tech Stack Requirements:
- **React**: Use functional components and hooks (`useState`, `useEffect`).
- **CSS**: Implement dynamic styles using custom properties for the progress bar's width and text color.

## Expected Deliverables:
- A fully functioning progress bar component that dynamically updates its progress and shows appropriate loading or completion messages.
- The progress bar should visually represent the percentage, and it should be accessible for screen readers.
- The code should be clean, well-commented, and follow React best practices.

### Evaluation Criteria:
- **Correctness**: The progress bar should meet the functional requirements.
- **Code Quality**: The code should be well-structured, clean, and easy to read.
- **User Experience**: The progress bar should provide clear feedback and transition smoothly between states (loading and completion).
- **Accessibility**: Proper use of `aria` attributes and role for screen-reader support.

---

Good luck! We look forward to seeing your implementation.
