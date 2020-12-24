import React from 'react';

const SearchBox = ({ searchChange }) => {
  return(
    <div className="pa2">
      <input
      className="pa3 ba b--cyan bg-lightest-blue"
      type="search"
      placeholder="Search_Robots_here"
      onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
