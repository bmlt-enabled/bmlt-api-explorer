import React, { useContext, useState } from 'react'
import { Querycontext } from '../../context/QueryContext'

function TextSearch() {
    const {
        textSearchFunction,
        searchTypeFunction,
        searchRadiusFunction,
        textSearch,
    } = useContext(Querycontext)
    const [isLocation, setIsLocation] = useState(false)

    function setTextSearch(e) {
        textSearchFunction(e.target.value)
        if (textSearch.length === 0) {
            searchRadiusFunction('')
        }
    }

    function setSearchType(e) {
        if (e.target.value === '3') {
            setIsLocation(true)
        } else {
            setIsLocation(false)
        }
        searchTypeFunction(e.target.value)
    }

    function setSearchRadius(e) {
        searchRadiusFunction(e.target.value)
    }

    return (
        <div className="form-group">
            <label htmlFor="textSearch">Text Search</label>
            <input
                type="text"
                className="form-control"
                id="textSearch"
                aria-describedby="textSearch"
                placeholder="Text search..."
                onChange={setTextSearch}
            />
            {textSearch.length > 0 && (
                <div>
                    <select
                        className="form-control custom-select"
                        style={{ marginTop: 15, marginBottom: 10 }}
                        onChange={setSearchType}
                    >
                        <option value={0} default>
                            Do a General "Casual" Text Search
                        </option>
                        <option value={1}>Search for all the words</option>
                        <option value={2}>Search for the Exact Text</option>
                        <option value={3}>This is a Location</option>
                    </select>
                    {isLocation && (
                        <div>
                            <label htmlFor="searchRadius">
                                Radius Search (Miles or Km)
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="searchRadius"
                                aria-describedby="searchRadius"
                                placeholder="Radius search..."
                                onChange={setSearchRadius}
                            />
                            <p style={{ marginTop: 10, fontStyle: 'italic' }}>
                                Negative Value Must be Integer, and is for
                                Auto-Radius
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default TextSearch
