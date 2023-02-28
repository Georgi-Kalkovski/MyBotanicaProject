import React, { useState, useEffect } from 'react';

function SpeciesTable() {
  const [plants, setPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(35800);

  useEffect(() => {
    fetch(`http://localhost:3001/api/plants?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data.plants);
        setTotalPages(data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

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

  console.log(plants)

  return (
    <div>
      <h2>Species Table</h2>
      <table>
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
      <button onClick={handlePrevClick}>Prev</button>
      <span>{currentPage}</span>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default SpeciesTable;
