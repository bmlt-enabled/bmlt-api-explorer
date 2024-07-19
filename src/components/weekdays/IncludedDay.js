import React, { useState, useEffect, useContext } from 'react'
import { Querycontext } from '../../context/QueryContext'

const IncludedDay = () => {
    const { includedDaysFunction } = useContext(Querycontext)
    const [days, setDays] = useState([])

    const checkedDay = (e) => {
        if (e.currentTarget.checked) {
            setDays([...days, e.target.value])
        } else {
            const newArr = days.filter((item) => item !== e.target.value)
            setDays(newArr)
        }
    }

    // pass included formats array to reducer every time it is changed
    useEffect(() => {
        includedDaysFunction(days)
    }, [days, includedDaysFunction])

    return (
        <section className="card interface-selectors">
            <div className="card-header">
                <h3>Included Days Of Week</h3>
            </div>
            <div className="card-body">
                <div className="row" id="IncludedDayOfWeek">
                    <div
                        className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start"
                        key="sunday"
                    >
                        <input
                            type="checkbox"
                            value="1"
                            onChange={checkedDay}
                        />
                        <label className="ml-3 mb-2">Sunday</label>
                    </div>
                    <div
                        className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start"
                        key="monday"
                    >
                        <input
                            type="checkbox"
                            value="2"
                            onChange={checkedDay}
                        />
                        <label className="ml-3 mb-2">Monday</label>
                    </div>
                    <div
                        className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start"
                        key="tuesday"
                    >
                        <input
                            type="checkbox"
                            value="3"
                            onChange={checkedDay}
                        />
                        <label className="ml-3 mb-2">Tuesday</label>
                    </div>
                    <div
                        className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start"
                        key="wednesday"
                    >
                        <input
                            type="checkbox"
                            value="4"
                            onChange={checkedDay}
                        />
                        <label className="ml-3 mb-2">Wednesday</label>
                    </div>
                    <div
                        className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start"
                        key="thursday"
                    >
                        <input
                            type="checkbox"
                            value="5"
                            onChange={checkedDay}
                        />
                        <label className="ml-3 mb-2">Thursday</label>
                    </div>
                    <div
                        className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start"
                        key="friday"
                    >
                        <input
                            type="checkbox"
                            value="6"
                            onChange={checkedDay}
                        />
                        <label className="ml-3 mb-2">Friday</label>
                    </div>
                    <div
                        className="col-md-4 col-lg-3 col-6 d-flex align-items-center justify-content-start"
                        key="saturday"
                    >
                        <input
                            type="checkbox"
                            value="7"
                            onChange={checkedDay}
                        />
                        <label className="ml-3 mb-2">Saturday</label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IncludedDay
