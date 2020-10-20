

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

  var arr = []
  function incFormatChange() {
    arr = []
    var checkboxID = document.getElementById('includedFormats')
    var checkboxes = checkboxID.querySelectorAll('input[type="checkbox"]:checked');
    for (var checkbox of checkboxes) {
      arr.push(checkbox.value)
        console.log(arr)
    }
  }
 
  return (
    <div className="container">
      <SearchHeader onSubmit={submitHandler} />
      <p>Root Server: {rootServer}</p>
      {cond !== '' ? 
        <Formats serverUrl={rootServer} onChange={incFormatChange}/>
          :
          <div className="card">No Root Server Selected</div>
        }
      {/* <div className="querystring">
        <a href={rootServer} className="querystring-link">{rootServer}</a>
      </div> */}
    </div>
  )
}

export default App
