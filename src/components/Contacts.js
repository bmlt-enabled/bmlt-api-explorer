import React from 'react'
import {Form, Button } from 'react-bootstrap'
    const Contacts = ({ contacts }) => {
      
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {contacts.map((contact, i) => (
            <Form>
            
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check key={i} type="checkbox" label={contact.key_string} />
            </Form.Group>
          </Form>
          ))}
        </div>
      )
    };

    export default Contacts