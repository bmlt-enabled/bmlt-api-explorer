import React, {useContext} from 'react'
import {Globalcontext} from '../../context/GlobalContext'
import ServerDetails from './ServerDetails'

function ServerSelect() {

  // const {tomato, updateRootServerURL, setLoading, getServerDetails, getFormats, getServiceBodies} = useContext(Globalcontext)
  const {tomato, getStuff} = useContext(Globalcontext)


  // const [serverName, setServerName] = useState()

  function selectRootServer(e) {
    // updateRootServerURL(e.target.value);
    getStuff(e.target.value);
    // getServerDetails(e.target.value + detailsAPI);
    // getFormats(e.target.value + formatsAPI);
    // getServiceBodies(e.target.value + bodiesAPI);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1500);
  }
  

  return (
    <div className="rs-select">
     <div className="server-select form-group mb-0">
        <select className="form-control" id="dataQueryResults" onChange={selectRootServer}>
          <option>Please Select A Server</option>
          {tomato.map(info => (
            <option key={info.source_id} value={info.root_server_url}>{info.name}</option>
          ))}
          <option key="tomato" value="https://tomato.bmltenabled.org/main_server">Tomato</option>
        </select>
      </div>
      <ServerDetails/>
    </div>
  )
}

export default ServerSelect
