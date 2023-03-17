import React, { useState, useEffect } from 'react';
import Search from './Home/Search';
import Body from './Home/Body';
import Pagination from './Home/Pagination';
import './Home.css';

function Home() {
  const [species, setSpecies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');
  const [searchOption, setSearchOption] = useState(localStorage.getItem('searchOption') || 'common_name');

  const search = window.location.pathname.split('/')[2];
  const option = window.location.pathname.split('/')[1];
  
  if (option == 'family' || option == 'genus') {
    localStorage.setItem('searchTerm', search);
    localStorage.setItem('searchOption', option);
  } else {
    localStorage.setItem('searchTerm', '');
    localStorage.setItem('searchOption', 'common_name');
  }

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('searchOption', searchOption);
  }, [searchTerm, searchOption]);

  useEffect(() => {
    fetch(`http://localhost:3001/api?page=${currentPage}&searchTerm=${searchTerm}&searchOption=${searchOption}`)
      .then((res) => res.json())
      .then((data) => {
        setSpecies(data.species);
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
    const buttons = [];
    if (species.length > 0) {
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
          buttons.push(<span key={i} className="pagination-dots">...</span>);
        }
      }
    }
    return buttons;
  };


  return (
    <div className='species-table'>
      <div>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchOption={searchOption}
          setSearchOption={setSearchOption}
          setCurrentPage={setCurrentPage}
        />

        <table className='species-container'>
          <Body species={species} />
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          renderPageButtons={renderPageButtons}
        />
      </div>
    </div>
  );
}

export default Home;
