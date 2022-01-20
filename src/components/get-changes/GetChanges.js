import React, { useContext, useEffect, useState } from 'react'
import { Querycontext } from '../../context/QueryContext'
import { Globalcontext } from '../../context/GlobalContext'
import { getAllServiceBodies } from './helpers'

const GetChanges = () => {
    const { selectedResponse, dataQueryFunction, getChangesQueryFunction } =
        useContext(Querycontext)
    const { serviceBodies } = useContext(Globalcontext)
    const [values, setValues] = useState({
        start_date: '',
        end_date: '',
        meeting_id: '',
        service_body_id: '',
    })

    const allServiceBodies = getAllServiceBodies(serviceBodies)

    useEffect(() => {
        let queryString = ''
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                if (values[key].length > 0) {
                    queryString += `&${key}=${values[key]}`
                }
            }
        }
        getChangesQueryFunction(queryString)
    }, [values])

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
                <select
                    className="form-control custom-select"
                    id="dataQueryResults"
                    onChange={(e) => {
                        setValues({
                            ...values,
                            service_body_id: e.target.value,
                        })
                    }}
                >
                    <option value={''} key={-1}>
                        No Service Body Selected
                    </option>
                    {allServiceBodies.map((serviceBody) => {
                        return (
                            <option
                                value={serviceBody.value}
                                key={serviceBody.value}
                            >
                                {serviceBody.label}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default GetChanges
