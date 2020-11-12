import React from 'react'

function DataFormat() {
  return (
    <div>
      <div className="form-group">
        <label for="returnedData">Returned Data Format</label>
        <select className="form-control" id="returnedData">
          <option default>CSV</option>
          <option default>XML</option>
          <option default>JSON</option>
        </select>
      </div>
    </div>
  )
}

export default DataFormat
