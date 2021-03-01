import React from 'react'
import DataFormat from '../../components/data-selectors/DataFormat'
import DataQuery from '../../components/data-selectors/DataQuery'
import DataResponse from '../../components/data-selectors/DataResponse'
import TextSearch from '../../components/text-search/TextSearch'

function Sidebar(props) {
  return (
    <>
    <section className="card interface-selectors">
      <div className="card-header">
        <h3>Select Your Response</h3>
      </div>
      <div className="card-body"> 
      <DataResponse/>
      <DataFormat/>
      <DataQuery/>
      </div>
    </section>
    <section className="card interface-selectors">
      <div className="card-header">
        <h3>Select Your Response</h3>
      </div>
      <div className="card-body"> 
      <TextSearch/>
      </div>
    </section>
    </>
  )
}

export default Sidebar
