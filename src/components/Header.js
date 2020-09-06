import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../logo.svg'

const Header = () => {
  return (
    <Navbar expand="lg">
      <div className="container">
        <Navbar.Brand href="#home">
          <img 
          src={ logo } 
          alt=''
          width='120'
          height='120'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header
