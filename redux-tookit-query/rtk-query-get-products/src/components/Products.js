import { useState } from "react";
import { useGetAllProductsQuery } from "../store/productsApi";
import React, { Suspense } from "react";

const ProductItem = React.lazy(() => import("./ProductItem"));
const Pagination = React.lazy(() => import("./Pagination"));

const Products = () => {
  const [page, setPage] = useState(1);
  const { error, loading, data } = useGetAllProductsQuery(page);

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
