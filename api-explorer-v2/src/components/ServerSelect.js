import React, {useState, useEffect, useContext} from 'react'
import {TomatoContext} from '../context/Tomato'

function ServerSelect() {

  const {tomato, updateRootServerURL} = useContext(TomatoContext)
  const [searchTomato, setSearchTomato] = useState([])

  function selectRootServer(e) {
    updateRootServerURL(e.target.value)
  }
  
    // useEffect(() => {
    //   setSearchTomato(tomato)
    // },[props.tomato]);

    console.log(tomato)

    

  return (
    <div className="rs-search">
     <div className="server-select form-group mb-0">
        <select className="form-control" id="dataQueryResults" onChange={selectRootServer}>
          <option default>Please Select A Server</option>
          {tomato.map(info => (
            <option key={info.source_id} value={info.root_server_url}>{info.name}</option>
          ))}
        </select>
        {/* <div className="server-info">
          {server !== '' ?
          <ServerData serverUrl={props.serverUrl}/>
          :
          <p className="mb-0 text-white server-connection">No Server Connected</p>
          }
        </div> */}
      </div>
    </div>
  )
}

export default ServerSelect
