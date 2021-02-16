import React, {useContext} from 'react'
import {Globalcontext} from '../../context/GlobalContext'
import ServerDetails from './ServerDetails'

function ServerSelect() {

  const {tomato, updateRootServerURL} = useContext(Globalcontext)

  function selectRootServer(e) {
    updateRootServerURL(e.target.value)
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
      <ServerDetails tomato={tomato}/>
    </div>
  )
}

export default ServerSelect
