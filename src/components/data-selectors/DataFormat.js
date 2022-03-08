import React, { useContext, useEffect, useState } from 'react'
import { Querycontext } from '../../context/QueryContext'
import { getFormats } from './helpers'

const DataFormat = ({ showXMLSection }) => {
    const {
        dataFormatFunction,
        htmlSimpleFunction,
        dataQuery,
        XMLCheckBoxesFunction,
    } = useContext(Querycontext)
    const [checkBox, setCheckBox] = useState([])

    const formats = getFormats(dataQuery)

    const checkedBox = (e) => {
        if (
            e.target.value === '0' &&
            checkBox.length === 2 &&
            !e.currentTarget.checked
        ) {
            setCheckBox([])
            document.getElementById('1').checked = false
            return
        }
        if (e.currentTarget.checked) {
            setCheckBox([...checkBox, e.target.value])
        } else {
            const newArr = checkBox.filter((item) => item !== e.target.value)
            setCheckBox(newArr)
        }
    }

    const selectDataFormat = (e) => {
        if (e.target.value === 'simple-block') {
            dataFormatFunction('simple')
            htmlSimpleFunction('&block_mode=1')
        } else {
            dataFormatFunction(e.target.value)
            htmlSimpleFunction('')
        }
    }

    useEffect(() => {
        let contextString = ''

        if (checkBox.includes('0')) {
            contextString += '&get_used_formats=1'
        } else {
            contextString = contextString.replace('&get_used_formats=1', '')
        }

        if (checkBox.includes('1')) {
            contextString += '&get_formats_only=1'
        } else {
            contextString = contextString.replace('&get_formats_only=1', '')
        }

        XMLCheckBoxesFunction(contextString)
    }, [checkBox])

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
            {showXMLSection && (
                <div>
                    <div className="mt-3">
                        <input
                            type="checkbox"
                            id="0"
                            value="0"
                            onChange={checkedBox}
                        />
                        <label className="ml-2">
                            Get the Formats Used In the Results
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            type="checkbox"
                            id="1"
                            value="1"
                            onChange={checkedBox}
                            disabled={!checkBox.includes('0')}
                        />
                        <label className="ml-2">Get just the formats</label>
                    </div>
                </div>
            )}
        </div>
    )
}
export default DataFormat
