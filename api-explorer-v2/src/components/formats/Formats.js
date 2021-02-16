import React, { useState, useEffect, useContext} from 'react'
import ReactTooltip from 'react-tooltip'
import {formatsAPI} from '../../api/switchers'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
import {Globalcontext} from '../../context/GlobalContext'
import {Querycontext} from '../../context/QueryContext'

function Formats(props) {
  const {root_server_url} = useContext(Globalcontext)
  const {formatsFunction} = useContext(Querycontext)

  const fetchFormats = root_server_url + formatsAPI

  const [formatsArray, setFormatsArray] = useState([])
  const [selectedFormats, setSelectedFormats] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        url: fetchFormats,
        adapter: jsonpAdapter
      }).then((res) => {
      setFormatsArray(res.data)
      })
    }
    fetchData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[fetchFormats]);

  function checkedFormats(e) {
    if (e.currentTarget.checked) {
    setSelectedFormats([...selectedFormats, e.target.value]);
    } else {
      const newArr = selectedFormats.filter((item) => item !== e.target.value);
      setSelectedFormats(newArr);
    }
    formatsFunction(selectedFormats)
  }

  return (
    <section className="card interface-selectors">
      <div className="card-header">
        <h3>Excluded Formats</h3>
      </div>
      <div className="card-body">
        <div className="row" id="ExcludedFormats">
          {formatsArray.map(format => (
            <div className="col-4 col-md-2 d-flex align-items-center mb-2" key={format.key_string}>
            <input  type="checkbox" value={`&formats[]=${format.id}`} onChange={checkedFormats}/>
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

export default Formats