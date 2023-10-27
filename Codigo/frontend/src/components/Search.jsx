import React from "react";

const Search = ({ search, setSearch }) => {
   return (
      <div className="search pt-2">
         <label className="flex flex-col mb-[1em]">
            <span className="font-bold mb-[0.3em] text-left">
               Buscar despesa:{" "}
            </span>
            <input
               className=" w-full box-border border-0 border-b-[1px] border-[#b3b1b1] bg-transparent focus:outline-0"
               type="text"
               value={search}
               placeholder="pesquisar"
               onChange={(e) => setSearch(e.target.value)}
            />
         </label>
      </div>
   );
};

export default Search;
