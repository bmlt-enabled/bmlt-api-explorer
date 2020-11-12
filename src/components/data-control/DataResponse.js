import React from 'react'

function DataResponse() {
  return (
    <div>
      <div className="form-group">
        <label for="responseSelect">Response Request</label>
        <select className="form-control" id="responseSelect">
          <option default>Direct Response URL</option>
        </select>
      </div>
    </div>
  )
}

export default DataResponse
