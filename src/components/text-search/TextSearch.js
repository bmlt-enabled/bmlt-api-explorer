import React, {useContext} from 'react'
import {Querycontext} from '../../context/QueryContext'

function TextSearch() {

  const {textSearchFunction} = useContext(Querycontext)

  function setTextSearch(e) {
    textSearchFunction(e.target.value)
  }

  return (
    <div className="form-group">
    <label htmlFor="textSearch">Text Search</label>
    <input type="text" className="form-control" id="textSearch" aria-describedby="textSearch" placeholder="Search..." onChange={setTextSearch} />
  </div>
  )
}

export default TextSearch
