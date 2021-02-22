import React, {useContext} from 'react'
import {Globalcontext} from '../../context/GlobalContext'
import ServerDetails from './ServerDetails'
import {detailsAPI, formatsAPI, bodiesAPI} from '../../api/switchers'

function ServerSelect() {

  const {tomato, updateRootServerURL, setLoading, getServerDetails, getFormats, getServiceBodies} = useContext(Globalcontext)

  // const [serverName, setServerName] = useState()

  function selectRootServer(e) {
    setLoading(true);
    updateRootServerURL(e.target.value);
    getServerDetails(e.target.value + detailsAPI);
    getFormats(e.target.value + formatsAPI);
    getServiceBodies(e.target.value + bodiesAPI);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }
  

  return (
    <div className="rs-select">
     <div className="server-select form-group mb-0">
        <select className="form-control" id="dataQueryResults" onChange={selectRootServer}>
          <option>Please Select A Server</option>
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
