import React, { useContext, useEffect, useState } from 'react'
import { updateString } from './helpers'
import { Querycontext } from '../../context/QueryContext'

const StartOrEndTime = () => {
    const { startEndTimeFunction } = useContext(Querycontext)

    const [allStrings, setAllStrings] = useState({
        StartsAfterH: '',
        StartsAfterM: '',
        StartsBeforeH: '',
        StartsBeforeM: '',
        EndsBeforeH: '',
        EndsBeforeM: '',
    })

    useEffect(() => {
        let stringsConcated = ''
        for (let key in allStrings) {
            if (allStrings.hasOwnProperty(key) && allStrings[key].length > 0) {
                stringsConcated += allStrings[key]
            }
        }
        startEndTimeFunction(stringsConcated)
    }, [allStrings, startEndTimeFunction])

    return (
        <div className="form-group">
            <label htmlFor="startAfter">Start after</label>
            <input
                type="text"
                className="form-control"
                id="startAfter"
                aria-describedby="startAfter"
                placeholder=""
                onChange={(e) => updateString(e.target.value, 'StartsAfter', setAllStrings, allStrings)}
            />
            <label htmlFor="startBefore">Start before</label>
            <input
                type="text"
                className="form-control"
                id="startBefore"
                aria-describedby="startBefore"
                placeholder=""
                onChange={(e) => updateString(e.target.value, 'StartsBefore', setAllStrings, allStrings)}
            />
            <label htmlFor="endBefore">End before</label>
            <input
                type="text"
                className="form-control"
                id="endBefore"
                aria-describedby="endBefore"
                placeholder=""
                onChange={(e) => updateString(e.target.value, 'EndsBefore', setAllStrings, allStrings)}
            />
            <p style={{ marginTop: 10, fontStyle: 'italic' }}>
                Format: HH:MM (Military time). 12:00 is Noon, 23:59 is Midnight.
                Leave blank to ignore.
            </p>
        </div>
    )
}

export default StartOrEndTime
