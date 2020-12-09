import React, { useState, useEffect} from 'react'
import axios from 'axios'
import ReactTooltip from 'react-tooltip'

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
          <div className="col-2 d-flex align-items-center mb-2" key={format.key_string}>
            <input  type="checkbox" value={`&formats[]=${format.id}`} onChange={props.onChange}/>
            <ReactTooltip place="top" type="info" effect="solid" delayShow={700} id={`formats-label-${format.id}`}>
              <span>{format.name_string}</span>
            </ReactTooltip>
            <label className="ml-3 mb-0" data-tip data-for={`formats-label-${format.id}`}>{format.key_string}</label>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IncludedFormats
