import PropTypes from "prop-types";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Results = ({ results }) => {
    return (
      <>
        {results.map((item, index) => (
          <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2 text-gray-800 relative pr-4">
                <span className="break-words">{item.item}</span>
                {item.details && (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 right-0 text-blue-500 hover:text-blue-700"
                        title="Click to view more details on TSA website"
                    >
                        <IoMdInformationCircleOutline className="text-xl" />
                    </a>
                )}
            </h3>
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