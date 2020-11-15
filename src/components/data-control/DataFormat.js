import React from 'react'

function DataFormat(props) {
  return (
    <div>
      <div className="form-group">
        <label>Returned Data Format</label>
        <select className="form-control" id="returnedData" onChange={props.onChange}>
          <option value="csv" default>CSV</option>
          <option value="xml" >XML</option>
          <option value="json" >JSON</option>
        </select>
      </div>
    </div>
  )
}

export default DataFormat
