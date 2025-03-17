import { Search as SearchIcon } from "lucide-react";

const Search = ({ searchText, onSearch }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for restaurants"
          className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-black placeholder-gray-500"
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
        />  
        <button
          onClick={() => onSearch(searchText)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500 transition-colors"
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Search;
