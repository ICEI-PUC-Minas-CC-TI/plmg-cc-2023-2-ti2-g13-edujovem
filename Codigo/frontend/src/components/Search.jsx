import React from "react";

const Search = ({ search, setSearch }) => {
   return (
      <div className="search">
         <input
            type="text"
            value={search}
            placeholder="pesquisar"
            onChange={(e) => setSearch(e.target.value)}
         />
      </div>
   );
};

export default Search;
