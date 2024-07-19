import React, { useContext, useEffect, useState } from 'react'
import { Querycontext } from '../../context/QueryContext'
import { ServiceBodySelect } from '../helpers'

const GetChanges = () => {
    const { getChangesQueryFunction } = useContext(Querycontext)
    const [values, setValues] = useState({
        start_date: '',
        end_date: '',
        meeting_id: '',
        service_body_id: '',
    })

    useEffect(() => {
        let queryString = ''
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                if (values[key].length > 0) {
                    queryString += `&${key}=${values[key]}`
                }
            }
        }
        getChangesQueryFunction(queryString)
    }, [values, getChangesQueryFunction])

    return (
        <div>
            <div className="form-group">
                <label htmlFor="startingFrom">
                    Starting from (and including) this date:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="startingFrom"
                    aria-describedby="startingFrom"
                    placeholder="YYYY-MM-DD"
                    onChange={(e) => {
                        setValues({ ...values, start_date: e.target.value })
                    }}
                />
                <label htmlFor="endingOn" className="mt-3">
                    Ending on (and including) this date:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="endingOn"
                    aria-describedby="endingOn"
                    placeholder="YYYY-MM-DD"
                    onChange={(e) => {
                        setValues({ ...values, end_date: e.target.value })
                    }}
                />
                <label htmlFor="meetingID" className="mt-3">
                    Meeting ID:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="meetingID"
                    aria-describedby="meetingID"
                    placeholder=""
                    onChange={(e) => {
                        setValues({ ...values, meeting_id: e.target.value })
                    }}
                />
                <label className="mt-3">Service Body:</label>
                <ServiceBodySelect setValues={setValues} values={values} />
            </div>
        </div>
    )
}

export default GetChanges
