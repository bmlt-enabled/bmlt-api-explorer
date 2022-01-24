import React, { useContext } from 'react'
import { Querycontext } from '../../context/QueryContext'
import { getFormats } from './helpers'

const DataFormat = () => {
    const { dataFormatFunction, htmlSimpleFunction, dataQuery } =
        useContext(Querycontext)

    const formats = getFormats(dataQuery)

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
                {formats.map((format) => {
                    return (
                        <option value={format.value} key={format.value}>
                            {format.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
export default DataFormat
