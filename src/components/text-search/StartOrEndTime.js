import React, { useContext, useEffect, useState } from 'react'
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

    const validHour = (hour) => {
        return parseInt(hour) < 24 && parseInt(hour) >= 0 && !hour.includes(':')
    }

    const validMinute = (minute) => {
        return (
            parseInt(minute) >= 0 &&
            parseInt(minute) < 60 &&
            !minute.includes(':')
        )
    }

    const updateString = (inputTime, inputPhrase) => {
        const hString = `${inputPhrase}H`
        const mString = `${inputPhrase}M`
        if (validHour(inputTime)) {
            setAllStrings({
                ...allStrings,
                [hString]: `&${hString}=${inputTime}`,
            })
        } else if (inputTime.includes(':') && inputTime.length < 6) {
            const [hr, min] = inputTime.split(':')
            if (validHour(hr) && validMinute(min)) {
                setAllStrings({
                    ...allStrings,
                    [hString]: `&${hString}=${hr}`,
                    [mString]: `&${mString}=${min}`,
                })
            } else {
                setAllStrings({
                    ...allStrings,
                    [hString]: '',
                    [mString]: '',
                })
            }
        } else {
            setAllStrings({ ...allStrings, [hString]: '', [mString]: '' })
        }
    }

    useEffect(() => {
        let stringsConcated = ''
        for (let key in allStrings) {
            if (allStrings.hasOwnProperty(key) && allStrings[key].length > 0) {
                stringsConcated += allStrings[key]
            }
        }
        startEndTimeFunction(stringsConcated)
    }, [allStrings])

    return (
        <div className="form-group">
            <label htmlFor="startAfter">Start after</label>
            <input
                type="text"
                className="form-control"
                id="startAfter"
                aria-describedby="startAfter"
                placeholder=""
                onChange={(e) => updateString(e.target.value, 'StartsAfter')}
            />
            <label htmlFor="startBefore">Start before</label>
            <input
                type="text"
                className="form-control"
                id="startBefore"
                aria-describedby="startBefore"
                placeholder=""
                onChange={(e) => updateString(e.target.value, 'StartsBefore')}
            />
            <label htmlFor="endBefore">End before</label>
            <input
                type="text"
                className="form-control"
                id="endBefore"
                aria-describedby="endBefore"
                placeholder=""
                onChange={(e) => updateString(e.target.value, 'EndsBefore')}
            />
            <p style={{ marginTop: 10, fontStyle: 'italic' }}>
                Format: HH:MM (Military time). 12:00 is Noon, 23:59 is Midnight.
                Leave blank to ignore.
            </p>
        </div>
    )
}

export default StartOrEndTime
