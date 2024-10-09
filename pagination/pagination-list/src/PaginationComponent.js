import React, { useState } from "react";

const PaginationComponent = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(items.length / itemsPerPage);

  const pagesArr = Array.from({ length: pages }, (_, idx) => idx + 1);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {/* list */}
      <ul className="list">
        {currentItems.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
      {/* button pages */}
      <div className="container-btn">
        {pagesArr.map((_, idx) => (
          <button
            className={idx + 1 === currentPage ? "selected-btn btn" : "btn"}
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const items = Array.from({ length: 50 }, (_, idx) => `Item ${idx + 1}`);
export default () => <PaginationComponent items={items} itemsPerPage={10} />;
