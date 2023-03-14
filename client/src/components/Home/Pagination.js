import React from 'react';
import './Pagination.css';

function Pagination({ currentPage, totalPages, handlePrevClick, handleNextClick, renderPageButtons }) {
  const disable = false;
  return (
    <div className="pagination">
      <button
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={handlePrevClick}
        disabled={currentPage === 1 || totalPages === 0}
      >
        <span>&#8592;</span> Prev
      </button>
      {renderPageButtons()}
      <button className="next" onClick={handleNextClick} disabled={currentPage === totalPages || totalPages === 0}>
        Next <span>&#8594;</span>
      </button>
    </div>
  );
}

export default Pagination;