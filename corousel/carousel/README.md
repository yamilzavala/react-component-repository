# Image Carousel Component

This is a simple image carousel component built with **React**. It cycles through a set of images automatically every 2 seconds, with buttons to navigate manually between the images.

## Features

- **Automatic Image Cycling**: The carousel automatically moves to the next image every 2 seconds.
- **Manual Navigation**: Users can navigate to the previous or next image using the "prev" and "next" buttons.
- **Responsive Design**: The carousel layout is responsive and adapts to different screen sizes.

## Technologies Used

- **React**: For building the functional component.
- **CSS**: For styling the carousel and providing layout.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/image-carousel.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd image-carousel
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

1. On the homepage, the carousel will start automatically with the first image in the `imagesData` array.
2. You can manually navigate to the previous or next image by clicking the "prev" and "next" buttons below the image.
3. The carousel will continue to cycle through the images automatically every 2 seconds.

## Customization

- **Custom Image Set**: You can pass your own array of image URLs to the `Carousel` component through the `images` prop. If no prop is provided, it defaults to the `imagesData` array defined in the component.

Example:
```jsx
<Carousel images={['url1', 'url2', 'url3']} />
