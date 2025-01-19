import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");


  const debouncedSearch = useMemo(
    () => debounce((q) => onSearch(q), 300),
    [onSearch]
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    debouncedSearch(value.toLowerCase());
  };

  const handleClearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <form className="w-full max-w-md relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for an item..."
          value={query}
          onChange={handleChange}
          className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {query && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 text-lg focus:outline-none"
          >
            &#x2715;
          </button>
        )}
      </div>
    </form>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
