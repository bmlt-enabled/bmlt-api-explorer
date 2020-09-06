import React from 'react'
import {Form, Button} from 'react-bootstrap'

const Search = ({ inputRef, updateQuery }) => {
 
  
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Root Server Url</Form.Label>
        <Form.Control type="text" placeholder="bmlt.sezf.org/main_server" ref={inputRef} />
      </Form.Group>
      <Button variant="primary" onClick={updateQuery} >
        Submit
      </Button>
    </Form>
  )
}

export default Search
