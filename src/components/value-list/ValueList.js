import React, { useState, useContext, useEffect } from 'react'
import { Globalcontext } from '../../context/GlobalContext'
import { Querycontext } from '../../context/QueryContext'

const ValueList = () => {
    const { fields } = useContext(Globalcontext)
    const { valueListFunction } = useContext(Querycontext)
    const [currentSelection, setCurrentSelection] = useState('')

    useEffect(() => {
        let searchString = ''
        if (currentSelection.length > 0 && currentSelection !== 'none') {
            searchString = `&meeting_key=${currentSelection.split('|')[1]}`
        } else {
            searchString = ''
        }
        valueListFunction(searchString)
    }, [currentSelection, valueListFunction])

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
        </div>
    )
}

export default ValueList
