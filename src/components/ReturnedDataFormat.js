import React from 'react'
import {Form} from 'react-bootstrap'

const ReturnedData = ({updateDataFormat, updateQuery}) => {

  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Returned Format</Form.Label>
    <Form.Control as="select" ref={updateDataFormat} onChange={updateQuery}>
      <option default value="csv">CSV</option>
      <option value="xml">XML</option>
      <option value="json">JSON</option>
      <option value="kml">KML</option>
      <option value="gpx">GPX</option>
      <option value="poi">POI CSV</option>
      <option value="simple">HTML</option>
    </Form.Control>
  </Form.Group>
  )
}

export default ReturnedData
