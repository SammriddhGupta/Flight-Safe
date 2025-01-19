import { useState, useEffect } from "react";
import "./index.css";
import { db } from "./firebase";
import { collection, query, getDocs } from "firebase/firestore";
import Search from "./components/Search";
import Filters from "./components/Filters";
import Results from "./components/Results";

const App = () => {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ carryOn: "", checked: "" });

  const fetchData = async () => {
    const q = query(collection(db, "tsa_rules_all"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    setResults(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({ carryOn: "", checked: "" });
  };

  const filteredResults = results.filter((item) => {
    const matchesSearch = item.item.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCarryOn = filters.carryOn ? item.carryOn === filters.carryOn : true;
    const matchesChecked = filters.checked ? item.checked === filters.checked : true;
    return matchesSearch && matchesCarryOn && matchesChecked;
  });

  return (
    <div>
      <div className="p-4">

          <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text">Stay Flight Safe</h1>

          <div className="flex flex-col items-center mb-6">
            <Search onSearch={handleSearch} /> 
            <Filters
              onFilter={handleFilter}
              onClearFilters={handleClearFilters}
              filters={filters}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            <Results results={filteredResults} />
          </div>
      </div>

      <footer className="mt-10 py-4 text-center bg-gray-100 text-gray-600 border-t">
          <p>© {new Date().getFullYear()} Stay Flight Safe. All rights reserved.</p>
      </footer>

    </div>
    
  );
};

export default App;