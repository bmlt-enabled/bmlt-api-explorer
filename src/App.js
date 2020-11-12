

import React, {useState} from 'react'
import SearchHeader from './components/SearchHeader'
import IncludedFormats from './components/IncludedFormats'
import ExcludedFormats from './components/ExcludedFormats'
import './scss/App.scss'

function App() {

  const [rootServer, setRootServer] = useState('')
  const [incFormats, setIncFormats] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    setRootServer(e.currentTarget.rootServer.value)
  }
  const cond = rootServer

  function handleIncFormats(e) {
    if (e.currentTarget.checked) {
      setIncFormats([...incFormats, e.target.value]);
    } else {
      const newArr = incFormats.filter((item) => item !== e.target.value);
      setIncFormats(newArr);
    }
  }
  // useEffect(() => {
  //   console.log(incFormats)
  // }, [incFormats]);

  // let incFormatStr = ''
  // let incFormatArr = []
  // function incFormatChange() {
  //   incFormatArr = []
  //   var checkboxID = document.getElementById('includedFormats')
  //   var checkboxes = checkboxID.querySelectorAll('input[type="checkbox"]:checked');
  //   for (var checkbox of checkboxes) {
  //     incFormatArr.push(checkbox.value)
  //       console.log(incFormatArr)   
  //   }
  //   let paramString = incFormatArr.join('&formats=');
  //   incFormatStr = rootServer + '&formats=' + paramString;
  //   setIncFormats(incFormatStr)
  // }
  
 
  return (
    <div className="main-app">
      <SearchHeader onSubmit={submitHandler} />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Response</h2>
          </div>
          <div className="col-md-8">
            <h2>Query Options</h2>
            <p>Root Server: {rootServer}</p>
            {cond !== '' ? 
              <div>
              <IncludedFormats serverUrl={rootServer} onChange={handleIncFormats} />
              <ExcludedFormats serverUrl={rootServer} onChange={handleIncFormats} />
              </div>
                :
              <div className="card">No Root Server Selected</div>
            }
            <div className="querystring">
              <a href={`https://${rootServer}/client_interface/csv/?switcher=GetSearchResults${incFormats}`} className="querystring-link">{`https://${rootServer}/client_interface/csv/?switcher=GetSearchResults${incFormats}`}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
