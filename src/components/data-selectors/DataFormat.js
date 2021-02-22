import React, {useContext} from 'react'
import {Querycontext} from '../../context/QueryContext'

function DataFormat() {
  const {dataFormatFunction} = useContext(Querycontext)

  function selectDataFormat(e) {
    dataFormatFunction(e.target.value)
  }

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
