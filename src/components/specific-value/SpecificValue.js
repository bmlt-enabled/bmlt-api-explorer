import React, { useContext, useState, useEffect } from 'react'
import { Globalcontext } from '../../context/GlobalContext'
import { Querycontext } from '../../context/QueryContext'

const SpecificValue = () => {
    const { fields, search } = useContext(Globalcontext)
    const [currentSelection, setCurrentSelection] = useState('')
    const [currentValue, setCurrentValue] = useState('')
    const { specificTextFunction } = useContext(Querycontext)

    let selectionArray = [];

    if (search && currentSelection) {
        selectionArray = search
            .filter((meeting) => {
                const current = meeting[currentSelection.split('|')[1]];
                return current && current.length > 0;
            })
            .map((meeting) => {
                return meeting[currentSelection.split('|')[1]];
            });

        selectionArray = [...new Set(selectionArray)].sort();
    }

    useEffect(() => {
        setCurrentValue('none')
    }, [currentSelection])

    useEffect(() => {
        let searchString = ''
        if (
            currentSelection.length > 0 &&
            currentSelection !== 'none' &&
            currentValue.length > 0 &&
            currentValue !== 'none'
        ) {
            searchString = `&meeting_key=${
                currentSelection.split('|')[1]
            }&meeting_key_value=${encodeURIComponent(currentValue)}`
        } else {
            searchString = ''
        }

        specificTextFunction(searchString)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValue])

    return (
        <div className="form-group">
            <label>Select Field</label>
            <select
                className="form-control custom-select"
                onChange={(e) => setCurrentSelection(e.target.value)}
            >
                <option default value={'none'}>
                    No field selected
                </option>
                {fields.map((field) => {
                    return (
                        <option
                            key={field.key}
                            value={`${field.description}|${field.key}`}
                        >
                            {field.description}
                        </option>
                    )
                })}
            </select>
            <label className="mt-3">Select Value</label>
            <select
                className="form-control custom-select"
                onChange={(e) => setCurrentValue(e.target.value)}
            >
                <option default value={'none'}>
                    No value selected
                </option>
                {selectionArray.length > 0 &&
                    selectionArray.map((meeting, i) => {
                        return (
                            <option key={`${meeting}-${i}`} value={meeting}>
                                {meeting}
                            </option>
                        )
                    })}
            </select>
        </div>
    )
}

export default SpecificValue
