import React, { useState, useEffect} from 'react'
import jsonpAdapter from 'axios-jsonp';
import ReactTooltip from 'react-tooltip'
import axios from 'axios'

function ExcludedFormats(props) {
  const FormatsApi = 'https://' + props.serverUrl + '/client_interface/json/?switcher=GetFormats'

  // Get data from api
  const [formats, setFormats ] = useState([])
  



  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        url: FormatsApi,
        adapter: jsonpAdapter,
        callbackParamName: "jsonCallback"
      });
      console.log(result.data)
      setFormats(result.data)
    }
    fetchData();
  },[FormatsApi]);

  return (
    <section>
      <h2>Excluded Formats</h2>
      <div className="row" id="ExcludedFormats">
        {formats.map(format => (
          <div className="col-4 col-md-2 d-flex align-items-center mb-2" key={format.key_string}>
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

export default ExcludedFormats