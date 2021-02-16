import React, {useEffect, useContext, useState} from 'react'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
import {detailsAPI} from '../../api/switchers'
import {Globalcontext} from '../../context/GlobalContext'

function ServerDetails() {

  const {root_server_url} = useContext(Globalcontext)

  const [info, setInfo ] = useState([])
  const serverinfo = root_server_url + detailsAPI;

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="mt-3">
      {info.length === 0 ? 
      <p className="mb-0 text-secondary text-small font-weight-bold">No Root Server Selected</p>
      :
      <>
      {info.map(info => (
        <p className="mb-0 text-secondary text-small font-weight-bold" key={info.centerLatitude}>Connected to version: {info.version}</p>
      ))}
      </>
      }
    </div>
  )
}

export default ServerDetails
