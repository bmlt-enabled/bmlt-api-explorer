import React, {useState} from 'react'
import Query from './Query'

function QueryButton() {
const [queryTrigger, setQueryTrigger] = useState(false)

  function triggerQueryString() {
    setQueryTrigger(queryTrigger => !queryTrigger);
  }
console.log(queryTrigger)
  return (
    <div className="query-button-container">
      <button className="btn btn-primary" onClick={triggerQueryString}>Generate Query String</button>
      {queryTrigger === true ?
       <Query />
        :
        <>
        </>
      }
     
    </div>
  )
}

export default QueryButton
