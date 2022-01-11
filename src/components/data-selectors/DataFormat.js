import React, { useContext } from 'react'
import { Querycontext } from '../../context/QueryContext'

const DataFormat = () => {
    const { dataFormatFunction, htmlSimpleFunction } = useContext(Querycontext)

    const selectDataFormat = (e) => {
        if (e.target.value === 'simple-block') {
            dataFormatFunction('simple')
            htmlSimpleFunction('&block_mode=1')
        } else {
            dataFormatFunction(e.target.value)
            htmlSimpleFunction('')
        }
    }
    return (
        <div className="form-group my-3">
            <label>Returned Data Format</label>
            <select
                className="form-control custom-select"
                id="returnedData"
                onChange={selectDataFormat}
            >
                <option value="csv" default>
                    CSV
                </option>
                <option value="xml">XML</option>
                <option value="json">JSON</option>
                <option value="kml">KML</option>
                <option value="gpx">GPX</option>
                <option value="poi">POI CSV</option>
                <option value="simple-block">
                    Simple HTML (Block Elements)
                </option>
                <option value="simple">Simple HTML (Table)</option>
            </select>
        </div>
    )
}
export default DataFormat
