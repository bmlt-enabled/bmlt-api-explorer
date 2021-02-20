import React, {useContext} from 'react'
import {Globalcontext} from '../../context/GlobalContext'

function ServerDetails() {

  const {serverDetails} = useContext(Globalcontext)

  return (
    <div className="mt-3">
      {serverDetails === null ? 
        <p className="mb-0 text-secondary text-small font-weight-bold">No Root Server Selected</p>
      :
      <>
      {serverDetails.map(info => (
        <p className="mb-0 text-secondary text-small font-weight-bold" key={info.centerLatitude}>Connected to version: {info.version}</p>
      ))}
      </>
      }
    </div>
  )
}

export default ServerDetails
