import React, { useState, useEffect} from 'react'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

function IncludedServiceBodies(props) {
  const ServiceBodyApi = props.serverUrl + '/client_interface/jsonp/?switcher=GetServiceBodies'

  // Get data from api
  const [serviceBody, setServiceBody ] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {

      await axios({
        url: ServiceBodyApi,
        adapter: jsonpAdapter
      }).then((res) => {
        setServiceBody(res.data)
        console.log(res.data)
      })
    }
    fetchData();
  },[ServiceBodyApi]);

  return (
    <section className="card interface-selectors">
      <div className="card-header">
        <h3>Included Service Bodies</h3>
      </div>
      <div className="card-body">
        <div className="row" id="includedServiceBodies">
          {serviceBody.map(body => (
            <div className="col-12 mb-2" key={body.id}>
              <input  data-layout={body.type} type="checkbox" value={`&services[]=${body.id}`} onChange={props.onChange}/>
              <label className="ml-3 mb-0">{body.name}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IncludedServiceBodies
