const Pagination = ({ totalPages, currenPage, onChangePage }) => {
  const pages = Array.from({ length: totalPages }, (_, idx) => idx + 1);

  const nextPage = () => {
    onChangePage(currenPage + 1);
  };
  const prevPage = () => {
    onChangePage(currenPage - 1);
  };

  return (
    <>
      <button disabled={currenPage === 1} onClick={prevPage}>
        prev
      </button>

      {pages.map((page) => {
        return (
          <button
            style={{ color: currenPage === page ? "red" : "black" }}
            onClick={() => onChangePage(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={currenPage === pages[pages.length - 1]}
        onClick={nextPage}
      >
        next
      </button>
    </>
  );
};

export default Pagination;
