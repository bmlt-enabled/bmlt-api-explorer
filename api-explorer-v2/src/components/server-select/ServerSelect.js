import React, {useContext, useState} from 'react'
import {Globalcontext} from '../../context/GlobalContext'
import ServerDetails from './ServerDetails'
import {detailsAPI, formatsAPI} from '../../api/switchers'

function ServerSelect() {

  const {tomato, updateRootServerURL, setLoading, getServerDetails, getFormats} = useContext(Globalcontext)

  // const [serverName, setServerName] = useState()

  function selectRootServer(e) {
    setLoading(true);
    updateRootServerURL(e.target.value);
    getServerDetails(e.target.value + detailsAPI);
    getFormats(e.target.value + formatsAPI);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  

  return (
    <div className="rs-select">
     <div className="server-select form-group mb-0">
        <select className="form-control" id="dataQueryResults" onChange={selectRootServer}>
          <option default>Please Select A Server</option>
          {tomato.map(info => (
            <option key={info.source_id} value={info.root_server_url}>{info.name}</option>
          ))}
        </select>
      </div>
      <ServerDetails/>
    </div>
  )
}

export default ServerSelect
