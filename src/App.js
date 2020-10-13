

import React, {useState} from 'react'
import Search from './components/Search'
import './scss/App.scss'

function App() {

  const [rootServer, setRootServer] = useState(null)

  function submitHandler(e) {
    e.preventDefault();
    setRootServer(e.currentTarget.rootServer.value)
  }

  return (
    <div className="container">
      <p>Root Server: {rootServer}</p>
      <Search onSubmit={submitHandler} />
    </div>
  )
}

export default App
