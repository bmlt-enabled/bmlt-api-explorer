import React, {useState} from 'react'
import Query from './Query'

function QueryButton() {
const [queryTrigger, setQueryTrigger] = useState(false)
const [btnText, setBtnText] = useState(true)

  function triggerQueryString() {
    setQueryTrigger(queryTrigger => !queryTrigger);
    setBtnText(!btnText);
  }
console.log(queryTrigger)
  return (
    <>
    <div className={`query-button-container text-center ${btnText ? `mb-0`:`mb-3`}`}>
      <button className="btn btn-primary" onClick={triggerQueryString}>{`${btnText ? `Show`:`Hide`} Query String`}</button>
    </div>
      {queryTrigger === true ?
       <Query />
        :
        <>
        </>
      }
    </>
  )
}

export default QueryButton
