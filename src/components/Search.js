import React from 'react';

function Search(props) {
  
  return (
    <div>
      <form action="submit" onSubmit={props.onSubmit}>
      <div className="mb-3">
        <input type='text'name='rootServer'/>
        <button type='submit'>Search</button>
      </div>
      </form>
    </div>
  )
}

export default Search
