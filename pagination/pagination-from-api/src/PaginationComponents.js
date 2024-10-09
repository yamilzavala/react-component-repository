import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://dummyjson.com/recipes";

export default function PaginationComponents() {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [limit, setLimit] = useState(10);

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        `${url}?limit=${limit}&skip=${page * limit - limit}`
      );
      setRecipes(resp.data.recipes);
      const totalItems = resp.data.total;
      setTotalPages(Math.ceil(totalItems / limit));
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      {/* items */}
      <div>
        {recipes.map((item, idx) => {
          return <div key={idx}>{item.name}</div>;
        })}
      </div>
      {/* pagination */}
      <div>
        {[...Array(totalPages)].map((_, idx) => {
          const currPage = idx + 1;
          return (
            <button
              disabled={currPage === page}
              key={idx}
              onClick={() => handlePageChange(currPage)}
            >
              {currPage}
            </button>
          );
        })}
      </div>
    </div>
  );
}
