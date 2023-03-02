import React from 'react';

function Pagination({ currentPage, totalPages, handlePrevClick, handleNextClick, renderPageButtons }) {
  return (
    <div className="pagination">
      <button
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <span>&#8592;</span> Prev
      </button>
      {renderPageButtons()}
      <button className="next" onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next <span>&#8594;</span>
      </button>
    </div>
  );
}

export default Pagination;