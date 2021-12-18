import React, { useContext, useEffect, useState } from 'react'
import { Globalcontext } from '../../context/GlobalContext'
import { Querycontext } from '../../context/QueryContext'

const SortedResponse = () => {
    const { fields } = useContext(Globalcontext)
    const { sortResponseFunction } = useContext(Querycontext)

    const [currentSelection, setCurrentSelection] = useState(
        `${fields[0].description}|${fields[0].key}`
    )
    const [currentSelections, setCurrentSelections] = useState([])
    const [displayAlert, setDisplayAlert] = useState(false)

    const showAlert = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        setDisplayAlert(true)
        await delay(2000)
        setDisplayAlert(false)
    }

    const pressAddButton = () => {
        if (!currentSelections.includes(currentSelection)) {
            setCurrentSelections([...currentSelections, currentSelection])
        } else {
            showAlert()
        }
    }

    useEffect(() => {
        if (currentSelections.length > 0) {
            let allKeys = []
            currentSelections.forEach((current) => {
                allKeys.push(current.split('|')[1])
            })
            sortResponseFunction('&sort_keys=' + allKeys.join(','))
        } else {
            sortResponseFunction('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSelections])

    return (
        <div className="form-group my-2">
            <label>Fields to Sort By</label>
            <select
                className="form-control custom-select"
                id="sortedResponse"
                onChange={(e) => setCurrentSelection(e.target.value)}
            >
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
            <div className={`text-center mb-0 mt-3`}>
                <button className="btn btn-primary" onClick={pressAddButton}>
                    Add
                </button>
            </div>
            {displayAlert && (
                <div className="text-center mt-1">
                    <p style={{ color: 'red' }}>Value already added</p>
                </div>
            )}
            <div className="mt-3">
                {currentSelections.map((current, i) => {
                    return (
                        <h4 key={i}>{`${i + 1}: ${current.split('|')[0]}`}</h4>
                    )
                })}
            </div>
            {currentSelections.length > 0 && (
                <div className={`query-button-container text-center mb-0 mt-3`}>
                    <button
                        className="btn btn-danger"
                        onClick={() => setCurrentSelections([])}
                    >
                        Clear
                    </button>
                </div>
            )}
        </div>
    )
}

export default SortedResponse
