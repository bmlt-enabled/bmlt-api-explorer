import React from 'react';

function SearchHeader(props) {
  
  return (
    <div>
      <nav className="navbar navbar-light justify-content-between">
        <h1 className="navbar-brand">Navbar</h1>
        <form className="form-inline" action="submit" onSubmit={props.onSubmit}>
          <input className="form-control" type='text'name='rootServer'/>
          <button class="btn btn-outline-primary" type='submit'>Search</button>
        </form>
      </nav>
    </div>
  )
}

export default SearchHeader
