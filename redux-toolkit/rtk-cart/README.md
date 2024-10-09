# Shopping Cart Application

This is a simple shopping cart application built using **React** and **Redux Toolkit**. It demonstrates basic functionality such as adding items to the cart, removing them, and updating their quantity. The total price of items in the cart is also calculated dynamically.

## Features

- **Add Items to Cart**: Users can add a product to the cart. If the product already exists in the cart, its quantity is incremented.
- **Remove Items from Cart**: Users can remove a product from the cart.
- **Update Item Quantity**: Users can increase or decrease the quantity of items in the cart.
- **Total Price Calculation**: The total price of all items in the cart is calculated automatically based on the price and quantity of each item.

## Technologies Used

- **React**: For building the UI components.
- **Redux Toolkit**: For state management, including actions and reducers.
- **JavaScript**: Core language for logic implementation.
- **CSS**: For basic styling.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/shopping-cart-app.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd shopping-cart-app
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

1. On the homepage, click the "Add Product 1" button to add a product to the cart.
2. The cart will display the product's name, price, and quantity.
3. You can increase or decrease the product quantity by clicking the "+" or "-" buttons.
4. Click "Remove" to remove the product from the cart.
5. The total price will be dynamically updated based on the products in the cart.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

