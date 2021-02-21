import React from 'react'
import ServerSelect from '../../components/server-select/ServerSelect';
import logo from '../../logo.svg';

function Header() {
  return (
    <header className="banner">
    <div className="container">
      <nav className="navbar navbar-light justify-content-between align-items-center d-flex">
        <figure className="navbar-brand mb-0">
          <img className="w-100" src={logo} alt="bmlt api explorer logo"/>
        </figure>
        <ServerSelect />
      </nav>
    </div>
  </header>
  )
}

export default Header
