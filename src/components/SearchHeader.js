import React from 'react';
import logo from '../logo.svg';

function SearchHeader(props) {
  
  return (
    <div>
      <nav className="navbar navbar-light justify-content-between bg-primary py-3">
        <div className="container">
          <figure className="navbar-brand mb-0">
            <img className="w-100" src={logo} alt="bmlt api explorer logo"/>
          </figure>
          <form className="form-inline" action="submit" onSubmit={props.onSubmit}>
            <input className="form-control" type='text'name='rootServer' placeholder="ctna.org/main_server"/>
            <button className="btn btn-outline-white" type='submit'>Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default SearchHeader
