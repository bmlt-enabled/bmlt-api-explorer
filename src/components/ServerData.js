import React, { useState, useEffect} from 'react'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'


function ServerData(props) {

  const serverinfo = props.serverUrl + '/client_interface/jsonp/?switcher=GetServerInfo'

  // Get data from api
  const [info, setInfo ] = useState([])

  useEffect(() => {
    const fetchData = async () => {

      await axios({
        url: serverinfo,
        adapter: jsonpAdapter
      }).then((res) => {
      setInfo(res.data)
      })
    }
    fetchData();
  },[serverinfo]);

  console.log(props.serverUrl)
  return (
    <div>
      {info.map(info => (
        <p className="mb-0 text-secondary text-small font-weight-bold" key={info.centerLatitude}>Connected to version: {info.version}</p>
      ))}
    </div>
  )
}

export default ServerData
