import React, { useState, useEffect } from 'react';
import './SpeciesTable.css';

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
      } else if (buttons.length > 0 && buttons[buttons.length - 1].key !== 'ellipsis') {
        buttons.push(<span key="ellipsis">...</span>);
      }
    }

    return buttons;
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const filteredPlants = plants.filter((plant) =>
    plant[searchOption].toLowerCase().includes(searchTerm.toLowerCase())
  ).slice((currentPage - 1) * 10, currentPage * 10);

  return (
    <div className='centeringThings'>
      <h2>Species Table</h2>

      <div className='search'>
        <input type='text' placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select value={searchOption} onChange={(e) => setSearchOption(e.target.value)}>
          <option value='scientific_name'>Scientific Name</option>
          <option value='common_name'>Common Name</option>
          <option value='family'>Family</option>
          <option value='family_common_name'>Family Common Name</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>


      <table align='center'>
        <thead>
          <tr>
            <th>Scientific Name</th>
            <th>Common Name</th>
            <th>Family</th>
            <th>Family Common Name</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
            <tr key={plant.id}>
              <td>{plant.scientific_name}</td>
              <td>{plant.common_name}</td>
              <td>{plant.family}</td>
              <td>{plant.family_common_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
    </div>
  );
}

export default SpeciesTable;