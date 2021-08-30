import React, { useContext } from "react";
import { Querycontext } from "../../context/QueryContext";

function TextSearch() {
  const { textSearchFunction, searchTypeFunction } = useContext(Querycontext);

  function setTextSearch(e) {
    textSearchFunction(e.target.value);
  }

  function setSearchType(e) {
    searchTypeFunction(e.target.value);
  }

  return (
    <div className="form-group">
      <label htmlFor="textSearch">Text Search</label>
      <input
        type="text"
        className="form-control"
        id="textSearch"
        aria-describedby="textSearch"
        placeholder="Search..."
        onChange={setTextSearch}
      />
      <select
        className="form-control custom-select"
        style={{ marginTop: 10 }}
        onChange={setSearchType}
      >
        <option value={0} default>
          Do a General "Casual" Text Search
        </option>
        <option value={1}>Search for all the words</option>
        <option value={2}>Search for the Exact Text</option>
        <option value={3}>This is a Location</option>
      </select>
    </div>
  );
}

export default TextSearch;
