import PropTypes from "prop-types";

const Filters = ({ onFilter, onClearFilters, filters }) => {
  const handleFilter = (e) => {
    const { name, checked } = e.target;
    onFilter(name, checked ? "Yes" : "");
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
        <div className="flex space-x-6">
            <label className="flex items-center text-sm font-medium">
            <input
                type="checkbox"
                name="carryOn"
                checked={filters.carryOn === "Yes"}
                onChange={handleFilter}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            Carry-On Allowed
            </label>
            <label className="flex items-center text-sm font-medium">
            <input
                type="checkbox"
                name="checked"
                checked={filters.checked === "Yes"}
                onChange={handleFilter}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            Checked Luggage Allowed
            </label>
        </div>
        <button
            onClick={onClearFilters}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
            Clear Filters
        </button>
    </div>

  );
};

Filters.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    carryOn: PropTypes.string,
    checked: PropTypes.string,
  }).isRequired,
};

export default Filters;