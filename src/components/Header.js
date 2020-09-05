import React, { Component } from 'react'
import {Navbar, Nav, Image} from 'react-bootstrap'
import logo from '../logo.svg'
export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"><img 
          src={ logo } 
          alt=''
          width='30'
          height='30'/>API Explorer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
