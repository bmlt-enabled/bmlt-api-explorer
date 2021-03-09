import React from 'react'

function DataResponse() {


  function selectDataResponse(e) {
    console.log(e.target.value)
  }

  return (
    <div>
      <div className="form-group">
        <label>Response Request</label>
        <select className="form-control custom-select" onChange={selectDataResponse} >
          <option default>Direct Response URL</option>
        </select>
      </div>
    </div>
  )
}

export default DataResponse
