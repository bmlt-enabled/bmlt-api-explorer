import React, { useContext } from 'react'
import { Querycontext } from '../../context/QueryContext'
import { getDisplayOptions } from './helpers'

const DataQuery = () => {
    const {
        selectedResponse,
        dataQueryFunction,
        dataFormatFunction,
        dataQuery,
    } = useContext(Querycontext)
    const displayOptions = getDisplayOptions(selectedResponse)

    return (
        <div>
            <div className="form-group">
                <label>Get Results From</label>
                <select
                    className="form-control custom-select"
                    id="dataQueryResults"
                    onChange={(e) => {
                        if (e.target.value === '?switcher=GetNAWSDump') {
                            dataFormatFunction('csv')
                        }
                        dataQueryFunction(e.target.value)
                    }}
                >
                    {displayOptions.map((option) => {
                        return (
                            <option value={option.value} key={option.value}>
                                {option.title}
                            </option>
                        )
                    })}
                </select>
            </div>
            {(dataQuery === '?switcher=GetServiceBodies' ||
                dataQuery === '?switcher=GetFieldKeys' ||
                dataQuery === '?switcher=GetServerInfo') && (
                <p className={'mb-0'}>No additional options</p>
            )}
        </div>
    )
}

export default DataQuery
