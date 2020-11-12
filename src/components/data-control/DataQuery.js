import React from 'react'

function DataQuery() {
  return (
    <div>
      <div className="form-group">
        <label for="dataQueryResults">Get Results From</label>
        <select className="form-control" id="dataQueryResults">
          <option default>Meeting Search Results</option>
          <option default>Get Formats</option>
          <option default>Get Service Bodies</option>
          <option default>Get NAWS Format Dump</option>
          <option default>Get Server Information</option>
        </select>
      </div>
    </div>
  )
}

export default DataQuery
