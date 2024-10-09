//

import React, { Suspense } from "react";
//import Products from "./components/Products";

const Products = React.lazy(() => import("./components/Products"));

const App = () => {
  return (
    <div>
      <h1>Product List</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </div>
  );
};

export default App;
