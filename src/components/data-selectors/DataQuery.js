import React from 'react'

function DataQuery(props) {
  return (
    <div>
      <div className="form-group">
        <h5>Get Results From</h5>
        <select className="form-control" id="dataQueryResults" onChange={props.onChange}>
          <option value="GetSearchResults" default>Meeting Search Results</option>
          <option value="GetFormats">Get Formats</option>
          <option value="GetServiceBodies">Get Service Bodies</option>
          <option value="GetServerInfo">Get Server Information</option>
        </select>
      </div>
    </div>
  )
}

export default DataQuery