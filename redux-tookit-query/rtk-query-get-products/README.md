Technical Test: Paginated Product List Using RTK Query

Objective:
####
Create a paginated product listing feature using React and Redux Toolkit Query (RTK Query). The feature should retrieve data from a provided API endpoint and implement pagination to browse through multiple pages of products.

Requirements:
API Integration:
####
You are required to fetch a list of products from an external API. The base URL for the API is: https://dummyjson.com/.
Use the createApi function from RTK Query to set up an API service that fetches products.
Each API call should fetch 10 products per page. Implement pagination with a skip parameter to skip products in increments of 10 (i.e., page 1 will skip 0 products, page 2 will skip 10 products, and so on).

Pagination Controls:
####
The application should have Next and Previous buttons to navigate between pages.
The user should be able to go back to the previous page unless they are on the first page.
The current page number should be displayed.

Loading and Error States:
####
While fetching data, show a loading state to the user (e.g., "Loading...").
If the API request fails, display an error message to the user (e.g., "Error: Unable to fetch products").

Store Configuration:
####
Use Redux Toolkit to configure the store.
Ensure that the RTK Query middleware is added to the store for caching and automated re-fetching.

React Component:
####
Create a Products component that fetches and displays the list of products.
Each product should display at least its title in a list format.
Implement pagination so that clicking Next fetches the next page of products, and clicking Previous fetches the previous page.

No External Libraries:
####
Use only React, Redux Toolkit, and RTK Query for this task. You are not allowed to use any external libraries for pagination.

Additional Notes:
####
The base URL and the query parameters required for the API are:
https://dummyjson.com/products?limit=10&skip=<number_of_products_to_skip>.
Your solution should be modular and maintainable.
Ensure that your components are clean, reusable, and follow good coding practices.

Evaluation Criteria:
####
Proper use of Redux Toolkit Query (RTK Query) for fetching and caching data.
Implementation of pagination with correct API calls and state management.
Handling loading and error states in a user-friendly way.
Clean and maintainable code structure, including appropriate use of hooks and state.
Ability to follow the requirements precisely and implement the features as described.
This should simulate a real-world technical task focused on handling API pagination, state management with Redux, and using RTK Query in a clean React setup.