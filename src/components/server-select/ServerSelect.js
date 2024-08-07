import React, { useContext } from 'react'
import { Globalcontext } from '../../context/GlobalContext'
import ServerDetails from './ServerDetails'

const ServerSelect = () => {
    const { aggregator, getStuff } = useContext(Globalcontext)
    aggregator.sort((a, b) => (a.name > b.name ? 1 : -1))

    const selectRootServer = (e) => {
        getStuff(e.target.value)
    }

    return (
        <div className="rs-select">
            <div className="server-select form-group mb-0">
                <select
                    className="form-control custom-select"
                    id="dataQueryResults"
                    onChange={selectRootServer}
                >
                    <option>Please Select A Server</option>
                    {aggregator.map((info) => (
                        <option
                            key={info.id}
                            value={info.url}
                        >
                            {info.name}
                        </option>
                    ))}
                    <option
                        key="aggregator"
                        value="https://aggregator.bmltenabled.org/main_server"
                    >
                        Aggregator
                    </option>
                </select>
            </div>
            <ServerDetails />
        </div>
    )
}

export default ServerSelect
