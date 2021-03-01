import React, { useState, useEffect, useContext} from 'react'
import ReactTooltip from 'react-tooltip'
import {Globalcontext} from '../../context/GlobalContext'
import {Querycontext} from '../../context/QueryContext'
import FormatsComparison from './FormatsComparison'

function IncludedFormats() {
  const {formats} = useContext(Globalcontext)
  const {includedFormatsFunction} = useContext(Querycontext)
  const [selectedFormats, setSelectedFormats] = useState([])
  const [disabled, setDisabled] = useState(true)

  function checkedFormats(e) {
    if (e.currentTarget.checked) {
      setSelectedFormats([...selectedFormats, e.target.value]);
    } else {
      const newArr = selectedFormats.filter((item) => item !== e.target.value);
      setSelectedFormats(newArr);
    }
    
  }

  // pass included formats array to reducer every time it is changed
  useEffect(() => {
    if (selectedFormats.length > 1) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
    includedFormatsFunction(selectedFormats)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedFormats]);  
  
  return (
    <section className="card interface-selectors">
      <div className="card-header">
        <h3>Included Formats</h3>
      </div>
      <div className="card-body">
        <div className="row" id="IncludedFormats">
          {formats.map(format => (
            <div className="col-4 col-md-2 d-flex align-items-center mb-2" key={format.id}>
            <input  type="checkbox" value={format.id} onChange={checkedFormats}/>
            {/* <ReactTooltip place="top" type="info" effect="solid" delayShow={700} id={`formats-label-${format.id}`}>
              <span>{format.name_string}</span>
            </ReactTooltip> */}
            <label className="ml-3 mb-0" data-tip data-for={`formats-label-${format.id}`}>{format.key_string}</label>
          </div>
          ))}
        </div>
        <FormatsComparison disabled={disabled}/>
      </div>
    </section>
  )
}

export default IncludedFormats