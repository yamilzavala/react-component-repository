# Frontend Technical Interview - Breadcrumbs and Home Page Feature

## Project Overview

In this technical exercise, you'll be tasked with implementing two main features in a React application:

1. **Breadcrumbs Navigation**: This component dynamically generates breadcrumb navigation based on the current URL path. It should enable the user to click on any breadcrumb segment to navigate to that part of the application.

2. **Home Page Product Display**: The home page will fetch a list of products from a public API and display a limited number of trending products in a grid format. Each product links to its individual product page, and there should be an option to view all available products.

## Task Requirements

### 1. Breadcrumbs Component
- **Objective**: Implement a dynamic breadcrumb component based on the URL path.
- **Details**:
  - Use `react-router-dom`'s `useLocation()` hook to obtain the current path.
  - Split the path and generate breadcrumb links for each segment of the path.
  - The first breadcrumb link should always direct to the "Home" page (`/`).
  - The breadcrumb links should be clickable, except for the last segment, which should be displayed as plain text.
  - The component should handle paths of varying lengths, e.g., `/`, `/category`, `/category/product`, etc.

- **Implementation Guidance**:
  - You will need to handle conditional rendering to differentiate the clickable links and the last item in the breadcrumb.
  - Update the breadcrumb trail as the URL path changes dynamically.

### 2. Home Page Component
- **Objective**: Fetch and display a list of products from a public API in a grid format.
- **Details**:
  - Fetch the first 6 products from the [Dummy JSON API](https://dummyjson.com/products) and display them on the home page.
  - Each product should display an image, title, and a link to its individual product page.
  - Provide a button labeled "View all products" that navigates to a `/products` route to show all available products.
  - Use the `useEffect` hook to fetch the product data asynchronously when the component mounts.
  - Display an error message if the data fetch fails.

- **Implementation Guidance**:
  - Handle the API request using `fetch()` and store the product data in a state using React's `useState` hook.
  - Render the fetched data in a grid layout where each product is displayed as a card.
  - The "View all products" button should be a `Link` from `react-router-dom` to navigate users to the full product listing.

### Bonus:
- Optimize the loading state (e.g., show a loading spinner or placeholder content while the data is being fetched).
- Implement error handling that displays a user-friendly message when the product data fails to load.

### Tech Stack Requirements:
- **React**: Use functional components, hooks (`useState`, `useEffect`), and `react-router-dom` for routing.
- **CSS**: Implement basic styles to display the products in a grid and breadcrumbs in a horizontal layout.

## Expected Deliverables
- A fully functioning Breadcrumb component that dynamically updates as per the current URL.
- A Home page component that displays a grid of trending products fetched from an external API.
- Clear and maintainable code, with comments explaining key logic where necessary.

### Evaluation Criteria:
- **Correctness**: The solution should meet the task requirements.
- **Code Quality**: The code should be clean, well-structured, and follow React best practices.
- **Error Handling**: Proper handling of potential errors, such as API fetch failures.
- **User Experience**: Smooth navigation between pages and a good user interface for product display.

---

Good luck! We look forward to seeing your implementation.
