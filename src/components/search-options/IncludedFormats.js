import React, { useState, useEffect} from 'react'
import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

function IncludedFormats(props) {
  const FormatsApi = props.serverUrl + '/client_interface/jsonp/?switcher=GetFormats'

  // Get data from api
  const [formats, setFormats ] = useState([])

  useEffect(() => {
    const fetchData = async () => {

      await axios({
        url: FormatsApi,
        adapter: jsonpAdapter
      }).then((res) => {
      setFormats(res.data)
      })
    }
    fetchData();
  },[FormatsApi]);

  return (
    <section className="card interface-selectors">
      <div className="card-header">
        <h3>Included Formats</h3>
      </div>
      <div className="card-body">
        <div className="row" id="includedFormats">
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
      </div>
    </section>
  )
}

export default IncludedFormats
