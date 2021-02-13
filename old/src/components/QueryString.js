import React from 'react'

const QueryString = ({query}) => {
  return (
    <div className="queryContainer">
      <div className="container">
        <a href={query}>{query}</a>
      </div>
      
    </div>
  )
}

export default QueryString
