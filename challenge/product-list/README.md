# Product Listing & Detail Page with Infinite Scroll and Ratings

## Project Overview

This project involves building a simple **Product Listing** application where users can view a list of products, load more products on scroll (infinite scroll), and navigate to a **Product Detail** page. Users can also rate products directly on the product detail page, with the ratings being updated in the global state.

### Key Features:
- **Infinite Scroll**: The product list will load more items as the user scrolls to the bottom of the page.
- **Product Detail**: Clicking on any product will show its details on a separate page.
- **Star Rating System**: Users can rate products on the product detail page, and the rating will be reflected in the global state.
- **Navigation**: Uses React Router for navigating between the product list and product details.
- **Global State Management**: The application uses Redux Toolkit for state management.

## Task Breakdown

### 1. **Routing Setup**
- **App.jsx**:
  - The app uses `React Router` for navigating between the **ProductList** and **ProductDetail** pages.
  - The root path (`"/"`) displays the **ProductList** component.
  - The dynamic path (`"/product/:id"`) shows the **ProductDetail** component based on the product ID.

### 2. **Global State Management (Redux Toolkit)**
- **store/store.js**:
  - The Redux store is set up using `configureStore` from Redux Toolkit.
  - It includes the `productsReducer` to manage product-related state (products list, status, pagination).

- **store/productsSlice.js**:
  - A slice named `products` is created to handle fetching products and updating ratings.
  - **`fetchProducts`**: This async action uses `axios` to fetch products from a fake API (`https://fakestoreapi.com/products`) with pagination.
  - **`updateProductRating`**: A reducer is implemented to update the rating of a specific product based on the ID.
  - The product list and current page number are stored in the state.

### 3. **Star Rating Component**
- **StarRating.jsx**:
  - A reusable component to display and update product ratings.
  - The component renders five clickable stars. Clicking on a star will call `onChange` with the selected rating, allowing rating updates.
  - The color of each star is dynamic, based on the current rating (gold for selected stars, gray for others).

### 4. **Product Listing with Infinite Scroll**
- **ProductList.jsx**:
  - On component mount, the `fetchProducts` action is dispatched to load the initial set of products.
  - The `handleScroll` function listens for page scroll events. When the user reaches the bottom of the page, more products are fetched and appended to the existing list.
  - The products are displayed using the **ProductItem** component, and each product is clickable, navigating to the product details page.

- **ProductItem.jsx**:
  - A functional component that displays a product's image, title, description, and rating (using the `StarRating` component).

### 5. **Product Detail Page**
- **ProductDetail.jsx**:
  - The detail page fetches the product by ID from the Redux state using `useParams` (from React Router).
  - The user can view the product details and change the rating via the `StarRating` component. The rating is updated in the Redux state by dispatching the `updateProductRating` action.
  - A button is provided to navigate back to the product list.

## Additional Features:
### 1. **Infinite Scroll Behavior**
- When the user scrolls down and reaches the bottom of the page, more products are automatically loaded until all available products have been fetched.

### 2. **Redux State for Ratings**
- Ratings are updated and persisted in the global state. When the user updates the rating on the product detail page, it immediately reflects across the app, including the product list.

## Technical Details

### State Management:
- **Redux Toolkit** is used to manage product state globally.
  - The state holds the product list, current loading status (`idle`, `loading`), and current page for pagination.
  - **Reducers**:
    - `fetchProducts`: Handles asynchronous fetching of products and updates the product list.
    - `updateProductRating`: Updates a product’s rating based on user input.

### Thunk for Async Calls:
- `fetchProducts`: Fetches products from the `fakestoreapi` with pagination (10 products per page).
- The results from each API call are appended to the existing products array to enable infinite scroll.

### Routing:
- The app uses **React Router** for client-side navigation:
  - The `ProductList` is the default page, and individual products can be clicked to navigate to the `ProductDetail` page.
  
### Styling:
- Basic CSS is used for the layout and styling of the progress bar and product items.
- The progress bar's width is dynamically controlled via inline styles, which use a CSS custom property (`--width-progress`).

## Running the Project

1. **Install Dependencies**:
   ```bash
   npm install
