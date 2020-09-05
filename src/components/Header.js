import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../logo.svg'

const Header = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img 
        src={ logo } 
        alt=''
        width='30'
        height='30'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
