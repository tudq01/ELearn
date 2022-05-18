import React from "react";

const Pagination = ({ resultsPerPage, totalResults, paginate ,currentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="pagin">
        {pageNumbers.map((number) => (
          <a onClick={() => {paginate(number)}} className={currentPage===number ? "active":"page-link"}>
            {number}
          </a>
        ))}
      </div>
    </>
  );
};

export default Pagination;
