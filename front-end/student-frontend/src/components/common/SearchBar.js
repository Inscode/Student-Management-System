import React from "react";

const SearchBar = ({search, setSearch} ) => {
  return (
    <div className="col-sm-6 mb-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control"
          type="search"
          role="searchBox"
          placeholder="Search Students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
