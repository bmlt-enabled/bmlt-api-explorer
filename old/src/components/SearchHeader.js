import React, {useState, useEffect} from 'react'
import logo from '../logo.svg';
import axios from 'axios'
import ServerData from './ServerData'

function SearchHeader(props) {

  const [serverInfo, setServerInfo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://tomato.bmltenabled.org/rest/v1/rootservers/')
      
      setServerInfo(result.data)
    }
    fetchData();
    
  }, []);

  const server = props.serverUrl;
  
  return (
    <header className="banner">
      <div className="container">
        <nav className="navbar navbar-light justify-content-between align-items-center d-flex">
          <figure className="navbar-brand mb-0">
            <img className="w-100" src={logo} alt="bmlt api explorer logo"/>
          </figure>
          <div className="server-select form-group mb-0">
            <select className="form-control" id="dataQueryResults" onChange={props.onSubmit}>
              <option default>Please Select A Server</option>
              {serverInfo.map(info => (
                <option key={info.source_id} value={info.root_server_url}>{info.name}</option>
              ))}
            </select>
            <div className="server-info">
              {server !== '' ?
              <ServerData serverUrl={props.serverUrl}/>
              :
              <p className="mb-0 text-white server-connection">No Server Connected</p>
              }
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default SearchHeader
