import PropTypes from "prop-types";

const Results = ({ results }) => {
    return (
      <>
        {results.map((item, index) => (
          <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2 text-gray-800">{item.item}</h3>
            <p className="text-sm text-gray-600"><span className="font-semibold">Carry-On:</span> {item.carryOn}</p>
            <p className="text-sm text-gray-600"><span className="font-semibold">Checked:</span> {item.checked}</p>
          </div>
        ))}
      </>
    );
  };

Results.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.shape({
        item: PropTypes.string.isRequired,
        carryOn: PropTypes.string.isRequired,
        checked: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Results;