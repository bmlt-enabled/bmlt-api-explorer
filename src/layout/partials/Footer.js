import React, {useContext} from 'react'
import {Globalcontext} from '../../context/GlobalContext'
import QueryButton from '../../components/query-string/QueryButton';

function Footer() {

  const {root_server_url} = useContext(Globalcontext);
  
  return (
    <div className="container footer-container">
      {root_server_url !== null ?
      <>
     <QueryButton />
      </>
      :
      <>
      </>
    }
      
    </div>
  )
}

export default Footer
