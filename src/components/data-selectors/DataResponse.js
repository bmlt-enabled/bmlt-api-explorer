import React, { useContext, useState, useEffect } from 'react'
import { Querycontext } from '../../context/QueryContext'

const DataResponse = () => {
    const { selectedResponseFunction, checkedBoxesStringFunction } =
        useContext(Querycontext)
    const [currentSelection, setCurrentSelection] = useState('')
    const [checkedBoxes, setCheckedBoxes] = useState([])

    const checkBox = (e) => {
        if (e.currentTarget.checked) {
            setCheckedBoxes([...checkedBoxes, e.target.value])
        } else {
            const newArr = checkedBoxes.filter(
                (item) => item !== e.target.value
            )
            setCheckedBoxes(newArr)
        }
    }

    const selectDataResponse = (e) => {
        setCurrentSelection(e.target.value)
        selectedResponseFunction(e.target.value)
    }

    useEffect(() => {
        let blockModeString = ''
        let weekdayCheckString = ''

        if (checkedBoxes.includes('blockModeCheck')) {
            blockModeString += '&block_mode=1'
        } else {
            blockModeString = ''
        }

        if (checkedBoxes.includes('weekdayCheck')) {
            weekdayCheckString += '&weekday_header=1'
        } else {
            weekdayCheckString = ''
        }

        checkedBoxesStringFunction(blockModeString + weekdayCheckString)
    }, [checkedBoxes])

    return (
        <div>
            <div className="form-group">
                <label>Response Request</label>
                <select
                    className="form-control custom-select"
                    onChange={selectDataResponse}
                >
                    <option default value={0}>
                        Direct Response URL
                    </option>
                    <option value={1}>[[BMLT_SIMPLE]] Shortcode</option>
                    <option value={2}>[[BMLT_TABLE]] Shortcode</option>
                </select>
                {currentSelection == 1 && (
                    <div>
                        <div>
                            <input
                                type="checkbox"
                                value="blockModeCheck"
                                onChange={checkBox}
                            />
                            <label className="ml-2 mt-3">
                                Return results as block-mode HTML
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                value="weekdayCheck"
                                onChange={checkBox}
                            />
                            <label className="ml-2">
                                Separate results by weekday
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DataResponse
