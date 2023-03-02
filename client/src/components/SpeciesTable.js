import React, { useState, useEffect } from 'react';
import './SpeciesTable.css';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Pagination from './Pagination';

function SpeciesTable() {
  const [plants, setPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('scientific_name');

  useEffect(() => {
    fetch(`http://localhost:3001/api/plants?page=${currentPage}&searchTerm=${searchTerm}&searchOption=${searchOption}`)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data.plants);
        setTotalPages(data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage, searchTerm, searchOption]);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageButtons = () => {
    let buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        buttons.push(<span className="current-page" key={i}>{i}</span>);
      } else if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
        buttons.push(
          <button key={i} onClick={() => handlePageClick(i)}>
            {i}
          </button>
        );
      } else if (buttons.length > 0 && buttons[buttons.length - 1].props.children !== '...') {
        buttons.push(<span key={i}>...</span>);
      }
    }
    return buttons;
  };


  return (
    <div className="species-table">
      <div className="table-header">
        <h1>Plant Species</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={searchOption} onChange={(e) => setSearchOption(e.target.value)}>
            <option value="scientific_name">Scientific Name</option>
            <option value="common_name">Common Name</option>
            <option value="family">Family</option>
            <option value="family_common_name">Family Common Name</option>
          </select>
        </div>
      </div>
      <table className='species-table'>
        <TableHeader />
        <TableBody plants={plants} />
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        renderPageButtons={renderPageButtons}
      />
    </div>
  );
}

export default SpeciesTable;