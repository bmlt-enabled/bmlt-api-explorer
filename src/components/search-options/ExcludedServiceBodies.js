import React, { useState, useEffect} from 'react'
import axios from 'axios';


function ExcludedServiceBodies(props) {
  const ServiceBodyApi = 'https://' + props.serverUrl + '/client_interface/json/?switcher=GetServiceBodies'

  // Get data from api
  const [serviceBody, setServiceBody ] = useState([])
  


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(ServiceBodyApi)
      console.log(result.data)
      setServiceBody(result.data)
    }
    fetchData();
  },[ServiceBodyApi]);

  return (
    <section>
      <h2>Included Service Bodies</h2>
      <div className="row" id="excludedServiceBodies">
        {serviceBody.map(body => (
          <div className="w-100" key={body.id}>
            <input  data-layout={body.type} type="checkbox" value={`&services[]=-${body.id}`} onChange={props.onChange}/>
            <label className="ml-2 mb-0">{body.name}</label>
            
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExcludedServiceBodies
