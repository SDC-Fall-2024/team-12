import React from "react";
import "../../styles/pagination.css";

const Pagination = ({ setPage, limit, page, tableDataLength }) => {
  const totalPages = Math.ceil(tableDataLength / limit);

  const renderPageNumbers = () => {
    let pageNumbers = [];
    pageNumbers.push(
      <a
        key={1}
        href="#"
        className={1 === page ? "active" : ""}
        onClick={() => changePageNumber(1)}
      >
        {1}
      </a>
    );
    let startPage, endPage;

    if (page <= 3) {
      startPage = 2;
      endPage = 4;
    } else if (page >= totalPages - 2) {
      startPage = totalPages - 3;
      endPage = totalPages - 1;
    } else {
      startPage = page - 1;
      endPage = page + 1;
    }

    if (startPage > 2) {
      pageNumbers.push(<span key="start-ellipsis">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i > 1 && i < totalPages) {
        pageNumbers.push(
          <a
            key={i}
            href="#"
            className={i === page ? "active" : ""}
            onClick={() => changePageNumber(i)}
          >
            {i}
          </a>
        );
      }
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push(<span key="end-ellipsis">...</span>);
    }

    if (totalPages > 1) {
      pageNumbers.push(
        <a
          key={totalPages}
          href="#"
          className={totalPages === page ? "active" : ""}
          onClick={() => changePageNumber(totalPages)}
        >
          {totalPages}
        </a>
      );
    }

    return pageNumbers;
  };

  const changePageNumber = (number) => {
    setPage(number);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="pagination">
      <a href="#" onClick={handlePreviousPage}>
        &laquo;
      </a>
      {renderPageNumbers()}
      <a href="#" onClick={handleNextPage}>
        &raquo;
      </a>
    </div>
  );
};

export default Pagination;
