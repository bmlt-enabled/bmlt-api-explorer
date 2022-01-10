import React, { useContext } from 'react'
import { detailsAPI } from '../../api/switchers'
import { Globalcontext } from '../../context/GlobalContext'
import ServerDetails from './ServerDetails'

const ServerSelect = () => {
    const { tomato, getStuff } = useContext(Globalcontext)
    tomato.sort((a, b) => (a.name > b.name ? 1 : -1))

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
                    {tomato.map((info) => (
                        <option
                            key={info.source_id}
                            value={info.root_server_url}
                        >
                            {info.name}
                        </option>
                    ))}
                    <option
                        key="tomato"
                        value="https://tomato.bmltenabled.org/main_server"
                    >
                        Tomato
                    </option>
                </select>
            </div>
            <ServerDetails />
        </div>
    )
}

export default ServerSelect
