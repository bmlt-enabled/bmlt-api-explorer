import React from 'react'

const DataQuery = () => {
    const selectDataQuery = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <div className="form-group">
                <label>Get Results From</label>
                <select
                    className="form-control custom-select"
                    id="dataQueryResults"
                    onChange={selectDataQuery}
                >
                    <option value="?switcher=GetFormats" default>
                        Meeting Search Results
                    </option>
                    {/* <option value="GetFormats">Get Formats</option>
          <option value="GetServiceBodies">Get Service Bodies</option>
          <option value="GetServerInfo">Get Server Information</option> */}
                </select>
            </div>
        </div>
    )
}

export default DataQuery
