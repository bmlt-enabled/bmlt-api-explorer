import React, {useEffect, useState} from 'react'

function DataFormat() {
  const [dataFormat, setDataFormat] = useState('csv')

  function selectDataFormat(e) {
    setDataFormat(e.target.value)
  }

  console.log(dataFormat)
  return (
    <div className="form-group my-3">
      <h5>Returned Data Format</h5>
      <select className="form-control" id="returnedData" onChange={selectDataFormat}>
        <option value="csv" default>CSV</option>
        <option value="xml" >XML</option>
        <option value="json" >JSON</option>
      </select>
    </div>
  )
}

export default DataFormat
