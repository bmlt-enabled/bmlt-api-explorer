import React, { useContext, useEffect, useState } from 'react'
import { updateString } from './helpers'
import { Querycontext } from '../../context/QueryContext'

const MeetingDuration = () => {
    const { meetingDurationFunction } = useContext(Querycontext)

    const [allStrings, setAllStrings] = useState({
        MinDurationH: '',
        MinDurationM: '',
        MaxDurationH: '',
        MaxDurationM: '',
    })

    useEffect(() => {
        let stringsConcated = ''
        for (let key in allStrings) {
            if (allStrings.hasOwnProperty(key) && allStrings[key].length > 0) {
                stringsConcated += allStrings[key]
            }
        }
        meetingDurationFunction(stringsConcated)
    }, [allStrings])

    return (
        <div className="form-group">
            <label htmlFor="lastAtLeast">Last at least</label>
            <input
                type="text"
                className="form-control"
                id="lastAtLeast"
                aria-describedby="lastAtLeast"
                placeholder=""
                onChange={(e) => updateString(e.target.value, 'MinDuration', setAllStrings, allStrings)}
            />
            <label htmlFor="lessThanOrEqual">Last less than or equal to</label>
            <input
                type="text"
                className="form-control"
                id="lessThanOrEqual"
                aria-describedby="lessThanOrEqual"
                placeholder=""
                onChange={(e) => updateString(e.target.value, 'MaxDuration', setAllStrings, allStrings)}
            />
            <p style={{ marginTop: 10, fontStyle: 'italic' }}>
                Format: HH:MM. Leave blank to ignore
            </p>
        </div>
    )
}

export default MeetingDuration
