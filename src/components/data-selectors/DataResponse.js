import React from 'react'

function DataResponse() {


  function selectDataResponse(e) {
    console.log(e.target.value)
  }

  return (
    <div>
      <div className="form-group">
        <h5>Response Request</h5>
        <select className="form-control" onChange={selectDataResponse} >
          <option default>Direct Response URL</option>
        </select>
      </div>
    </div>
  )
}

export default DataResponse
