import './Search.css';
import compassSVG from './svg/compass.svg';
import searchSVG from './svg/search.svg';


function Search({ setCurrentPage, searchTerm, setSearchTerm, searchOption, setSearchOption }) {
  return (

    <div className="table-header">
      <h1 className='explore-header'>
        <img className='svg' src={compassSVG} /> Explore
      </h1>
      <div className="search-box">
        <img className='svg' src={searchSVG} />
        <input
          className='search-input'
          type="text"
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1) }}
        />

        <select
          className="search-select"
          value={searchOption}
          onChange={(e) => { setSearchOption(e.target.value); setCurrentPage(1) }}
        >
          <option value="common_names">Common Name</option>
          <option value="scientific_name">Scientific Name</option>
          <option value="genus">Genus</option>
          <option value="family">Family</option>
          <option value="family_common_name">Family Common Name</option>
        </select>

      </div>
    </div>
  );
}

export default Search;