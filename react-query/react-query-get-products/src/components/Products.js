import { useState } from "react";
import React, { Suspense } from "react";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";
import { useProducts } from "../apis/productsApi";

const Products = () => {
  const [page, setPage] = useState(1);
  const { error, loading, data } = useProducts(page);

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h2>Page: {page}</h2>
      <div>
        {data?.products?.map((product) => {
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <ProductItem product={product} />
            </Suspense>
          );
        })}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Pagination
          totalPages={data?.total / 10}
          currenPage={page}
          onChangePage={setPage}
        />
      </Suspense>
    </>
  );
};

export default Products;
