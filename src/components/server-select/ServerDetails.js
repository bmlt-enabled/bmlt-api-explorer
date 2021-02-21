import React, {useContext} from 'react'
import {Globalcontext} from '../../context/GlobalContext'

function ServerDetails() {

  const {serverDetails, root_server_url} = useContext(Globalcontext)

  return (
    <div className="mt-3">
      {serverDetails === null ? 
      <div className="no-server">
        <p className="mb-0 text-secondary text-small font-weight-bold">No Root Server Selected</p>
        <p className="mb-0 text-secondary text-small font-weight-bold">Please Select A Server</p>
      </div>
      :
      <>
      {serverDetails.map(info => (
      <div className="server-details" key={info.centerLatitude}>
        <p className="mb-0 text-secondary text-small font-weight-bold">Connected to {root_server_url}</p>
        <p className="mb-0 text-secondary text-small font-weight-bold">version: {info.version}</p>
      </div>
      ))}
      </>
      }
    </div>
  )
}

export default ServerDetails
