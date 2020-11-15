

import React, {useState} from 'react'
import SearchHeader from './components/SearchHeader'
import Response from './components/data-control/DataResponse'
import DataFormat from './components/data-control/DataFormat'
import DataQuery from './components/data-control/DataQuery'
import IncludedDayOfWeek from './components/search-options/IncludedDayOfWeek'
import ExcludedDayOfWeek from './components/search-options/ExcludedDayOfWeek'
import IncludedFormats from './components/search-options/IncludedFormats'
import ExcludedFormats from './components/search-options/ExcludedFormats'
import IncludedServiceBodies from './components/search-options/IncludedServiceBodies'
import ExcludedServiceBodies from './components/search-options/ExcludedServiceBodies'
import './scss/App.scss'

function App() {

  const [rootServer, setRootServer] = useState('')
  const [queryResults, setqueryResults] = useState([]);
  const [dataQuery, setDataQuery] = useState('GetSearchResults')
  const [dataFormat, setDataFormat] = useState('csv')

  function handleDataFormat(e) {
    e.preventDefault();
    setDataFormat(e.currentTarget.value)
  }
  
  function handleDataQuery(e) {
    e.preventDefault();
    setDataQuery(e.currentTarget.value)
  }

  function submitHandler(e) {
    e.preventDefault();
    setRootServer(e.currentTarget.rootServer.value)
  }
  const cond = rootServer

  function handleQueryResults(e) {
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
      {cond !== '' ? 
        <div className="row">
          <div className="col-md-4">
            <h2>Response</h2>
            <div>
              <Response />
              <DataFormat onChange={handleDataFormat}/>
              <DataQuery onChange={handleDataQuery}/>
            </div>
          </div>
          <div className="col-md-8">
            <h2>Search Options</h2>
            <p>Root Server: {rootServer}</p>
            
            <div>
              <IncludedDayOfWeek onChange={handleQueryResults}/>
              <ExcludedDayOfWeek onChange={handleQueryResults}/>
              <IncludedFormats serverUrl={rootServer} onChange={handleQueryResults} />
              <ExcludedFormats serverUrl={rootServer} onChange={handleQueryResults} />
              <IncludedServiceBodies serverUrl={rootServer} onChange={handleQueryResults} />
              <ExcludedServiceBodies serverUrl={rootServer} onChange={handleQueryResults} />
            </div>
          </div>
          <div className="querystring">
            <a href={`https://${rootServer}/client_interface/${dataFormat}/?switcher=${dataQuery}${queryResults}`} className="querystring-link" target="_blank" rel='noreferrer noopener'>{`https://${rootServer}/client_interface/${dataFormat}/?switcher=${dataQuery}${queryResults}`}</a>
          </div>
        </div>
        
        :
            <div className="card h2 text-center my-5 py-4 bg-primary text-white">No Root Server Selected</div>
            }
      </div>
    </div>
  )
}

export default App
