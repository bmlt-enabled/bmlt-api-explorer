

import React, {useState} from 'react'
import SearchHeader from './components/SearchHeader'
import Response from './components/data-control/DataResponse'
import DataFormat from './components/data-control/DataFormat'
import DataQuery from './components/data-control/DataQuery'
import IncludedDayOfWeek from './components/search-options/IncludedDayOfWeek'
import ExcludedDayOfWeek from './components/search-options/ExcludedDayOfWeek'
import IncludedFormats from './components/search-options/IncludedFormats'
import ExcludedFormats from './components/search-options/ExcludedFormats'
import './scss/App.scss'

function App() {

  const [rootServer, setRootServer] = useState('')
  const [queryResults, setqueryResults] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    setRootServer(e.currentTarget.rootServer.value)
  }
  const cond = rootServer

  function handlequeryResults(e) {
    if (e.currentTarget.checked) {
      setqueryResults([...queryResults, e.target.value]);
    } else {
      const newArr = queryResults.filter((item) => item !== e.target.value);
      setqueryResults(newArr);
    }
  }
  // useEffect(() => {
  //   console.log(queryResults)
  // }, [queryResults]);

  // let queryResultstr = ''
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
  //   queryResultstr = rootServer + '&formats=' + paramString;
  //   setqueryResults(queryResultstr)
  // }
  
 
  return (
    <div className="main-app">
      <SearchHeader onSubmit={submitHandler} />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Response</h2>
            <div>
              <Response />
              <DataFormat />
              <DataQuery />
            </div>
          </div>
          <div className="col-md-8">
            <h2>Search Options</h2>
            <p>Root Server: {rootServer}</p>
            {cond !== '' ? 
            <div>
            <IncludedDayOfWeek onChange={handlequeryResults}/>
            <ExcludedDayOfWeek onChange={handlequeryResults}/>
            <IncludedFormats serverUrl={rootServer} onChange={handlequeryResults} />
            <ExcludedFormats serverUrl={rootServer} onChange={handlequeryResults} />
            </div>
              :
            <div className="card">No Root Server Selected</div>
            }
            <div className="querystring">
              <a href={`https://${rootServer}/client_interface/csv/?switcher=GetSearchResults${queryResults}`} className="querystring-link">{`https://${rootServer}/client_interface/csv/?switcher=GetSearchResults${queryResults}`}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
