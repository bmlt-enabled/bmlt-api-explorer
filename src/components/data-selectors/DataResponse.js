import React, { useContext } from 'react'
import { Querycontext } from '../../context/QueryContext'

const DataResponse = () => {
    const { selectedResponseFunction } = useContext(Querycontext)

    const selectDataResponse = (e) => {
        selectedResponseFunction(e.target.value)
    }

    return (
        <div>
            <div className="form-group">
                <label>Response Request</label>
                <select
                    className="form-control custom-select"
                    onChange={selectDataResponse}
                >
                    <option default value={0}>
                        Direct Response URL
                    </option>
                    <option value={1}>[[BMLT_SIMPLE]] Shortcode</option>
                    <option value={2}>[[BMLT_TABLE]] Shortcode</option>
                </select>
            </div>
        </div>
    )
}

export default DataResponse
