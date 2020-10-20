import React, { useState, useEffect} from 'react'
import axios from 'axios';


function IncludedFormats(props) {
  const FormatsApi = 'https://' + props.serverUrl + '/client_interface/json/?switcher=GetFormats'

  // Get data from api
  const [formats, setFormats ] = useState([])
  


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(FormatsApi)
      console.log(result.data)
      setFormats(result.data)
    }
    fetchData();
  },[FormatsApi]);

  return (
    <section>
      <h2>Included Formats</h2>
      <div className="row" id="includedFormats">
        {formats.map(format => (
          <div className="col-1 d-flex align-items-center justify-content-end" key={format.key_string}>
            <label className="mr-2 mb-0">{format.key_string}</label>
            <input  type="checkbox" value={`&formats[]=${format.id}`} onChange={props.onChange}/>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default IncludedFormats
