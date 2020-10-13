

import React, {useState} from 'react'
import SearchHeader from './components/SearchHeader'
import Formats from './components/Formats'
import './scss/App.scss'

function App() {

  const [rootServer, setRootServer] = useState('')

  function submitHandler(e) {
    e.preventDefault();
    setRootServer(e.currentTarget.rootServer.value)
  }
  
  const cond = rootServer
 
  return (
    <div className="container">
      <SearchHeader onSubmit={submitHandler} />
      <p>Root Server: {rootServer}</p>
      {cond !== '' ? 
        <Formats serverUrl={rootServer}/>
          :
          <div className="card">No Root Server Selected</div>
        }
      
    </div>
  )
}

export default App
