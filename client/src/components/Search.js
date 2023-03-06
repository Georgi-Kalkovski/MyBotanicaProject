
function Search({ searchTerm, setSearchTerm, searchOption, setSearchOption }) {
  return (

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
  );
}

export default Search;