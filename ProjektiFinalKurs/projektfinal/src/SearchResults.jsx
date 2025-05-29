import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./searchi.css";
const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:5000/api/search?q=${encodeURIComponent(query)}`)
        .then((res) => setResults(res.data))

        .catch((err) => console.error("Search error:", err));
    }
  }, [query]);
  return (
    <div className="Container-kerkimi">
      <h2>Search Results for "{query}":</h2>
      <ul>
        {results.length > 0 ? (
          results.map((item) => <li key={item._id}>{item.itemName}</li>)
        ) : (
          <li>No results found.</li>
        )}
      </ul>
    </div>
  );
};
export default SearchResults;