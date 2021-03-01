import React, {useContext, useState} from 'react'
import {Querycontext} from '../../context/QueryContext'

function DataFormat() {
  const {dataFormatFunction, htmlSimpleFunction} = useContext(Querycontext)
  const [queryString, setQueryString] = useState('');

  function selectDataFormat(e) {
    if(e.target.value === "simple-block") {
      dataFormatFunction('simple');
      htmlSimpleFunction('&block_mode=1');
    } else {
      dataFormatFunction(e.target.value)
      htmlSimpleFunction('');
    }
  }
  return (
    <div className="form-group my-3">
      <h5>Returned Data Format</h5>
      <select className="form-control" id="returnedData" onChange={selectDataFormat}>
        <option value="csv"default>CSV</option>
        <option value="xml">XML</option>
        <option value="json">JSON</option>
        <option value="kml">KML</option>
        <option value="gpx">GPX</option>
        <option value="poi">POI CSV</option>
        <option value="simple-block">Simple HTML (Block Elements)</option>
        <option value="simple">Simple HTML (Table)</option>
      </select>
    </div>
  )
}
{/* <option value="simple">Simple HTML (Block Elements)</option>//&block_mode=1 */}
export default DataFormat
